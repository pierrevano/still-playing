const { isOdd } = require("./utils/evenOrOdd");

const getDrawIndex = async ($) => {
  try {
    let drawsFirstValue =
      $(".draw__round:eq(0)").find(".bracket__name").length / 2;
    let drawIndex = 0;

    if (!Number.isInteger(drawsFirstValue))
      drawsFirstValue = drawsFirstValue - 0.5;
    const drawsNumbers = $(".draw__label").length;

    for (let index = 0; index < drawsNumbers; index++) {
      const playersAdvancedNumber = $(".draw__round:eq(" + index + ")").find(
        ".bracket__name--advancing",
      ).length;
      drawIndex = index;
      if (playersAdvancedNumber === drawsFirstValue) {
        if (isOdd(drawsFirstValue)) drawsFirstValue++;
        drawsFirstValue = drawsFirstValue / 2;
      } else {
        break;
      }
    }

    console.log(`drawIndex: ${drawIndex + 1} / ${drawsNumbers}`);

    return drawIndex;
  } catch (error) {
    console.log(`getDrawIndex: ${error}`);
  }
};

module.exports = getDrawIndex;
