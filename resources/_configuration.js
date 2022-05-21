const configuration = {
  fsTab: "tableau",
  scoreboardAvailable: ["atp-simples", "wta-simples", "atp-doubles", "wta-doubles"],
  tournamentNameAvailable: ["internationaux-de-france", "open-d-australie", "us-open", "wimbledon", "jeux-olympiques"],
  defaultScoreboard: "atp-simples",
  defaultTournamentName: "internationaux-de-france",
  defaultCountryCode: "FRA",
  wordingConfig: {
    scoreboard: {
      "atp-simples": ["joueurs", "Ils", "wta-simples", "femmes", "doubles", "Le vainqueur", "est"],
      "wta-simples": ["joueuses", "Elles", "atp-simples", "hommes", "doubles", "La vainqueure", "est"],
      "atp-doubles": ["joueurs", "Ils", "wta-doubles", "femmes", "simples", "Les vainqueurs", "sont"],
      "wta-doubles": ["joueuses", "Elles", "atp-doubles", "hommes", "simples", "Les vainqueures", "sont"],
    },
    tournamentName: {
      "internationaux-de-france": {
        name: "Roland Garros",
        backgroundImg: "https://user-images.githubusercontent.com/1529169/120897732-f7e5f880-c627-11eb-9815-205e19d2917d.png",
      },
      "open-d-australie": {
        name: "Open d'Australie",
        backgroundImg: "https://user-images.githubusercontent.com/1529169/124283775-917fc780-db4c-11eb-9dc8-0e2581391ba2.jpg",
      },
      "us-open": {
        name: "US Open",
        backgroundImg: "https://user-images.githubusercontent.com/1529169/124283784-93498b00-db4c-11eb-9d32-82a8ae82c250.jpg",
      },
      wimbledon: {
        name: "Wimbledon",
        backgroundImg: "https://user-images.githubusercontent.com/1529169/124280515-110b9780-db49-11eb-8908-47c999bd7729.jpg",
      },
      "jeux-olympiques": {
        name: "Jeux Olympiques",
        backgroundImg: "https://user-images.githubusercontent.com/1529169/127460096-eaf98006-e8a1-446d-9ebb-8f574fe14ddf.jpg",
      },
    },
  },
};
module.exports = {
  configuration,
};
