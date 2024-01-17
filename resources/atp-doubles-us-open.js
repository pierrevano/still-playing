const playersInfo = [
  {
    playerName: "Koolhof W.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Skupski N.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Eubanks C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cabal J.S.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Farah R.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Godsick N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Quinn E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Behar A.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Pavlasek A.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Oswald P.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Duran G.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Lammons N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Withrow J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krawietz K.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Puetz T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Barrère G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Blumberg W.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Johnson S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cash J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Patten H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Golubev A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kovacevic A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Moreno De Alboran N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bopanna R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Ebden M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Arevalo M.",
    playerFlagId: 70,
    playerCountryCode: "SLV",
  },
  {
    playerName: "Rojer J-J.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Molchanov D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Pel D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Martinez L. D.",
    playerFlagId: 205,
    playerCountryCode: "VEN",
  },
  {
    playerName: "Arnaldi M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Stevens B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Galloway R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Olivetti A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Isner J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sock J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Melo M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Peers J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Glasspool L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Heliovaara H.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Murray J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Venus M.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Escobar G.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Nedovyesov A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Herbert P.H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mahut N.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Popyrin A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Galan D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Granollers M.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Zeballos H.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Gonzalez M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Molteni A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cachin P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Varillas J. P.",
    playerFlagId: 152,
    playerCountryCode: "PER",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Spizzirri E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zink T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Frusina A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ganesan A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cabral F.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Matos R.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Gille S.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Vliegen J.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Haase R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Mektic N.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Cacic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Cornea V. V.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Mies A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fils A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "van Assche L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "McLachlan B.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Erler A.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Miedler L.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Bolelli S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Vavassori A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Ram R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Salisbury J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Gonzalez S.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Roger-Vasselin E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Cressy M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Martin F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Barrientos N.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Goransson A.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Arneodo R.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Weissborn S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Myneni S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Huesler M.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Bhambri Y.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Demoliner M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Nys H.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Zielinski J.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Middelkoop M.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Pavic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Doumbia S.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Reboul F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ofner S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Kirkov V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kudla D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tsitsipas Pe.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Reyes-Varela M. A.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Vega Hernandez D.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Zapata Miralles B.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Dodig I.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Krajicek A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
];
module.exports = { playersInfo };
