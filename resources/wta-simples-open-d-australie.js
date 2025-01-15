const playersInfo = [
  {
    playerName: "Sabalenka A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kartal S.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Bouzas Maneiro J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
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
    playerName: "Tauson C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Frech M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Kudermetova P.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Uchijima M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
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
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dart H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Fett J.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zidansek T.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Baptiste H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Todoni A. A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Zheng Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Jeanjean L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Paquet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Starodubtseva Y.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Muchova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Osaka N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Erjavec V.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Lamens S.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Badosa P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Sonmez Z.",
    playerFlagId: 191,
    playerCountryCode: "TUR",
  },
  {
    playerName: "Gibson T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Niemeier J.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Chwalinska M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Danilovic O.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Joint M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Jones E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Parrizas-Diaz N.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Jovic I.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kovinic D.",
    playerFlagId: 133,
    playerCountryCode: "MNE",
  },
  {
    playerName: "Sun L.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
  },
  {
    playerName: "Sherif M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Yastremska D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Keys M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Li A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Ruse G.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Aiava D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Snigur D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Riera J.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Andreeva E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Marino R.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Boulter K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Bejlek S.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zarazua R.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Wei S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Grabher J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Jabeur O.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Osorio C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Sakkari M.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Avanesyan E.",
    playerFlagId: 23,
    playerCountryCode: "ARM",
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
    playerName: "Bondar A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Lys E.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Birrell K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Cristian J.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Raducanu E.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Carle M. L.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Anisimova A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sramkova R.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Volynets K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
];
module.exports = { playersInfo };
