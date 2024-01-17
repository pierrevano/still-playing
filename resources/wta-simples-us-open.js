const playersInfo = [
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Ngounoue C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kovinic D.",
    playerFlagId: 133,
    playerCountryCode: "MNE",
  },
  {
    playerName: "Juvan K.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Avanesyan E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Hruncakova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kvitova P.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Prozorova T.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Wozniacki C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Birrell K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Brady J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Bjorklund M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Andreeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Udvardy P.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kalinskaya A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Day K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Sherif M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Miyazaki L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Betova M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Muchova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Frech M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Volynets K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Schmiedlova A. K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Baindl K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Masarova R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sakkari M.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Boulter K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Tauson C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Jacquemot E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tsurenko L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Han N.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Liu C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Korpatsch T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Wickmayer Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Zvonareva V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Keys M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Crawley F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tig P. M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Marino R.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Giorgi C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Krueger A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Zheng Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Strycova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Kanepi K.",
    playerFlagId: 73,
    playerCountryCode: "EST",
  },
  {
    playerName: "Montgomery R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lys E.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Williams V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Vickery S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Ruse G.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Burel C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Zanevska M.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Sabalenka A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
];
module.exports = { playersInfo };
