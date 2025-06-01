const playersInfo = [
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Atmane T.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Llamas Ruiz P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Marterer M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Walton A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ugo Carabelli C.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Jarry N.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Fils A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Rocha H.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Muller A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mensik J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Fonseca J.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Herbert P.H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Dellien H.",
    playerFlagId: 36,
    playerCountryCode: "BOL",
  },
  {
    playerName: "Bellucci M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Draper J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Tien L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "De Jong J.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Passaro F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Cobolli F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Arnaldi M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Diallo G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Shevchenko A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Quinn E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Kovacevic A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Gomez F. A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Fearnley J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Misolic F.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Bu Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tabur C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Royer V.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Galan D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Opelka R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Hijikata R.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Navone M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nava E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Comesana F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Brooksby J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Faria J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Darderi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Michelsen A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cerundolo J. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Medjedovic H.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Kopriva V.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Jacquet K.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Cazaux A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Popyrin A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ofner S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Schoolkate T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Moller E.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Blanchet U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Hassan B.",
    playerFlagId: 111,
    playerCountryCode: "LBN",
  },
  {
    playerName: "Gigante M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Mpetshi Perricard G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bergs Z.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Tirante T. A.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Dzumhur D.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Marozsan F.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Nardi L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Zeppieri G.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
];
module.exports = { playersInfo };
