const getStillOnNameText = async (playerStillIn) => {
  let stillOnNameText = "PLUS PERSONNE, RIEN, NADA, QUE TCHI !";

  if (playerStillIn.length > 0) {
    stillOnNameText = "";
    for (let index = 0; index < playerStillIn.length; index++) {
      const playerName = playerStillIn[index].name.slice(0, -1);
      stillOnNameText += `<span>${playerName}</span>, `;
    }
    stillOnNameText = stillOnNameText
      .replace(/,\s*$/, "")
      .replace(/,(?=[^,]*$)/, " et");
  }

  return stillOnNameText;
};

module.exports = getStillOnNameText;
