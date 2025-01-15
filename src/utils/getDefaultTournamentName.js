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
  const threeWeeksInMilliseconds = 3 * 7 * 24 * 60 * 60 * 1000; // Three weeks in milliseconds

  for (const tournament of tournaments) {
    const startDate = tournament.startDate.getTime();

    // Check if the current date is within 3 weeks before or 3 weeks after the tournament start date
    if (
      currentDate.getTime() >= startDate - threeWeeksInMilliseconds &&
      currentDate.getTime() <= startDate + threeWeeksInMilliseconds
    ) {
      return tournament.name;
    }
  }

  return "internationaux-de-france"; // Return default tournament name if no match
}

module.exports = getDefaultTournamentName;
