const getStillOnNameText = async (playerStillIn, wordingLang) => {
  if (playerStillIn.length === 0) {
    return wordingLang.stillOnNameText;
  }

  const stillOnNameText = playerStillIn
    .map((player) => `<span>${player.name.slice(0, -1)}</span>`)
    .join(", ")
    .replace(/,(?=[^,]*$)/, ` ${wordingLang.common.and}`);

  return stillOnNameText;
};

module.exports = getStillOnNameText;
