const playersInfo = [
  {
    playerName: "Bonaventure Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Zanevska M.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Wu F.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Baindl K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Sherif M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hozumi E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Masarova R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Neel I.",
    playerFlagId: 73,
    playerCountryCode: "EST",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Marozava L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Gamarra Martins I.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Barnett A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Nicholls O.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Riske-Amritraj A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Cristian J.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Eikeri U.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Panova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Kalashnikova O.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Shymanovich I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Aoyama S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Shibahara E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Rosolska Ali.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Guarachi A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Routliffe E.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Grabher J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Kolodziejova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Schmiedlova A. K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Ruse G.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Danilina A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Xu Y-F.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Bains N.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Lumsden M.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Piter K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Hruncakova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Mihalikova T.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Dart H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Kichenok L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Stefani L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Van der Hoek R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Babos T.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Flipkens K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Olmos G.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Kato M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Sutjiadi A.",
    playerFlagId: 228,
    playerCountryCode: "IDN",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Appleton E.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Sizikova Y.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Zimmermann K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Hsieh S-W.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Strycova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Yang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Melichar-Martinez N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Krawczyk D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Schuurs D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Dzalamidze N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bondar A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Jones M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Chang S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kulikov A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Chan H-C.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Chan L.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Ninomiya M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Zvonareva V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Martincova T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Detiuc A.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Gamiz A.",
    playerFlagId: 205,
    playerCountryCode: "VEN",
  },
  {
    playerName: "Christie F.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Collins A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
];
module.exports = { playersInfo };
