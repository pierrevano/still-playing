const playersInfo = [
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Dart H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Teichmann J.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Strycova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Zanevska M.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Collins D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Grabher J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Swan K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Burrage J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Martincova T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Hruncakova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Williams V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Wang Xin.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
  {
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Osorio C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Masarova R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sherif M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Zheng Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Tsurenko L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Liu C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kanepi K.",
    playerFlagId: 73,
    playerCountryCode: "EST",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Stearns P.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Waltert S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Kontaveit A.",
    playerFlagId: 73,
    playerCountryCode: "EST",
  },
  {
    playerName: "Stefanini L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Baindl K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Fernandez L.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Volynets K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Jabeur O.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Frech M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Bonaventure Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Bai Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Bondar A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Andreescu B.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Bouzas Maneiro J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Stevanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Zhao C.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Korpatsch T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Parrizas-Diaz N.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kvitova P.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
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
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tomova V.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Boulter K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Saville D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rogers S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Sakkari M.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Riske-Amritraj A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Badosa P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Schmiedlova A. K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Kartal S.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Keys M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Naef C.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Juvan K.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Betova M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Andreeva M.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Muchova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Niemeier J.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Noskova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Galfi D.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Navarro E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Marino R.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Wickmayer Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
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
    playerName: "Giorgi C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Udvardy P.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Sabalenka A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
];
module.exports = { playersInfo };
