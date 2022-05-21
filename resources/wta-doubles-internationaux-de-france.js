const playersInfo = [
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
  {
    playerName: "Jacquemot E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Lechemia E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Djoubri S.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Dodin O.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Anisimova A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Vesnina E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Wang Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Droguet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Janicijevic S.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mattek-Sands B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Jurak D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Klepac A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Collins D. R.",
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
    playerName: "Lister C. E.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Doi M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Hercog P.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Pattinama Kerkhove L.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Van der Hoek R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Khromacheva I.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kovinic D.",
    playerFlagId: 133,
    playerCountryCode: "MNE",
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
    playerName: "Badosa G. P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bolsova Zadoinov A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
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
    playerName: "Kato M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Voracova R.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Kichenok L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Rodionova Ar.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Blinkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Buzarnescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Tig P. M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Arruabarrena L.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Dolehide C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ninomiya M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Yang Z.",
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
    playerName: "Babos T.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Zvonareva V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "Christian K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Santamaria S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Diyas Z.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Stojanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
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
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Raina A.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Hradecka L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Van Uytvanck A.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Sanders S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Rosolska Ali.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Vandeweghe C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Mitu A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Yerolymos M.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Xu Y-F.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Panova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Pliskova Kr.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Kalashnikova O.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
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
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Williams V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Fernandez L. A.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Garcia-Perez G.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Lohoff J.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Heisen V.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Peschke K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Carter H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sharma A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hesse A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tan H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
];
module.exports = {
  playersInfo,
};
