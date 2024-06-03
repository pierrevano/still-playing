const getOtherTournaments = async (
  tournamentNameKeys,
  tournamentName,
  wording,
  baseUrl
) => {
  let otherTournaments = "";

  for (let index = 0; index < tournamentNameKeys.length; index++) {
    const otherTournamentName = tournamentNameKeys[index];
    if (tournamentName !== otherTournamentName) {
      const otherTournamentNameFormatted =
        wording.tournamentName[otherTournamentName].name;
      otherTournaments += `<a href="${baseUrl}?tournamentName=${otherTournamentName}">${otherTournamentNameFormatted}</a>, `;
    }
  }

  otherTournaments = otherTournaments
    .replace(/,\s*$/, "")
    .replace(/,(?=[^,]*$)/, " et");

  return otherTournaments;
};

module.exports = getOtherTournaments;
