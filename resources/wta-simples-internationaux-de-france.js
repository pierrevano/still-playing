const playersInfo = [
  {
    playerName: "Barty A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Pera B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Paquet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bara Irina M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Sharma A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Putintseva Y.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Jabeur O.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Gauff C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Wang Q.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Hsieh S-W.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Liang E. S.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Sevastova A.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Brady J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vekic D.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Suarez Navarro C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Stephens S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lepchenko V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zhang S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Petkovic A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Muchova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Alexandrova E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Williams V.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Pliskova Kr.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Li A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gasparyan M.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Babel O.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Kenin S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Baptiste H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Blinkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Martincova T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Jorovic I.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Zhu L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
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
    playerName: "Zavatska K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Voegele S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Watson H.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Diyas Z.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Sanders S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Muguruza G.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kostyuk M.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Arruabarrena L.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Gracheva V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Giorgi C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Martic P.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Kontaveit A.",
    playerFlagId: 73,
    playerCountryCode: "EST",
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
    playerName: "Mladenovic K.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Peterson R.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Rogers S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Juvan K.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Swiatek I.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Williams S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Begu I.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Rus A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Buzarnescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Collins D. R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wang Xiy.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Kalinina A.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Kerber A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Rybakina E.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Jacquemot E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Stojanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Vesnina E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Govortsova O.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Minnen G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Kvitova P.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Azarenka V.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Kuznetsova S.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Tauson C.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Gorgodze E.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Fernandez L. A.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Potapova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Dodin O.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Keys M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pavlyuchenkova A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "McHale C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kozlova Kat.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Tomljanovic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Parry D.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Sasnovich A.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Konjuh A.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Sabalenka A.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Andreescu B.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Zidansek T.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Brengle M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Osorio Serrano M. C.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Bouzkova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Anisimova A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Konta J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Cirstea S.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Van Uytvanck A.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Trevisan M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kasatkina D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Doi M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Bertens K.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Hercog P.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tan H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Badosa G. P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Davis L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Burel C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kovinic D.",
    playerFlagId: 133,
    playerCountryCode: "MNE",
  },
  {
    playerName: "Cocciaretto E.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Bogdan A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Tig P. M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Osaka N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
];
module.exports = {
  playersInfo,
};
