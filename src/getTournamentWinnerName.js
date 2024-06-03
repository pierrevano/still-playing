const getDrawIndex = require("./getDrawIndex");

const getTournamentWinnerName = async ($) => {
  try {
    const drawIndex = await getDrawIndex($);
    const drawsNumbers = $(".draw__label").length;
    const playerSpan = $(".draw__round:eq(" + drawIndex + ")").find(
      ".bracket__name--advancing"
    );

    if (drawIndex + 1 === drawsNumbers && playerSpan.length > 0) {
      const playerWinnerName = playerSpan.text();

      console.log(`playerWinnerName: ${playerWinnerName}`);

      return playerWinnerName;
    }
  } catch (error) {
    console.log(`getTournamentWinnerName: ${error}`);
  }
};

module.exports = getTournamentWinnerName;
