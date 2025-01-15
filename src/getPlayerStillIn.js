const getDrawIndex = require("./getDrawIndex");
const { isEven, isOdd } = require("./utils/evenOrOdd");

const getPlayerStillIn = async ($, allPlayersNamesForCountry) => {
  try {
    const drawIndex = await getDrawIndex($);
    let allPlayersNamesStillIn = [];
    let playersInfo = [];
    let indexToRemove = [];

    $(".draw__round:eq(" + drawIndex + ")")
      .find(".bracket__participant")
      .filter(function (index) {
        if (
          $(this).find(".bracket__name").hasClass("bracket__name--advancing")
        ) {
          if (isEven(index)) {
            indexToRemove.push(index + 1);
          } else if (isOdd(index)) {
            indexToRemove.push(index - 1);
          }
        }
        if (!$(this).text().includes("/")) {
          allPlayersNamesStillIn.push({
            name: $(this).text().split("(")[0].trim(),
          });
        } else {
          allPlayersNamesStillIn.push({
            name: $(this).text().split("/")[0],
          });
          allPlayersNamesStillIn.push({
            name: $(this).text().split("/")[1].slice(0, -4),
          });
        }
      });
    allPlayersNamesStillIn = allPlayersNamesStillIn.filter(
      function (_value, index) {
        return indexToRemove.indexOf(index) === -1;
      },
    );

    for (let index = 0; index < allPlayersNamesStillIn.length; index++) {
      const playerNameStillIn = allPlayersNamesStillIn[index].name;
      const playerStillIn = allPlayersNamesStillIn[index];
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

module.exports = getPlayerStillIn;
