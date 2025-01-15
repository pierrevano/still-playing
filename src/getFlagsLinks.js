const getFlagsLinks = async (
  uniqueCountryCodes,
  uniqueFlagIds,
  countryCodeParam,
  baseUrl,
  scoreboard,
  tournamentName,
) => {
  let flagsLinks = "";
  let flagsLinksTitle = "";

  for (let index = 0; index < uniqueCountryCodes.length; index++) {
    const countryCode = uniqueCountryCodes[index];
    const flagId = uniqueFlagIds[index];
    const flagsIdsCss = require("../resources/_flags_ids_css.js");
    const svgCountryCodeLink = flagsIdsCss.flagsIdsCss[flagId];

    if (countryCode === countryCodeParam) {
      flagsLinksTitle = `<img alt="${countryCode}" title="${countryCode}" src="${svgCountryCodeLink}" style="width: 32px; height: 24px; margin: 12px 10px 0 5px; float: left">`;
    } else {
      flagsLinks += `<a href="${baseUrl}?scoreboard=${scoreboard}&countryCode=${countryCode}&tournamentName=${tournamentName}" title="${countryCode}"><img alt="${countryCode}" src="${svgCountryCodeLink}" style="width: 32px; height: 24px; margin: 0 5px 10px 5px"></a>`;
    }
  }

  return {
    flagsLinksTitle: flagsLinksTitle,
    flagsLinks: flagsLinks,
  };
};

module.exports = getFlagsLinks;
