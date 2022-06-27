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
  `https://ya-encore-un-francais.herokuapp.com/tennis?scoreboard=atp-simples&countryCode=FRA&tournamentName=${tournamentName}`,
  `https://ya-encore-un-francais.herokuapp.com/tennis?scoreboard=wta-simples&countryCode=FRA&tournamentName=${tournamentName}`,
];

// Define words const
const botIntro = "🤖 Beep boop";
const nada_word = "PLUS PERSONNE, RIEN, NADA, QUE TCHI !";
const hashtags = "#Wimbledon #Wimbledon2022";
const hashtagsEncoded = "%Wimbledon %23Wimbledon2022";

const sendTwitter = async (_req, res) => {
  const jsonBinOptions = {
    method: "GET",
    headers: { "X-Master-Key": process.env.X_MASTER_KEY },
    redirect: "follow",
  };

  fetch(`${process.env.JSONBIN_LINK}/latest`, jsonBinOptions)
    .then((response) => response.json())
    .then(async (result) => {
      const men = result.record.players_nb.men;
      const women = result.record.players_nb.women;
      console.log(`men: ${men}`);
      console.log(`women: ${women}`);

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

          const player_without_hashtags = `${botIntro}, ${h1FirstPart.toLowerCase()}encore ${h2ContentArray.length} 🇫🇷 : ${h2Content} !`;
          console.log(player_without_hashtags);
          const player = `${player_without_hashtags} ${hashtags}`;
          const player_encoded = encodeURI(`${player_without_hashtags} `);
          const player_word = index === 0 ? "men" : "women";
          text += "<h1>";
          text += `<a href="https://twitter.com/intent/tweet/?text=${player_encoded}${hashtagsEncoded}">${h2ContentArray.length} ${player_word}</a>`;
          text += "</h1>";

          if (index === 0 && h2ContentArray.length < men && h2ContentArray.length > 0 && !h2Content.includes(nada_word)) {
            await zapierPOST(player);
            await jsonBinPUT(h2ContentArray.length, women);
          } else if (index === 1 && h2ContentArray.length < women && h2ContentArray.length > 0 && !h2Content.includes(nada_word)) {
            await zapierPOST(player);
            await jsonBinPUT(men, h2ContentArray.length);
          } else {
            console.log("No need to update!");
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

const jsonBinPUT = async (men, women) => {
  const players_nb_new = JSON.stringify({
    players_nb: {
      men: men,
      women: women,
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
app.get("/twitter", (_req, res) => {
  sendTwitter(_req, res);
});

// Launch web server
app.listen(process.env.PORT || 3000, () => {
  console.log("server running on http://localhost:3000/", "");
});
