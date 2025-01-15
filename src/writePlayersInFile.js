const fs = require("fs");

const getBody = require("./getBody");
const getPlayersNamesAtFirst = require("./getPlayersNamesAtFirst");
const getPlayerInfo = require("./getPlayerInfo");

const writePlayersInFile = async (fsTab, scoreboard, tournamentName) => {
  // Retry maximum 5 times
  for (let index = 0; index < 5; index++) {
    fs.writeFileSync(
      `./resources/${scoreboard}-${tournamentName}.js`,
      "const playersInfo = [",
    );

    const $ = await getBody(fsTab, scoreboard, tournamentName);
    const playersNamesAtFirst = await getPlayersNamesAtFirst($);

    for (let index = 0; index < playersNamesAtFirst.length; index++) {
      const playerNameAtFirst = playersNamesAtFirst[index];
      const playerInfo = await getPlayerInfo(playerNameAtFirst);

      fs.appendFileSync(
        `./resources/${scoreboard}-${tournamentName}.js`,
        JSON.stringify(playerInfo, null, 2),
        "utf-8",
      );

      if (index < playersNamesAtFirst.length - 1)
        fs.appendFileSync(
          `./resources/${scoreboard}-${tournamentName}.js`,
          ",",
        );
    }

    fs.appendFileSync(
      `./resources/${scoreboard}-${tournamentName}.js`,
      "]; module.exports = {playersInfo};",
    );

    if (playersNamesAtFirst.length > 0) break;
  }
};

module.exports = writePlayersInFile;
