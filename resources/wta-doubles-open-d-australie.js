const playersInfo = [
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
    playerName: "Aiava D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sharma A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Jurak D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Stojanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bolsova Zadoinov A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kontaveit A.",
    playerFlagId: 73,
    playerCountryCode: "EST",
  },
  {
    playerName: "Garcia-Perez G.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kalashnikova O.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Flipkens K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Klepac A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
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
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Sevastova A.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Kalinskaya A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kuzmova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Diyas Z.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Barthel M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Duan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Gavrilova D.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Jabeur O.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "McHale C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Zidansek T.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Riske A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Van der Hoek R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Stosur S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Fernandez L. A.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Woolcock B.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Buzarnescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Raina A.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Sizikova Y.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Hradecka L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Pliskova Kr.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Fichman S.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Olmos G.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
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
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Mattek-Sands B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Arruabarrena L.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Christian K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Rogers S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McNally C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Halep S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Kempenaers-Pocz C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Rodionova Ar.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sanders S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Guarachi A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Krawczyk D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Ninomiya M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Mitu A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Olaru I.R.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Tig P. M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Lapko V.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Teichmann J. B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Melichar-Martinez N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Schuurs D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
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
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cabrera L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Inglis M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Voracova R.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Badosa G. P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kovinic D.",
    playerFlagId: 133,
    playerCountryCode: "MNE",
  },
  {
    playerName: "Doi M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Shvedova Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Carter H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stefani L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Zvonareva V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Birrell K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fourlis J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bondarenko K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
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
    playerName: "Barty A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Brady J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Myers A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Popovic I.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Lister C. E.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Van Uytvanck A.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Sabalenka A.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
];
module.exports = {
  playersInfo,
};
