const playersInfo = [
  {
    playerName: "Caruso S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Kukushkin M.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Otte O.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Tseng C. H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
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
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Escobedo E.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Delbonis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Martinez P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bagnis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Garin C.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Norrie C.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Korda S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Moutet C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Pouille L.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Griekspoor T.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Etcheverry T. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Alcaraz C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Tabilo A.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Fucsovics M.",
    playerFlagId: 91,
    playerCountryCode: "HUN",
  },
  {
    playerName: "Lajovic D.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Kozlov S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Vesely J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Nakashima B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Berrettini M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Altmaier D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Lopez F.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Millman J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Albot R.",
    playerFlagId: 130,
    playerCountryCode: "MDA",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Vukic A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Harris L.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Opelka R.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Anderson K.",
    playerFlagId: 175,
    playerCountryCode: "RSA",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Taberner C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Rune H.",
    playerFlagId: 63,
    playerCountryCode: "DNK",
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
    playerName: "Shapovalov D.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Gerasimov E.",
    playerFlagId: 31,
    playerCountryCode: "BLR",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Mannarino A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Milojevic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "McDonald M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Munar J.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
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
    playerName: "Bonzi B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gojowczyk P.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Hanfmann Y.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Kokkinakis T.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nadal R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Safiullin R.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Molcan A.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Dzumhur D.",
    playerFlagId: 37,
    playerCountryCode: "BIH",
  },
  {
    playerName: "Andujar P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Seppi A.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "De Minaur A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Murray A.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Barrios T.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Johnson S.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Thompson J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sousa J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Sinner J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Bautista R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Travaglia S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Kohlschreiber P.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Cecchinato M.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Trungelliti M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Marterer M.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Fritz T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dimitrov G.",
    playerFlagId: 41,
    playerCountryCode: "BUL",
  },
  {
    playerName: "Lehecka J.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Paire B.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Baez S.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Ramos A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Ymer M.",
    playerFlagId: 181,
    playerCountryCode: "SWE",
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
    playerName: "Mager G.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Berankis R.",
    playerFlagId: 116,
    playerCountryCode: "LTU",
  },
  {
    playerName: "Skatov T.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Gombos N.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Gomez E.",
    playerFlagId: 68,
    playerCountryCode: "ECU",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Evans D.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
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
    playerName: "Rinderknech A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Bolt A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ruusuvuori E.",
    playerFlagId: 76,
    playerCountryCode: "FIN",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Krajinovic F.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "O'Connell C.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Gaston H.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Cerundolo J. M.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Cressy M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Isner J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Gasquet R.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Van De Zandschulp B.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Broady L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Kyrgios N.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Laaksonen H.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
];
module.exports = { playersInfo };
