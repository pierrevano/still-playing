const getOtherTournaments = async (
  tournamentNameKeys,
  tournamentName,
  wordingLang,
  baseUrl,
) => {
  let otherTournaments = "";

  for (let index = 0; index < tournamentNameKeys.length; index++) {
    const otherTournamentName = tournamentNameKeys[index];
    if (tournamentName !== otherTournamentName) {
      const otherTournamentNameFormatted =
        wordingLang.tournamentName[otherTournamentName].name;
      otherTournaments += `<a href="${baseUrl}?tournamentName=${otherTournamentName}">${otherTournamentNameFormatted}</a>, `;
    }
  }

  otherTournaments = otherTournaments
    .replace(/,\s*$/, "")
    .replace(/,(?=[^,]*$)/, ` ${wordingLang.common.and}`);

  return otherTournaments;
};

module.exports = getOtherTournaments;
