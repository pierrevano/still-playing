const playersInfo = [
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stollar F.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Sun L.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Aoyama S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Hozumi E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Cristian J.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Rosatello C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sizikova Y.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Gibson T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Joint M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Mladenovic K.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Kessler M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Gamarra Martins I.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stefani L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Dart H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Danilovic O.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Chan H-C.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Kichenok L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hon P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Moratelli A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Piter K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Andreeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Shnaider D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Stojanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Birrell K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Eikeri U.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Ninomiya M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Mattek-Sands B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Shibahara E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Plipuech P.",
    playerFlagId: 186,
    playerCountryCode: "THA",
  },
  {
    playerName: "Tsao C. Y.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Sramkova R.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Jiang X.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Danilina A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Khromacheva I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fourlis J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hule P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Aiava D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Inglis M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Grabher J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Moore T.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Cabrera L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Preston T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Guo H.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Panova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Babos T.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Melichar-Martinez N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Baptiste H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kawa K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Zimmermann K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Xu Y-F.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Yang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tang Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Mihalikova T.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Nicholls O.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Hsieh S-W.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Schuurs D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Bouzas Maneiro J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Cavalle-Reimers Y.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Wu F.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Tauson C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Bondar A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Uchijima M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Kato M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Zarazua R.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Gleason Q.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lamens S.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Olmos G.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kalashnikova O.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Lumsden M.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Siskova A.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krawczyk D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Routliffe E.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
];
module.exports = { playersInfo };
