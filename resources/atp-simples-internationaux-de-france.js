const playersInfo = [
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Molcan A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bedene A.",
    playerFlagId: 172,
    playerCountryCode: "SLO",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Cuevas P.",
    playerFlagId: 201,
    playerCountryCode: "URU",
  },
  {
    playerName: "Brooksby J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Coric B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Taberner C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kuznetsov An.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Varillas J. P.",
    playerFlagId: 152,
    playerCountryCode: "PER",
  },
  {
    playerName: "Ugo Carabelli C.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Gojo B.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Krajinovic F.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Opelka R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Kotov P.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Popyrin Al.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
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
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nadal R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Ofner S.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Isner J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Halys Q.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Barrère G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mmoh M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Zapata Miralles B.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Rodriguez Taverna S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Guinard M.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kubler J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Kudla D.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dellien H.",
    playerFlagId: 36,
    playerCountryCode: "BOL",
  },
  {
    playerName: "Thiem D.",
    playerFlagId: 25,
    playerCountryCode: "AUT",
  },
  {
    playerName: "Borges N.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Millman J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Londero J. I.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
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
    playerName: "Tsonga J-W.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Sousa J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Tseng C. H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Gojowczyk P.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Goffin D.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Cecchinato M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Andujar P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Zeppieri G.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Laaksonen H.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Gombos N.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Cachin P.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
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
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Ymer M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Pouille L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kolar Z.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Delbonis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Paire B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Garin C.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Cressy M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Agamenone F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Otte O.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fratangelo B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Simon G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Johnson S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Blancaneaux G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Balazs A.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Berankis R.",
    playerFlagId: 116,
    playerCountryCode: "LTU",
  },
  {
    playerName: "Djere L.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Bagnis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
];
module.exports = { playersInfo };
