const playersInfo = [
  {
    playerName: "Andujar P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Cuevas P.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Pella G.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cazaux A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Krajicek A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sandgren T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Kontinen H.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Roger-Vasselin E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Arevalo M.",
    playerFlagId: 70,
    playerCountryCode: "SLV",
  },
  {
    playerName: "Middelkoop M.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Delbonis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Sharan D.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Reid M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bopanna R.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Skugor F.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Begemann A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Monroe N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kubot L.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Melo M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
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
    playerName: "Caruso S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
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
    playerName: "Nys H.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Puetz T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Arneodo R.",
    playerFlagId: 131,
    playerCountryCode: "MCO",
  },
  {
    playerName: "Paire B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Lopez M.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Melzer J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Travaglia S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Daniell M.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Oswald P.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Koolhof W.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Rojer J-J.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Krajinovic F.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Bedene A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Withrow J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Golubev A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
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
    playerName: "Molteni A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nielsen F.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Dodig I.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Polasek F.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
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
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "O'Mara J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Erlich J.",
    playerFlagId: 97,
    playerCountryCode: "ISR",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Haase R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ebden M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Smith J-P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hoang A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Peers J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Venus M.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Chardy J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Martin F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bolelli S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Gonzalez M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Popyrin Al.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Brkic T.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Cacic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Walkow S.",
    playerFlagId: 154,
    playerCountryCode: "POL",
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
    playerName: "Bambridge L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Inglot D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Marach O.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Qureshi A. U. H.",
    playerFlagId: 147,
    playerCountryCode: "PAK",
  },
  {
    playerName: "Demoliner M.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Gonzalez S.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Knowle J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Pel D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Lu Y-H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
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
    playerName: "Krawietz K.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Tecau H.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Klaasen R.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "McLachlan B.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Bourgue M.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Pouille L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Saville L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Barrère G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Olivetti A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Berankis R.",
    playerFlagId: 116,
    playerCountryCode: "LTU",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Added D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tsonga J-W.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Skupski K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Skupski N.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
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
];
module.exports = {
  playersInfo,
};
