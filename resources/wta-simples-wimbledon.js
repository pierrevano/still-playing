const playersInfo = [
  {
    playerName: "Volynets K.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Grammatikopoulou V.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Hon P.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Mikulskyte J.",
    playerFlagId: 116,
    playerCountryCode: "LTU",
  },
  {
    playerName: "Vickery S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Hives Z.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Lee G.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Vandeweghe C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McDonald E.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Cavalle-Reimers Y.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Vismane D.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Chwalinska M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Bolsova Zadoinov A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Dinu C.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Ignatik A.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Bjorklund M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sanders S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Brogan A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Liang E. S.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Arango E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Carle M. L.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Baindl K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Bucsa C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Maleckova J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Lao D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Alves C.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Pieri J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Gatto-Monticone G.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kolodziejova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Schunk N. M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Inglis M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "De Vroome I.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Minella M.",
    playerFlagId: 117,
    playerCountryCode: "LUX",
  },
  {
    playerName: "Han N.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Mendez S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stevanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Lys E.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Papamichail D.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Kawa K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Bandecchi S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Serban R.",
    playerFlagId: 61,
    playerCountryCode: "CYP",
  },
  {
    playerName: "Chang S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Min G.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Stefanini L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Ce G.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Jeanjean L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Snigur D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Lamens S.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Gerlach K.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Babos T.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Neilson G. T.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Loeb J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lukas T.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Contreras Gomez F.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Jani R-L.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Kulikova A.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Siskova A.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Chirico L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lumsden M.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Deichmann K.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Abduraimova N.",
    playerFlagId: 202,
    playerCountryCode: "UZB",
  },
  {
    playerName: "Oz I.",
    playerFlagId: 191,
    playerCountryCode: "TUR",
  },
  {
    playerName: "Hontama M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Wagner S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Jacquemot E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Cabrera L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sun L.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Di Sarra F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Grey S. B.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Gadecki O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sharma A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Zuger J.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Voegele S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Burillo Escorihuela I.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Mcphee K.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Perrin C.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Haas B.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Jimenez Kasintseva V.",
    playerFlagId: 19,
    playerCountryCode: "AND",
  },
  {
    playerName: "Anderson R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stoiber R. A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Zavatska K.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Parks A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bolkvadze M.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Fett J.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Ormaechea P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Andrianjafitrimo T.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Fruhvirtova L.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Smitkova T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Ponchet J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Fourlis J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Herdzelas D.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Podoroska N.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Muhammad A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Grabher J.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Wickmayer Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Waltert S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Shinikova I.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Sramkova R.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Eikeri U.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Cepede V.",
    playerFlagId: 151,
    playerCountryCode: "PRY",
  },
  {
    playerName: "Jang S. J.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Pattinama Kerkhove L.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Boskovic L.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Lazaro Garcia A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Naito Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "McHale C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Paar L.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Kalieva E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kuzmova V.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Yuan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zacarias M.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Lottner A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ferrando C.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Harrison C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Silva E.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Di Lorenzo F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bonaventure Y.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Uchijima M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Xu M.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Chang H.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bektas E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bejlek S.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Monnet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hartono A.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
];
module.exports = { playersInfo };
