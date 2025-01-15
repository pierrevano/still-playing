const playersInfo = [
  {
    playerName: "Arevalo M.",
    playerFlagId: 70,
    playerCountryCode: "SLV",
  },
  {
    playerName: "Pavic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Hijikata R.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kubler J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Willis M.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Escobar G.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Smith J-P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Martos Gornes S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Arends S.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Johnson L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Nouza P.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Rikl P.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
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
    playerName: "Salisbury J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Skupski N.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Comesana F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Goransson A.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Verbeek S.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Erler A.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Mies A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kyrgios N.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Saville L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Tu L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Frantzen C.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Jebens H.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Bortolotti M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cobolli F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Darderi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hidalgo D.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Pavlasek A.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Rojer J-J.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Arneodo R.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Cazaux A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Barrientos N.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Bopanna R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Murray J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Peers J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gojo B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Balaji N. S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Reyes-Varela M. A.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Haase R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Nedovyesov A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Cabral F.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Mektic N.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Venus M.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
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
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "King E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Shevchenko A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Behar A.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Galloway R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gonzalez S.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Miedler L.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Watanabe S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Takeru Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cash J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Glasspool L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Gille S.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Zielinski J.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Bu Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Jacq G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Luz O.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Pospisil V.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Harrison C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pel D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Cornea V. V.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Navone M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Heliovaara H.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Patten H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Bollipalli R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Seggerman R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Polmans M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Romios M. C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Guinard M.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bhambri Y.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Olivetti A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Schoolkate T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Walton A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Krajicek A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ram R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ebden M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Vliegen J.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Nys H.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Roger-Vasselin E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Matos R.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Melo M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Dodig I.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Mansouri S.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Ellis B.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fancutt T. J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Andreozzi G.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Arribage T.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Schnaitter J.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Wallner M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
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
];
module.exports = { playersInfo };
