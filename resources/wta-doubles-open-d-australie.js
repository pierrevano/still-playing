const playersInfo = [
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
  {
    playerName: "Burel C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kawa K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Babos T.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Bondar A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Moratelli A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Murray S.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mladenovic K.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mattek-Sands B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
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
    playerName: "Bektas E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Day K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Gibson T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hon P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Routliffe E.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Sizikova Y.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Schoofs B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Zimmermann K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Guo H.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Jiang X.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Chang S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Hozumi E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
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
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Panova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Avanesyan E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Shymanovich I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Andreeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Mihalikova T.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Xu Y-F.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Boulter K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Schmiedlova A. K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shnaider D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Chan H-C.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
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
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kalinskaya A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "McPhee K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sharma A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Preston T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Rodionova Ar.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
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
    playerName: "Osorio C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Krawczyk D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shibahara E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Khromacheva I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kolodziejova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Masarova R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Eikeri U.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Harrison C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Danilina A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Hruncakova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Schuurs D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Stefani L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Gamarra Martins I.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
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
    playerName: "Marozava L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Piter K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Aoyama S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Wickmayer Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Hsieh S-W.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
];
module.exports = { playersInfo };
