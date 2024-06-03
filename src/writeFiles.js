const writePlayersInFile = require("./writePlayersInFile");

const writeFiles = async (
  fsTab,
  tournamentNameAvailable,
  defaultTournamentName,
  scoreboardAvailable
) => {
  const t0 = performance.now();

  // Get all players when tournament begins
  for (let index = 0; index < tournamentNameAvailable.length; index++) {
    const tournamentName = tournamentNameAvailable[index];

    for (let index = 0; index < scoreboardAvailable.length; index++) {
      const scoreboard = scoreboardAvailable[index];

      console.log(`Reading ./resources/${scoreboard}-${tournamentName}.js...`);

      try {
        if (process.argv[2] === "create" && process.argv[3] === "new") {
          if (tournamentName === defaultTournamentName) {
            await writePlayersInFile(fsTab, scoreboard, tournamentName);

            console.log(
              `Done ✅ ./resources/${scoreboard}-${tournamentName}.js`
            );
          } else {
            console.log(
              `Skipped ✅ ./resources/${scoreboard}-${tournamentName}.js`
            );
          }
        } else {
          require(`./resources/${scoreboard}-${tournamentName}.js`);
        }
      } catch (error) {
        await writePlayersInFile(fsTab, scoreboard, tournamentName);
      }
    }
  }

  const t1 = performance.now();

  console.log(`All players imported in ${t1 - t0} milliseconds.`);

  process.exit(1);
};

module.exports = writeFiles;
