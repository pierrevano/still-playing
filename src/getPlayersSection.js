const fetch = require("node-fetch");

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
  flagsLinks,
  wordingLang,
) => {
  const url = `https://www.flashscore.fr/tennis/${scoreboard}/${tournamentName}/tableau/`;
  let urlValid = false;

  try {
    const response = await fetch(url, { method: "HEAD" });
    urlValid = response.status === 200;

    if (!urlValid && process.argv[2] === "test") {
      process.exit(1);
    }
  } catch (error) {
    if (process.argv[2] === "test") {
      console.error("Error checking URL:", error);
    }
  }

  if (!uniqueCountryCodes.includes(countryCodeParam)) {
    playersSection = `<h1>${wordingLang.common.noMore} ${playerGender} ${wordingLang.common.at} ${tournamentNameFormatted} ${wordingLang.common.thisCountry}!</h1>`;
  } else if (tournamentWinnerName !== undefined) {
    playersSection = `
        <h1>${wordingLang.common.tournamentEnded}! ${winningSubject} ${wordingLang.common.winnerOfLastEdition} ${winningVerb} ${
          tournamentWinnerName.includes("/")
            ? tournamentWinnerName.replace("/", ` ${wordingLang.common.and} `)
            : tournamentWinnerName
        }</h1>
        <h3><em>${wordingLang.common.source}: <a href="${url}" target="_blank">${url}</a></em></h3>`;
  } else {
    playersSection = `
        <h1>${flagsLinksTitle}${pronoun} ${wordingLang.common.areStill} <span id="odometer" class="odometer">${playersNumberAtFirst}</span>!</h1>
        <h2>${stillOnNameText}!</h2>
        <h3><em>${wordingLang.common.source}: <a href="${url}" target="_blank">${url}</a></em></h3>`;
  }

  playersSection += `
    <h4>${wordingLang.common.resultsOfOtherCompetitions}: ${otherTournaments}</h4>
    <h4><a href="${baseUrl}?scoreboard=${scoreboardNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">${wordingLang.common.whatAbout} ${playerGenderNew}?</a></h4>
    <h4><a href="${baseUrl}?scoreboard=atp-${scoreboardNameNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">${wordingLang.common.orMenIn} ${scoreboardNameNew}?</a><br><a href="${baseUrl}?scoreboard=wta-${scoreboardNameNew}&countryCode=${countryCodeParam}&tournamentName=${tournamentName}">${wordingLang.common.orWomenIn}?</a></h4>`;
  if (tournamentWinnerName === undefined) {
    playersSection += `
        <h4>${wordingLang.common.otherCountries}?</h4>
        <h4 id="flagsLinks">${flagsLinks}</h4>`;
  }

  return playersSection;
};

module.exports = getPlayersSection;
