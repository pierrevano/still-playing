const playersInfo = [
  {
    playerName: "Medvedev D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kozlov S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Shelton B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Wu Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Kyrgios N.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Wolf J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Thiem D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Garin C.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Krajinovic F.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kudla D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Molcan A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Draper J.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Ritschard A.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Galan Riveros D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Cressy M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Murray A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Millman J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nava E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Grenier H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Jarry N.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Berrettini M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Holt B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bedene A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "Cachin P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Wawrinka S.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zapata Miralles B.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bagnis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Zhang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Van Rijthoven T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Edmund K.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Ruud C.",
    playerFlagId: 145,
    playerCountryCode: "NOR",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Otte O.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Querrey S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Brouwer G.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Johnson S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kotov P.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Eubanks C.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Marterer M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Gombos N.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: "undefined",
    playerCountryCode: "undefined",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Evans D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Couacaud E.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Brooksby J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Paire B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Sousa J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Isner J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Delbonis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Gojowczyk P.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Huesler M.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Verdasco F.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Sock J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Popyrin Al.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Tseng C. H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Kubler J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ymer M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Tien L.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Hijikata R.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nadal R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
];
module.exports = { playersInfo };
