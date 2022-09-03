const playersInfo = [
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Maria T.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Galfi D.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Kalinskaya A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kalashnikova O.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Christian K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Marozava L.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Rosolska Ali.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Routliffe E.",
    playerFlagId: 140,
    playerCountryCode: "NZL",
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
    playerName: "Hradecka L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Mirza S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
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
    playerName: "Juvan K.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Zidansek T.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Andrianjafitrimo T.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Dodin O.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Van Uytvanck A.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Collins D. R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Samsonova L.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Bronzetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Lohoff J.",
    playerFlagId: 81,
    playerCountryCode: "GER",
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
    playerName: "Martincova T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Petkovic A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Murray S.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rodionova Ar.",
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
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shibahara E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Jacquemot E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Janicijevic S.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Burel C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Paquet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kucova K.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Bara I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Gorgodze E.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Keys M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Townsend T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dzalamidze N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Rakhimova K.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sanders S.",
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
    playerName: "Parrizas-Diaz N.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Piter K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Kawa K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Mihalikova T.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Zanevska M.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Zimmermann K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Chan L.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Stosur S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Panova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "Danilina A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Haddad Maia B.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
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
    playerName: "Lechemia E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tan H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Han X.Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Kuzmova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bektas E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Moore T.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Olmos G.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Guarachi A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Klepac A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
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
    playerName: "Doi M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Heisen V.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Udvardy P.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
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
    playerName: "Alexandrova E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Osorio C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Aoyama S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Chan H-C.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
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
    playerName: "Cascino E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ponchet J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Olaru I.R.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Teichmann J. B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kempenaers-Pocz C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fernandez L. A.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Flipkens K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Rogers S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
];
module.exports = { playersInfo };
