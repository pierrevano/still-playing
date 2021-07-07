const express = require('express'),
    app = express(),
    cheerio = require('cheerio'),
    flagsIdsCss = require('./resources/flags_ids_css.js'),
    flagsIdsFile = require('./resources/flags_ids.js'),
    fs = require('fs'),
    got = require('got'),
    notifyValimate = require('valimate-notifier'),
    puppeteer = require('puppeteer'),
    shell = require('shelljs');

// Get website body
const getBody = async (fsTab, scoreboard, tournamentName) => {
    const baseUrl = 'https://www.flashscore.fr',
        sportName = 'tennis';
    let URL = `${baseUrl}/${sportName}/${scoreboard}/${tournamentName}/${fsTab}/`;
    if (fsTab === 'tennis') URL = `${baseUrl}/${sportName}/`;
    try {
        const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }),
            page = await browser.newPage();
        await page.goto(URL, {
            waitUntil: 'networkidle2',
        });
        const content = await page.content(),
            $ = cheerio.load(content);
        browser.close();
        return $;
    } catch (error) {
        console.log(`getBody: ${error}`);
    }
};

// Get players names at first
const getPlayersNamesAtFirst = async (fsTab, scoreboard, tournamentName) => {
    try {
        const $ = await getBody(fsTab, scoreboard, tournamentName);
        let playersNames = [];
        $('.bracket__name').filter(function() {
            if ($(this).closest('.draw__round--first').length > 0) {
                const playerName = $(this).text().split('/');
                for (let index = 0; index < playerName.length; index++) {
                    playersNames.push({
                        playerName: playerName[index]
                    });
                }
            }
        });
        console.log(playersNames);
        return playersNames;
    } catch (error) {
        console.log(`getPlayersNamesAtFirst: ${error}`);
    }
};

// Get player info (flag id)
const getPlayerInfo = async (playerNameAtFirst) => {
    const flagsIds = flagsIdsFile.flagsIds,
        playerName = encodeURI(playerNameAtFirst.playerName.replace('\'', ' ')),
        playerNameOriginal = playerNameAtFirst.playerName,
        response = await got(`https://s.livesport.services/search/?q=${playerName}&l=16&s=2&f=1%3B1&pid=16&sid=1`),
        parsedResponse = JSON.parse(response.body.replace('cjs.search.jsonpCallback(', '').replace(');', '')),
        parsedResponseRes = parsedResponse.results,
        filteredParsedResponse = (parsedResponseRes.filter(function(item) {
            return item.type == 'participants';
        })),
        filteredParsedResponseWithName = (filteredParsedResponse.filter(function(item) {
            const name = playerNameOriginal.split(' ')[0];
            if (item.title.startsWith(name)) {
                return item;
            }
        }));
    try {
        playerInfo = {
            'playerName': playerNameOriginal,
            'playerFlagId': filteredParsedResponseWithName[0].flag_id,
            'playerCountryCode': flagsIds[filteredParsedResponseWithName[0].flag_id]
        };
        if (flagsIds[filteredParsedResponseWithName[0].flag_id] === undefined) {
            console.log(`flagId: ${filteredParsedResponseWithName[0].flag_id}`);
            process.exit(1);
        }
    } catch (error) {
        console.log(`playerName: ${playerName}`);
        console.log(`flagId: ${filteredParsedResponseWithName[0].flag_id}`);
        console.log(`getPlayerInfo: ${error}`);
    }
    console.log(playerInfo);
    return playerInfo;
};

const getDrawIndex = async (fsTab, scoreboard, tournamentName) => {
    try {
        const $ = await getBody(fsTab, scoreboard, tournamentName);
        let drawsFirstValue = $('.draw__label:first').text(),
            drawIndex = 0;
        const drawsNumbers = $('.draw__label').length;
        drawsFirstValue = drawsFirstValue.includes('64') ? 64 : 32;
        for (let index = 0; index < drawsNumbers; index++) {
            const playersAdvancedNumber = $('.draw__round:eq(' + index + ')').find('.bracket__name--advancing').length;
            drawIndex = index;
            if (playersAdvancedNumber === drawsFirstValue) {
                drawsFirstValue = drawsFirstValue / 2;
            } else {
                break;
            }
        }
        console.log(`drawIndex: ${drawIndex} / ${drawsNumbers}`);
        return drawIndex;
    } catch (error) {
        console.log(`getDrawIndex: ${error}`);
    }
};

function isEven(num) {
    return (num % 2) == 0;
}

function isOdd(num) {
    return (num % 2) == 1;
}

// Get still in the tournament player info
const getPlayerStillIn = async (fsTab, scoreboard, tournamentName, allPlayersNamesForCountry) => {
    try {
        const drawIndex = await getDrawIndex(fsTab, scoreboard, tournamentName),
            $ = await getBody(fsTab, scoreboard, tournamentName);
        let allPlayersNamesStillIn = [],
            playersInfo = [],
            indexToRemove = [];
        $('.draw__round:eq(' + drawIndex + ')')
            .find('.bracket__participant')
            .filter(function(index) {
                if ($(this).find('.bracket__name').hasClass('bracket__name--advancing')) {
                    if (isEven(index)) {
                        indexToRemove.push(index + 1);
                    } else if (isOdd(index)) {
                        indexToRemove.push(index - 1);
                    }
                }
                if (!$(this).text().includes('/')) {
                    allPlayersNamesStillIn.push({
                        name: $(this).text().split('(')[0].slice(0, -1)
                    });
                } else {
                    allPlayersNamesStillIn.push({
                        name: $(this).text().split('/')[0]
                    });
                    allPlayersNamesStillIn.push({
                        name: $(this).text().split('/')[1].slice(0, -4)
                    });
                }
            });
        allPlayersNamesStillIn = allPlayersNamesStillIn.filter(function(_value, index) {
            return indexToRemove.indexOf(index) === -1;
        });
        for (let index = 0; index < allPlayersNamesStillIn.length; index++) {
            const playerNameStillIn = allPlayersNamesStillIn[index].name,
                playerStillIn = allPlayersNamesStillIn[index];
            if (allPlayersNamesForCountry.includes(playerNameStillIn)) {
                playersInfo.push(playerStillIn);
            }
        }
        console.log(playersInfo);
        return playersInfo;
    } catch (error) {
        console.log(`getPlayerStillIn: ${error}`);
    }
};

// Create HTML on root URL load
app.get('/', (req, res) => {
    (async () => {
        // const base declarations
        const fsTab = 'tableau',
            scoreboardAvailable = [
                'atp-simples',
                'wta-simples',
                'atp-doubles',
                'wta-doubles'
            ],
            tournamentName = 'wimbledon',
            defaultCountryCode = 'FRA',
            wordingConfig = {
                'scoreboard': {
                    'atp-simples': [
                        'joueurs',
                        'Ils',
                        'wta-simples',
                        'femmes',
                        'doubles'
                    ],
                    'wta-simples': [
                        'joueuses',
                        'Elles',
                        'atp-simples',
                        'hommes',
                        'doubles'
                    ],
                    'atp-doubles': [
                        'joueurs',
                        'Ils',
                        'wta-doubles',
                        'femmes',
                        'simples'
                    ],
                    'wta-doubles': [
                        'joueuses',
                        'Elles',
                        'atp-doubles',
                        'hommes',
                        'simples'
                    ]
                },
                'tournamentName': {
                    'internationaux-de-france': {
                        'name': 'Roland Garros',
                        'backgroundImg': 'https://user-images.githubusercontent.com/1529169/120897732-f7e5f880-c627-11eb-9815-205e19d2917d.png'
                    },
                    'open-d-australie': {
                        'name': 'Open d\'Australie',
                        'backgroundImg': 'https://user-images.githubusercontent.com/1529169/124283775-917fc780-db4c-11eb-9dc8-0e2581391ba2.jpg'
                    },
                    'us-open': {
                        'name': 'US Open',
                        'backgroundImg': 'https://user-images.githubusercontent.com/1529169/124283784-93498b00-db4c-11eb-9d32-82a8ae82c250.jpg'
                    },
                    'wimbledon': {
                        'name': 'Wimbledon',
                        'backgroundImg': 'https://user-images.githubusercontent.com/1529169/124280515-110b9780-db49-11eb-8908-47c999bd7729.jpg'
                    }
                }
            };
        console.log(`tournamentName: ${tournamentName}`);
        // let base declarations
        let baseUrl = 'https://ya-encore-un-francais.herokuapp.com',
            scoreboard = req.query.scoreboard,
            countryCodeParam = req.query.countryCode;
        if (process.argv[2] === 'test') baseUrl = 'http://localhost:3000';
        if (scoreboard === undefined || !scoreboardAvailable.includes(scoreboard)) scoreboard = scoreboardAvailable[0];
        if (countryCodeParam === undefined) countryCodeParam = defaultCountryCode;
        countryCodeParam = countryCodeParam.toUpperCase();
        // wording variations
        const playerGender = wordingConfig.scoreboard[scoreboard][0],
            pronoun = wordingConfig.scoreboard[scoreboard][1],
            scoreboardNew = wordingConfig.scoreboard[scoreboard][2],
            playerGenderNew = wordingConfig.scoreboard[scoreboard][3],
            scoreboardNameNew = wordingConfig.scoreboard[scoreboard][4],
            tournamentNameNoPlayer = wordingConfig.tournamentName[tournamentName].name,
            backgroundImg = wordingConfig.tournamentName[tournamentName].backgroundImg;
        // let declarations
        let allCountryCodes = [],
            allFlagIds = [],
            uniqueCountryCodes = [],
            uniqueFlagIds = [],
            allPlayersNamesForCountry = [],
            playersNumberAtFirst = 0,
            stillOnNameText = '',
            flagsLinks = '',
            flagsLinksTitle = '';
        if (process.argv[2] === 'create') {
            // Get all players when tournament begins
            shell.rm([
                './resources/atp-simples.js',
                './resources/wta-simples.js',
                './resources/atp-doubles.js',
                './resources/wta-doubles.js',
            ]);
            for (let index = 0; index < scoreboardAvailable.length; index++) {
                const scoreboard = scoreboardAvailable[index];
                fs.appendFileSync(`./resources/${scoreboard}.js`, 'const playersInfo = [');
                const playersNamesAtFirst = await getPlayersNamesAtFirst(fsTab, scoreboard, tournamentName);
                for (let index = 0; index < playersNamesAtFirst.length; index++) {
                    const playerNameAtFirst = playersNamesAtFirst[index],
                        playerInfo = await getPlayerInfo(playerNameAtFirst);
                    fs.appendFileSync(`./resources/${scoreboard}.js`, JSON.stringify(playerInfo, null, 2), 'utf-8');
                    if (index < playersNamesAtFirst.length - 1) fs.appendFileSync(`./resources/${scoreboard}.js`, ',');
                }
                fs.appendFileSync(`./resources/${scoreboard}.js`, ']; module.exports = {playersInfo};');
            }
            shell.echo('All players imported.');
            process.exit(1);
        } else {
            const playersInfoFile = require(`./resources/${scoreboard}.js`),
                playersInfo = playersInfoFile.playersInfo;
            for (let index = 0; index < playersInfo.length; index++) {
                const playerCountryCode = playersInfo[index].playerCountryCode,
                    playerFlagId = playersInfo[index].playerFlagId;
                allCountryCodes.push(playerCountryCode);
                allFlagIds.push(playerFlagId);
                if (countryCodeParam === playerCountryCode) {
                    console.log(playersInfo[index]);
                    allPlayersNamesForCountry.push(playersInfo[index].playerName);
                }
            }
            console.log(`allPlayersNamesForCountry: ${allPlayersNamesForCountry}`);
            playersNumberAtFirst = allPlayersNamesForCountry.length;
            console.log(`playersNumberAtFirst: ${playersNumberAtFirst}`);
            uniqueCountryCodes = allCountryCodes.filter((countryCode, countryCodeIndex, allCountryCodes) => allCountryCodes.indexOf(countryCode) === countryCodeIndex);
            uniqueFlagIds = allFlagIds.filter((flagId, flagIdIndex, allFlagIds) => allFlagIds.indexOf(flagId) === flagIdIndex);
            const playerStillIn = await getPlayerStillIn(fsTab, scoreboard, tournamentName, allPlayersNamesForCountry);
            if (playerStillIn.length === 0) {
                stillOnNameText = 'PLUS PERSONNE, RIEN, NADA, QUE TCHI !';
            } else {
                for (let index = 0; index < playerStillIn.length; index++) {
                    const playerName = playerStillIn[index].name.slice(0, -1);
                    stillOnNameText += `<span>${playerName}</span>, `;
                }
                stillOnNameText = stillOnNameText
                    .replace(/,\s*$/, '')
                    .replace(/,(?=[^,]*$)/, ' et');
            }
            for (let index = 0; index < uniqueCountryCodes.length; index++) {
                const countryCode = uniqueCountryCodes[index],
                    flagId = uniqueFlagIds[index],
                    svgCountryCodeLink = flagsIdsCss.flagsIdsCss[flagId];
                if (countryCode === countryCodeParam) {
                    flagsLinksTitle = `<img alt="${countryCode}" title="${countryCode}" src="${svgCountryCodeLink}" style="width: 32px; height: 24px; margin: 12px 10px 0 5px; float: left">`;
                } else {
                    flagsLinks += `<a href="${baseUrl}?scoreboard=${scoreboard}&countryCode=${countryCode}" title="${countryCode}"><img alt="${countryCode}" src="${svgCountryCodeLink}" style="width: 32px; height: 24px; margin: 0 5px 10px 5px"></a>`;
                }
            }
            if (!uniqueCountryCodes.includes(countryCodeParam)) {
                playersSection = `<h1>Il n\'y a pas de ${playerGender} à ${tournamentNameNoPlayer} pour ce pays !</h1>`;
            } else {
                playersSection = `
                <h1>${flagsLinksTitle}${pronoun} sont encore <span id="odometer" class="odometer">${playersNumberAtFirst}</span> !</h1>
                <h2>${stillOnNameText}</h2>
                <h3><em>Source : <a href="https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/" target="_blank">https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/</a></em></h3>`;
            }
            playersSection += `
            <h4 style="margin-bottom: 0"><a href="${baseUrl}?scoreboard=${scoreboardNew}&countryCode=${countryCodeParam}">Et les ${playerGenderNew} ?</a></h4>
            <h4 style="margin-top: 20px"><a href="${baseUrl}?scoreboard=atp-${scoreboardNameNew}&countryCode=${countryCodeParam}">Ou les hommes en ${scoreboardNameNew} ?</a><br><a href="${baseUrl}?scoreboard=wta-${scoreboardNameNew}&countryCode=${countryCodeParam}">Ou les femmes ?</a></h4>
            <h4 style="margin-bottom: 0">Et les autres pays ?</h4>
            <h4 style="max-width: 420px">${flagsLinks}</h4>`;
            /* beautify ignore:start */
            const index = `
                <!doctype html><html lang="fr">
                    <head><meta charset="utf-8">
                        <title>Y'a encore un français ?</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
                        <link href="https://fonts.cdnfonts.com/css/francois-one" rel="stylesheet">
                        <style>
                            body {text-align: center; margin: 0; font-family: "Francois One"; background-color: #000; color: #FFF; background-image: url("${backgroundImg}"); background-size: cover;}
                            a {color:#FFF;}
                            a:visited {color:#FFF;}
                            a:hover {color:#FFF;}
                            a:active {color:#FFF;}
                            .players {min-height: 100vh; align-items: center; justify-content: center; display: flex; flex-flow: column; background: rgba(0, 0, 0, 0.2); position: relative;}
                            .odometer {font-size: 25px; font-family: "Francois One" !important}
                            .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
                        </style>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HubSpot/odometer@latest/themes/odometer-theme-default.css">
                        <script src="https://cdn.jsdelivr.net/gh/HubSpot/odometer@latest/odometer.min.js"></script>
                        <script>setTimeout(function(){odometer.innerHTML = ${playerStillIn.length}}, 1000);</script>
                    </head>
                    <body>
                        <a href="https://github.com/pierrevano/RG2021" target="_blank" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="z-index: 1; fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
                        <div class="players">${playersSection}</div>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PJG88RFDRZ"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-PJG88RFDRZ");</script>
                    </body>
                </html>`;
            /* beautify ignore:end */
            res.send(index);
        }
    })();
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server running on http://localhost:3000/', '');
    notifyValimate(true);
});