const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const { config } = require("../resources/_configuration");

const getBody = async (fsTab, scoreboard, tournamentName, collectionData) => {
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  try {
    const baseUrl = "https://www.flashscore.fr";
    const sportName = "tennis";
    const URL = `${baseUrl}/${sportName}/${scoreboard}/${tournamentName}/${fsTab}/`;

    console.log(`Getting content from ${URL}`);

    let content;
    const cachedPage = collectionData
      ? await collectionData.findOne({ url: URL })
      : null;

    const now = new Date();
    const cacheAge =
      now - (cachedPage?.createdAt ? new Date(cachedPage.createdAt) : now);

    if (
      cachedPage &&
      cachedPage.content &&
      cacheAge < config.cacheExpiryDuration &&
      process.argv[2] !== "force"
    ) {
      console.log("Returning cached content");
      content = cachedPage.content;
    } else {
      collectionData ? console.log("Deleting cached content", URL) : null;
      collectionData ? await collectionData.deleteMany({ url: URL }) : null;

      const page = await browser.newPage();
      await page.goto(URL, { waitUntil: "networkidle2", timeout: 0 });

      content = await page.content();

      collectionData
        ? await collectionData.insertOne({
            url: URL,
            content: content,
            createdAt: new Date(),
          })
        : null;
    }

    const $ = cheerio.load(content);

    return $;
  } catch (error) {
    console.log(`getBody: ${error}`);
  } finally {
    await browser.close();
  }
};

module.exports = getBody;
