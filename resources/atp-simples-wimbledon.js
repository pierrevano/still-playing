const playersInfo = [
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Chardy J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kubler J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Cecchinato M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Jarry N.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Brouwer G.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Huesler M.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Watanuki Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Berrettini M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Coppejans K.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wu Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Stricker D.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Popyrin A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Shimabukuro S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Fils A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Arnaldi M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Loffhagen G.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fery A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shevchenko A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dellien H.",
    playerFlagId: 36,
    playerCountryCode: "BOL",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Ofner S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Raonic M.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Novak D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Mochizuki S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Eubanks C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Medjedovic H.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Peniston R.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Murray A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Thiem D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cerundolo J. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Evans D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Galan D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Otte O.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ymer M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Molcan A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Pella G.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mayot H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Albot R.",
    playerFlagId: 130,
    playerCountryCode: "MDA",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Barrère G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Broady L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Lestienne C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Lokoli L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "van Assche L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Barrios Vera T.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Marozsan F.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Wolf J.J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Couacaud E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Marterer M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Gojo B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Mmoh M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Varillas J. P.",
    playerFlagId: 152,
    playerCountryCode: "PER",
  },
  {
    playerName: "Isner J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Choinski J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Zapata Miralles B.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cachin P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
];
module.exports = { playersInfo };
