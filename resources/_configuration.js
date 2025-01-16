const getDefaultTournamentName = require("../src/utils/getDefaultTournamentName");

const defaultTournamentName = getDefaultTournamentName();

const config = {
  hostname: "still-playing.onrender.com",
  mongoDbCredentials: process.env.CREDENTIALS,
  dbName: "still-playing",
  collectionName: "data",
  cacheExpiryDuration: 3600000,

  fsTab: "tableau",
  scoreboardAvailable: [
    "atp-simples",
    "wta-simples",
    "atp-doubles",
    "wta-doubles",
  ],
  tournamentNameAvailable: [
    "internationaux-de-france",
    "open-d-australie",
    "us-open",
    "wimbledon",
    "jeux-olympiques",
  ],
  defaultScoreboard: "atp-simples",
  defaultTournamentName: defaultTournamentName,
  defaultCountryCode: "FRA",
  wording: {
    en: {
      scoreboard: {
        "atp-simples": [
          "players",
          "They",
          "wta-simples",
          "women",
          "doubles",
          "The winner",
          "is",
        ],
        "wta-simples": [
          "players",
          "They",
          "atp-simples",
          "men",
          "doubles",
          "The winner",
          "is",
        ],
        "atp-doubles": [
          "players",
          "They",
          "wta-doubles",
          "women",
          "singles",
          "The winners",
          "are",
        ],
        "wta-doubles": [
          "players",
          "They",
          "atp-doubles",
          "men",
          "singles",
          "The winners",
          "are",
        ],
      },
      stillOnNameText: "NO ONE LEFT, NOTHING, NADA, ZIP",
      common: {
        noMore: "There are no",
        at: "at the",
        thisCountry: "for this country",
        tournamentEnded: "This tournament is over",
        winnerOfLastEdition: "of the last edition",
        and: "and",
        areStill: "are still",
        source: "Source",
        resultsOfOtherCompetitions: "Results of other competitions",
        whatAbout: "And the",
        orMenIn: "Or the men in",
        orWomenIn: "Or the women",
        otherCountries: "What about other countries",
      },
      tournamentName: {
        "internationaux-de-france": {
          name: "Roland Garros",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/120897732-f7e5f880-c627-11eb-9815-205e19d2917d.png",
        },
        "open-d-australie": {
          name: "Australian Open",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124283775-917fc780-db4c-11eb-9dc8-0e2581391ba2.jpg",
        },
        "us-open": {
          name: "US Open",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124283784-93498b00-db4c-11eb-9d32-82a8ae82c250.jpg",
        },
        wimbledon: {
          name: "Wimbledon",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124280515-110b9780-db49-11eb-8908-47c999bd7729.jpg",
        },
        "jeux-olympiques": {
          name: "Olympic Games",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/127460096-eaf98006-e8a1-446d-9ebb-8f574fe14ddf.jpg",
        },
      },
    },
    fr: {
      scoreboard: {
        "atp-simples": [
          "joueurs",
          "Ils",
          "wta-simples",
          "femmes",
          "doubles",
          "Le vainqueur",
          "est",
        ],
        "wta-simples": [
          "joueuses",
          "Elles",
          "atp-simples",
          "hommes",
          "doubles",
          "La vainqueure",
          "est",
        ],
        "atp-doubles": [
          "joueurs",
          "Ils",
          "wta-doubles",
          "femmes",
          "simples",
          "Les vainqueurs",
          "sont",
        ],
        "wta-doubles": [
          "joueuses",
          "Elles",
          "atp-doubles",
          "hommes",
          "simples",
          "Les vainqueures",
          "sont",
        ],
      },
      stillOnNameText: "PLUS PERSONNE, RIEN, NADA, QUE TCHI",
      common: {
        noMore: "Il n'y a pas de",
        at: "à",
        thisCountry: "pour ce pays",
        tournamentEnded: "Ce tournoi est terminé",
        winnerOfLastEdition: "de la dernière édition",
        and: "et",
        areStill: "sont encore",
        source: "Source",
        resultsOfOtherCompetitions: "Résultats des autres compétitions",
        whatAbout: "Et les",
        orMenIn: "Ou les hommes en",
        orWomenIn: "Ou les femmes",
        otherCountries: "Et les autres pays",
      },
      tournamentName: {
        "internationaux-de-france": {
          name: "Roland Garros",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/120897732-f7e5f880-c627-11eb-9815-205e19d2917d.png",
        },
        "open-d-australie": {
          name: "Internationaux d'Australie",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124283775-917fc780-db4c-11eb-9dc8-0e2581391ba2.jpg",
        },
        "us-open": {
          name: "US Open",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124283784-93498b00-db4c-11eb-9d32-82a8ae82c250.jpg",
        },
        wimbledon: {
          name: "Wimbledon",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/124280515-110b9780-db49-11eb-8908-47c999bd7729.jpg",
        },
        "jeux-olympiques": {
          name: "Jeux Olympiques",
          backgroundImg:
            "https://user-images.githubusercontent.com/1529169/127460096-eaf98006-e8a1-446d-9ebb-8f574fe14ddf.jpg",
        },
      },
    },
  },
};

module.exports = {
  config,
};
