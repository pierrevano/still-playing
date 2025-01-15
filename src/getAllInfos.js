const getAllInfos = async (scoreboard, tournamentName, countryCodeParam) => {
  const playersInfoFile = require(
    `../resources/${scoreboard}-${tournamentName}.js`,
  );
  let allCountryCodes = [];
  let allFlagIds = [];
  let allPlayersNamesForCountry = [];

  for (let index = 0; index < playersInfoFile.playersInfo.length; index++) {
    const playerCountryCode =
      playersInfoFile.playersInfo[index].playerCountryCode;
    if (playerCountryCode !== "undefined") {
      const playerFlagId = playersInfoFile.playersInfo[index].playerFlagId;
      allCountryCodes.push(playerCountryCode);
      allFlagIds.push(playerFlagId);
      if (countryCodeParam === playerCountryCode) {
        console.log(playersInfoFile.playersInfo[index]);
        allPlayersNamesForCountry.push(
          playersInfoFile.playersInfo[index].playerName,
        );
      }
    }
  }

  console.log(`allPlayersNamesForCountry: ${allPlayersNamesForCountry}`);
  console.log(`playersNumberAtFirst: ${allPlayersNamesForCountry.length}`);

  return {
    allCountryCodes: allCountryCodes,
    allFlagIds: allFlagIds,
    allPlayersNamesForCountry: allPlayersNamesForCountry,
    playersNumberAtFirst: allPlayersNamesForCountry.length,
  };
};

module.exports = getAllInfos;
