const playersInfo = [
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
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Rodriguez C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Gille S.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Kubot L.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Saville L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Monroe N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Smith K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Molcan A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Cacic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Ramanathan R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Bolelli S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Murray J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Soares B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Reese H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Schnur M. J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Martin F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "O'Mara J.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Zapata Miralles B.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Behar A.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Escobar G.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
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
  {
    playerName: "Puetz T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Venus M.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Golubev A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
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
    playerName: "Barrientos N.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Reyes-Varela M.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Hidalgo D.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Reboul F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Matos R.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Vega Hernandez D.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Gorzny S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Michelsen A.",
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
    playerName: "Blumberg W.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Brkic T.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Gonzalez M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Klaasen R.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Melo M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "McLachlan B.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Skugor F.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Goransson A.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
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
    playerName: "Mektic N.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Pavic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Holt B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nanda G.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Hach H.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Haase R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Oswald P.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krawietz K.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Mies A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Mahut N.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Roger-Vasselin E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Kudla D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nedovyesov A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Qureshi A. U. H.",
    playerFlagId: 147,
    playerCountryCode: "PAK",
  },
  {
    playerName: "Peers J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Popyrin Al.",
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
    playerName: "Demoliner M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Sousa J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Lopez F.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Tsitsipas P.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Vavassori A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Bopanna R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Middelkoop M.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Gonzalez S.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Molteni A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Ebden M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Galloway R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lawson A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bedene A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
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
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Johnson S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Querrey S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
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
];
module.exports = { playersInfo };
