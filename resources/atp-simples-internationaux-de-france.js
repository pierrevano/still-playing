const playersInfo = [
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Herbert P.H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Lestienne C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Seyboth Wild T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Galan D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Cachin P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Popyrin A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cazaux A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Walton A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Meligeni Alves F.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Nadal R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Mpetshi Perricard G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hijikata R.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Darderi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Nagal S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cobolli F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Evans D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Michelsen A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Navone M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Tirante T. A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nardi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Arnaldi M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Fils A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Nishikori K.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Mayot H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Draper J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Moreno De Alboran N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "van Assche L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Marterer M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Marozsan F.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Kovacevic A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Jarry N.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shevchenko A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Atmane T.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ofner S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Kotov P.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Murray A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Eubanks C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
];
module.exports = { playersInfo };
