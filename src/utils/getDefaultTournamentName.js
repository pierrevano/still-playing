function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

function getFourYearIntervals(startYear, count) {
  const years = [];

  for (let i = 0; i < count; i++) {
    let year = startYear + i * 4;
    years.push(year);
  }

  return years;
}

function checkCurrentYearInFourYearIntervals() {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;
  const count = 100;

  const fourYearIntervals = getFourYearIntervals(startYear, count);

  if (fourYearIntervals.includes(currentYear)) {
    return currentYear;
  } else {
    return 1970;
  }
}

const tournaments = [
  {
    name: "internationaux-de-france",
    startDate: new Date(`${getCurrentYear()}-05-22`),
  },
  {
    name: "open-d-australie",
    startDate: new Date(`${getCurrentYear()}-01-17`),
  },
  {
    name: "us-open",
    startDate: new Date(`${getCurrentYear()}-08-29`),
  },
  {
    name: "wimbledon",
    startDate: new Date(`${getCurrentYear()}-06-27`),
  },
  {
    name: "jeux-olympiques",
    startDate: new Date(`${checkCurrentYearInFourYearIntervals()}-07-26`),
  },
];

function getDefaultTournamentName() {
  const currentDate = new Date();
  const threeWeeksInMilliseconds = 2 * 7 * 24 * 60 * 60 * 1000;

  for (const tournament of tournaments) {
    if (
      currentDate >= tournament.startDate &&
      currentDate <=
        new Date(tournament.startDate.getTime() + threeWeeksInMilliseconds)
    ) {
      return tournament.name;
    }
  }

  return "internationaux-de-france"; /* return `internationaux-de-france` as a default tournament name */
}

module.exports = getDefaultTournamentName;
