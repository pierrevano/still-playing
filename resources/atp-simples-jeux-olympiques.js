const playersInfo = [
  {
    playerName: "Djokovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Dellien H.",
    playerFlagId: 36,
    playerCountryCode: "BOL",
  },
  {
    playerName: "Struff J-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Monteiro T.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Musetti L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Millman J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Sousa P.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Davidovich Fokina A.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Monfils G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ivashka I.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Kukushkin M.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Coria F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Gombos N.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Giron M.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Nishikori K.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Rublev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Zverev A.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Lu Y-H.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Galan D. E.",
    playerFlagId: 53,
    playerCountryCode: "COL",
  },
  {
    playerName: "Safwat M.",
    playerFlagId: 69,
    playerCountryCode: "EGY",
  },
  {
    playerName: "Basilashvili N.",
    playerFlagId: 80,
    playerCountryCode: "GEO",
  },
  {
    playerName: "Carballes Baena R.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Daniel T.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Sonego L.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Karatsev A.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Paul T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Chardy J.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Barrios Vera T.",
    playerFlagId: 51,
    playerCountryCode: "CHI",
  },
  {
    playerName: "Cerundolo F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Broady L.",
    playerFlagId: 197,
    playerCountryCode: "GBR",
  },
  {
    playerName: "Saville L.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hurkacz H.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Schwartzman D.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Varillas J. P.",
    playerFlagId: 152,
    playerCountryCode: "PER",
  },
  {
    playerName: "Machac T.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Sousa J.",
    playerFlagId: 155,
    playerCountryCode: "POR",
  },
  {
    playerName: "Klein L.",
    playerFlagId: 171,
    playerCountryCode: "SVK",
  },
  {
    playerName: "Duckworth J.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Nishioka Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Khachanov K.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Humbert U.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Andujar P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Majchrzak K.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Kecmanovic M.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Kwon S.",
    playerFlagId: 106,
    playerCountryCode: "KOR",
  },
  {
    playerName: "Tiafoe F.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Kohlschreiber P.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Tsitsipas S.",
    playerFlagId: 83,
    playerCountryCode: "GRE",
  },
  {
    playerName: "Carreno-Busta P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sandgren T.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Cilic M.",
    playerFlagId: 59,
    playerCountryCode: "CRO",
  },
  {
    playerName: "Menezes J.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Koepfer D.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Bagnis F.",
    playerFlagId: 22,
    playerCountryCode: "ARG",
  },
  {
    playerName: "Purcell M.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Auger-Aliassime F.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Fognini F.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Sugita Y.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Gerasimov E.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Simon G.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Nagal S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Istomin D.",
    playerFlagId: 202,
    playerCountryCode: "UZB",
  },
  {
    playerName: "Bublik A.",
    playerFlagId: 102,
    playerCountryCode: "KAZ",
  },
  {
    playerName: "Medvedev D.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
];
module.exports = { playersInfo };
