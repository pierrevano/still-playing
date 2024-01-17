const playersInfo = [
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kerber A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kessler M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Preston T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Day K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Cristian J.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Birrell K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Tauson C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Giorgi C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sun L.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Wickmayer Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Yastremska D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Osorio C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Shnaider D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Kalinskaya A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Volynets K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Zheng Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Boulter K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Raducanu E.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Rogers S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Dodin O.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Zarazua R.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Burel C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Marino R.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sakkari M.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Bai Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Avanesyan E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Liu C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sherif M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Wozniacki C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Timofeeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Korneeva A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Osaka N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Frech M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Zakharova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Juvan K.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Bejlek S.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Snigur D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Jeanjean L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Schmiedlova A. K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Jabeur O.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Starodubtseva Y.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Andreeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Bektas E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Korpatsch T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Hontama M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Anisimova A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Zidansek T.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Badosa P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Tsurenko L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Masarova R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Fruhvirtova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Seidel E.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Sabalenka A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
];
module.exports = { playersInfo };
