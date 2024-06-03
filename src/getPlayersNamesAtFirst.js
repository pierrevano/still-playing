const getPlayersNamesAtFirst = async ($) => {
  try {
    let playersNames = [];

    $(".bracket__name").filter(function () {
      if ($(this).closest(".draw__round--first").length > 0) {
        const playerName = $(this).text().split("/");
        for (let index = 0; index < playerName.length; index++) {
          playersNames.push({
            playerName: playerName[index],
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

module.exports = getPlayersNamesAtFirst;
