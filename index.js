require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const { performance } = require("perf_hooks");
const express = require("express");
const app = express();

const { config } = require("./resources/_configuration.js");
const getAllInfos = require("./src/getAllInfos.js");
const getBody = require("./src/getBody.js");
const getFlagsLinks = require("./src/getFlagsLinks.js");
const getIndex = require("./src/getIndex.js");
const getOtherTournaments = require("./src/getOtherTournaments.js");
const getPlayersSection = require("./src/getPlayersSection.js");
const getPlayerStillIn = require("./src/getPlayerStillIn.js");
const getStillOnNameText = require("./src/getStillOnNameText.js");
const getTournamentWinnerName = require("./src/getTournamentWinnerName.js");
const writeFiles = require("./src/writeFiles.js");

// Create HTML on root URL load
const createIndex = async (req, res) => {
  const t0 = performance.now();

  const uri = `mongodb+srv://${config.mongoDbCredentials}@cluster0.sn2spay.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  const database = client.db(config.dbName);
  const collectionData = database.collection(config.collectionName);

  const tournamentNameKeys = Object.keys(config.wording.tournamentName);
  let baseUrl = `https://${config.hostname}/tennis`;
  let scoreboard = req.query.scoreboard;
  let countryCodeParam = req.query.countryCode;
  let tournamentName = req.query.tournamentName;

  const beamanalytics = req.query.beamanalytics;
  const beamanalyticsEnabled = beamanalytics === "false" ? false : true;

  if (process.argv[2] === "test") baseUrl = "http://localhost:3000/tennis";
  if (
    scoreboard === undefined ||
    !config.scoreboardAvailable.includes(scoreboard)
  )
    scoreboard = config.defaultScoreboard;
  if (countryCodeParam === undefined)
    countryCodeParam = config.defaultCountryCode;
  if (
    tournamentName === undefined ||
    !config.tournamentNameAvailable.includes(tournamentName)
  )
    tournamentName = config.defaultTournamentName;
  countryCodeParam = countryCodeParam.toUpperCase();
  console.log(`tournamentName: ${tournamentName}`);

  const playerGender = config.wording.scoreboard[scoreboard][0];
  const pronoun = config.wording.scoreboard[scoreboard][1];
  const scoreboardNew = config.wording.scoreboard[scoreboard][2];
  const playerGenderNew = config.wording.scoreboard[scoreboard][3];
  const scoreboardNameNew = config.wording.scoreboard[scoreboard][4];
  const winningSubject = config.wording.scoreboard[scoreboard][5];
  const winningVerb = config.wording.scoreboard[scoreboard][6];
  const tournamentNameFormatted =
    config.wording.tournamentName[tournamentName].name;
  const backgroundImg =
    config.wording.tournamentName[tournamentName].backgroundImg;

  if (process.argv[2] === "create") {
    writeFiles(
      config.fsTab,
      config.tournamentNameAvailable,
      config.defaultTournamentName,
      config.scoreboardAvailable
    );
  } else {
    const allInfos = await getAllInfos(
      scoreboard,
      tournamentName,
      countryCodeParam
    );
    const uniqueCountryCodes = allInfos.allCountryCodes.filter(
      (countryCode, countryCodeIndex, allCountryCodes) =>
        allCountryCodes.indexOf(countryCode) === countryCodeIndex
    );
    const uniqueFlagIds = allInfos.allFlagIds.filter(
      (flagId, flagIdIndex, allFlagIds) =>
        allFlagIds.indexOf(flagId) === flagIdIndex
    );
    const $ = await getBody(
      config.fsTab,
      scoreboard,
      tournamentName,
      collectionData
    );
    const playerStillIn = await getPlayerStillIn(
      $,
      allInfos.allPlayersNamesForCountry
    );
    const stillOnNameText = await getStillOnNameText(playerStillIn);
    const flags = await getFlagsLinks(
      uniqueCountryCodes,
      uniqueFlagIds,
      countryCodeParam,
      baseUrl,
      scoreboard,
      tournamentName
    );
    const otherTournaments = await getOtherTournaments(
      tournamentNameKeys,
      tournamentName,
      config.wording,
      baseUrl
    );
    const tournamentWinnerName = await getTournamentWinnerName($);
    const playersSection = await getPlayersSection(
      uniqueCountryCodes,
      countryCodeParam,
      playerGender,
      tournamentNameFormatted,
      tournamentWinnerName,
      winningSubject,
      winningVerb,
      scoreboard,
      tournamentName,
      flags.flagsLinksTitle,
      pronoun,
      allInfos.playersNumberAtFirst,
      stillOnNameText,
      otherTournaments,
      baseUrl,
      scoreboardNew,
      playerGenderNew,
      scoreboardNameNew,
      flags.flagsLinks
    );
    const index = await getIndex(
      backgroundImg,
      playerStillIn,
      playersSection,
      beamanalyticsEnabled,
      scoreboard,
      countryCodeParam,
      tournamentName
    );

    res.send(index);

    const t1 = performance.now();
    console.log(`HTML rendering took ${t1 - t0} milliseconds.`);
  }
};

// Launch loading page
app.use("/", express.static(__dirname + "/site"));

// Call HTML function
app.get("/tennis", (req, res) => {
  createIndex(req, res);
});

// Launch web server
app.listen(process.env.PORT || 3000, () => {
  console.log("server running on http://localhost:3000/", "");
});
