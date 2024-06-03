const getPlayersSection = async (
  uniqueCountryCodes,
  countryCodeParam,
  playerGender,
  tournamentNameFormatted,
  tournamentWinnerName,
  winningSubject,
  winningVerb,
  scoreboard,
  tournamentName,
  flagsLinksTitle,
  pronoun,
  playersNumberAtFirst,
  stillOnNameText,
  otherTournaments,
  baseUrl,
  scoreboardNew,
  playerGenderNew,
  scoreboardNameNew,
  flagsLinks
) => {
  if (!uniqueCountryCodes.includes(countryCodeParam)) {
    playersSection = `<h1>Il n\'y a pas de ${playerGender} à ${tournamentNameFormatted} pour ce pays !</h1>`;
  } else if (tournamentWinnerName !== undefined) {
    playersSection = `
        <h1>Ce tournoi est terminé ! ${winningSubject} de la dernière édition ${winningVerb} ${
      tournamentWinnerName.includes("/")
        ? tournamentWinnerName.replace("/", " et ")
        : tournamentWinnerName
    }</h1>
        <h3><em>Source : <a href="https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/" target="_blank">https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/</a></em></h3>`;
  } else {
    playersSection = `
        <h1>${flagsLinksTitle}${pronoun} sont encore <span id="odometer" class="odometer">${playersNumberAtFirst}</span> !</h1>
        <h2>${stillOnNameText}</h2>
        <h3><em>Source : <a href="https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/" target="_blank">https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/</a></em></h3>`;
  }

  playersSection += `
    <h4>Résultats des autres compétitions : ${otherTournaments}</h4>
    <h4><a href="${baseUrl}?scoreboard=${scoreboardNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">Et les ${playerGenderNew} ?</a></h4>
    <h4><a href="${baseUrl}?scoreboard=atp-${scoreboardNameNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">Ou les hommes en ${scoreboardNameNew} ?</a><br><a href="${baseUrl}?scoreboard=wta-${scoreboardNameNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">Ou les femmes ?</a></h4>`;
  if (tournamentWinnerName === undefined) {
    playersSection += `
        <h4>Et les autres pays ?</h4>
        <h4 id="flagsLinks">${flagsLinks}</h4>`;
  }

  return playersSection;
};

module.exports = getPlayersSection;
