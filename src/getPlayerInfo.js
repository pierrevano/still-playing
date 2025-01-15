const got = require("got");

const getPlayerInfo = async (playerNameAtFirst) => {
  let playerInfo;
  const flagsIdsFile = require("../resources/_flags_ids.js");
  const playerName = encodeURI(
    playerNameAtFirst.playerName.replace(/[\'-\.]/g, " "),
  );

  const response = await got(
    `https://s.livesport.services/search/?q=${playerName}&l=16&s=2&f=1%3B1&pid=16&sid=1`,
  );
  const parsedResponse = JSON.parse(
    response.body.replace("cjs.search.jsonpCallback(", "").replace(");", ""),
  );
  const parsedResponseRes = parsedResponse.results;
  const filteredParsedResponse = parsedResponseRes.filter(function (item) {
    return item.type === "participants";
  });
  const filteredParsedResponseWithName = filteredParsedResponse.filter(
    function (item) {
      const name = playerNameAtFirst.playerName.split(" ")[0],
        firstFirstNameLetter = playerNameAtFirst.playerName.split(" ")[1][0];
      if (
        (item.title.startsWith(`${name} `) ||
          item.title.startsWith(`${name}-`)) &&
        item.title.includes(firstFirstNameLetter)
      ) {
        return item;
      }
    },
  );

  if (filteredParsedResponseWithName.length > 0) {
    try {
      playerInfo = {
        playerName: playerNameAtFirst.playerName,
        playerFlagId: filteredParsedResponseWithName[0].flag_id,
        playerCountryCode:
          flagsIdsFile.flagsIds[filteredParsedResponseWithName[0].flag_id],
      };
      if (
        flagsIdsFile.flagsIds[filteredParsedResponseWithName[0].flag_id] ===
        undefined
      ) {
        console.log(`playerName: ${playerName}`);
        console.log(
          `https://s.livesport.services/search/?q=${playerName}&l=16&s=2&f=1%3B1&pid=16&sid=1`,
        );
        console.log(`flagId: ${filteredParsedResponseWithName[0].flag_id}`);
        process.exit(1);
      }
    } catch (error) {
      console.log(`playerName: ${playerName}`);
      console.log(
        `https://s.livesport.services/search/?q=${playerName}&l=16&s=2&f=1%3B1&pid=16&sid=1`,
      );
      console.log(`flagId: ${filteredParsedResponseWithName[0].flag_id}`);
      console.log(`getPlayerInfo: ${error}`);
    }
  } else {
    playerInfo = {
      playerName: playerNameAtFirst.playerName,
      playerFlagId: "undefined",
      playerCountryCode: "undefined",
    };
  }

  console.log(playerInfo);

  return playerInfo;
};

module.exports = getPlayerInfo;
