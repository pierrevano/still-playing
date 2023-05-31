// Define Node modules
const express = require("express");
const app = express();
const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

// Define URLs to scrape
const tournamentName = "wimbledon";
const URLs = [
  `https://ya-encore-un-francais.onrender.com/tennis?scoreboard=atp-simples&countryCode=FRA&tournamentName=${tournamentName}`,
  `https://ya-encore-un-francais.onrender.com/tennis?scoreboard=wta-simples&countryCode=FRA&tournamentName=${tournamentName}`,
];

// Define words const
const botIntro = "🤖 Beep boop";
const nada_word = "PLUS PERSONNE, RIEN, NADA, QUE TCHI !";
const hashtags = "#Wimbledon #Wimbledon2022";
const hashtagsEncoded = "%23Wimbledon %23Wimbledon2022";

const sendTwitter = async (_req, res) => {
  const jsonBinOptions = {
    method: "GET",
    headers: { "X-Master-Key": process.env.X_MASTER_KEY },
    redirect: "follow",
  };

  fetch(`${process.env.JSONBIN_LINK}/latest`, jsonBinOptions)
    .then((response) => response.json())
    .then(async (result) => {
      const players_nb = result.record.players_nb;
      const men = players_nb.men.number;
      const women = players_nb.women.number;
      const men_names = players_nb.men.players_names;
      const women_names = players_nb.women.players_names;
      console.log("men number:", men);
      console.log("women number:", women);
      console.log("men names:", men_names);
      console.log("women names:", women_names);

      let text = "";
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      (async () => {
        for (let index = 0; index < URLs.length; index++) {
          const URL = URLs[index];
          const page = await browser.newPage();
          await page.goto(URL, { waitUntil: "networkidle2" });

          await page.waitForSelector("h1");
          const h1 = await page.$("h1");
          const h1Content = await page.evaluate((el) => el.textContent, h1);
          const h1FirstPart = h1Content.trim().substring(0, h1Content.trim().indexOf("encore"));

          await page.waitForSelector("h2");
          const h2 = await page.$("h2");
          const h2Content = await page.evaluate((el) => el.textContent, h2);
          const h2ContentArray = h2Content.replace(" et ", ", ").split(", ");
          const player_out = index === 0 ? men_names.filter((el) => h2ContentArray.indexOf(el) === -1) : women_names.filter((el) => h2ContentArray.indexOf(el) === -1);

          const player_without_hashtags = `${botIntro}, c'est fini pour ${player_out} ❌ ! ${h1FirstPart}encore ${h2ContentArray.length} 🇫🇷 : ${h2Content} !`;
          const player = `${player_without_hashtags} ${hashtags}`;
          const player_encoded = encodeURI(`${player_without_hashtags} `);
          const player_word = index === 0 ? "men" : "women";
          text += "<h1>";
          text += `<a href="https://twitter.com/intent/tweet/?text=${player_encoded}${hashtagsEncoded}" target="_blank">${h2ContentArray.length} ${player_word}</a>`;
          text += "</h1>";

          if (index === 0 && h2ContentArray.length < men && h2ContentArray.length > 0 && !h2Content.includes(nada_word)) {
            await zapierPOST(player);
            console.log(player);
            await jsonBinPUT(h2ContentArray.length, women, h2ContentArray, women_names);
          } else if (index === 1 && h2ContentArray.length < women && h2ContentArray.length > 0 && !h2Content.includes(nada_word)) {
            await zapierPOST(player);
            console.log(player);
            await jsonBinPUT(men, h2ContentArray.length, men_names, h2ContentArray);
          } else {
            console.log("No updates, so no tweet!");
          }
        }

        await browser.close();

        const index = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Twitter</title>
            </head>
            <body>
              <div style="margin: 20px">${text}</div>
            </body>
          </html>
        `;

        res.send(index);
      })();
    })
    .catch((error) => console.log("error", error));
};

const zapierPOST = async (player_type) => {
  const player_text = JSON.stringify([
    {
      text: player_type,
    },
  ]);
  const zapierOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: player_text,
    redirect: "follow",
  };
  fetch(process.env.ZAPIER_HOOK, zapierOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const jsonBinPUT = async (men, women, men_names, women_names) => {
  const players_nb_new = JSON.stringify({
    players_nb: {
      men: {
        number: men,
        players_names: men_names,
      },
      women: {
        number: women,
        players_names: women_names,
      },
    },
  });

  const jsonBinOptions = {
    method: "PUT",
    headers: {
      "X-Master-Key": process.env.X_MASTER_KEY,
      "Content-Type": "application/json",
    },
    body: players_nb_new,
    redirect: "follow",
  };

  fetch(process.env.JSONBIN_LINK, jsonBinOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

// Call HTML function
app.get("/", (_req, res) => {
  sendTwitter(_req, res);
});

// Launch web server
app.listen(process.env.PORT || 3000, () => {
  console.log("server running on http://localhost:3000/", "");
});
