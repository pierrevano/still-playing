const playersInfo = [
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Chardy J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Travaglia S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Opelka R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lu Y-H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Sousa P.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Polmans M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Millman J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Raonic M.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bedene A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Stakhovsky S.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Novak D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Cressy M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Thiem D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Kukushkin M.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Dellien H.",
    playerFlagId: 36,
    playerCountryCode: "BOL",
  },
  {
    playerName: "Ferreira Silva F.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Kyrgios N.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Uchiyama Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Bolt A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gombos N.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Coppejans K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Nishikori K.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sugita Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Tomic B.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Dzumhur D.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stebe C-M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Paire B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gerasimov E.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Mager G.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Londero J. I.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Ymer E.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Martin A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Tu L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Lopez F.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Querrey S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Albot R.",
    playerFlagId: 130,
    playerCountryCode: "MDA",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Popyrin Al.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Torpegaard M.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cecchinato M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Pella G.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Krajinovic F.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Haase R.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Andujar P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Balazs A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Pospisil V.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Simon G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Ymer M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Berankis R.",
    playerFlagId: 116,
    playerCountryCode: "LTU",
  },
  {
    playerName: "Nagal S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vilella M. M.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Anderson K.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Berrettini M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Herbert P.H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Laaksonen H.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Caruso S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cuevas P.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Seppi A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sandgren T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Evans D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Mmoh M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Troicki V.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Nadal R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
];
module.exports = {
  playersInfo,
};
