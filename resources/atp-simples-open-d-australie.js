const playersInfo = [
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Jarry N.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Schoolkate T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cobolli F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Berrettini M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Michelsen A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McCabe J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Landaluce M.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Diallo G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Nardi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Diaz Acosta F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bergs Z.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Boyer T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Brooksby J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Garin C.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Comesana F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mpetshi Perricard G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
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
    playerName: "Arnaldi M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Fonseca J.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Seyboth Wild T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Marozsan F.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Popyrin A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hijikata R.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Krueger M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ugo Carabelli C.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Tien L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Samrej K.",
    playerFlagId: 186,
    playerCountryCode: "THA",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Basavareddy N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Faria J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Kotov P.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Onclin G.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Opelka R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
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
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Tu L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Jasika O.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Passaro F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Draper J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Navone M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Dzumhur D.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Klein L.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Dougaz A.",
    playerFlagId: 190,
    playerCountryCode: "TUN",
  },
  {
    playerName: "Shevchenko A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Mensik J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Shang J.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stricker D.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Nishikori K.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gigante M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Habib H.",
    playerFlagId: 111,
    playerCountryCode: "LBN",
  },
  {
    playerName: "Bu Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Walton A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Virtanen O.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Fils A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cazaux A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Fearnley J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Kyrgios N.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Darderi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Pouille L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
];
module.exports = { playersInfo };
