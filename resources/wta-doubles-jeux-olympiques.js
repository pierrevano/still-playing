const playersInfo = [
  {
    playerName: "Krejcikova B.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Siniakova K.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Hsieh Y.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Hsu C.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Olmos G.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Zarazua R.",
    playerFlagId: 128,
    playerCountryCode: "MEX",
  },
  {
    playerName: "Badosa P.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Sorribes Tormo S.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Xu Y-F.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Yang Z.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Krunic A.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Stojanovic N.",
    playerFlagId: 167,
    playerCountryCode: "SRB",
  },
  {
    playerName: "Hibino N.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Ninomiya M.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Barty A.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Hunter S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Bertens K.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Schuurs D.",
    playerFlagId: 139,
    playerCountryCode: "NED",
  },
  {
    playerName: "Garcia C.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Mladenovic K.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Kudermetova V.",
    playerFlagId: 8,
    playerCountryCode: "WORLD",
  },
  {
    playerName: "Vesnina E.",
    playerFlagId: 158,
    playerCountryCode: "RUS",
  },
  {
    playerName: "Friedsam A-L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Siegemund L.",
    playerFlagId: 81,
    playerCountryCode: "GER",
  },
  {
    playerName: "Kichenok L.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Kichenok N.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Mirza S.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Raina A.",
    playerFlagId: 93,
    playerCountryCode: "IND",
  },
  {
    playerName: "Errani S.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Paolini J.",
    playerFlagId: 98,
    playerCountryCode: "ITA",
  },
  {
    playerName: "Melichar-Martinez N.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Riske-Amritraj A.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Dabrowski G.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Fichman S.",
    playerFlagId: 47,
    playerCountryCode: "CAN",
  },
  {
    playerName: "Pigossi L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Stefani L.",
    playerFlagId: 39,
    playerCountryCode: "BRA",
  },
  {
    playerName: "Pliskova Ka.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Vondrousova M.",
    playerFlagId: 62,
    playerCountryCode: "CZE",
  },
  {
    playerName: "Duan Y.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Zheng S.",
    playerFlagId: 52,
    playerCountryCode: "CHN",
  },
  {
    playerName: "Cornet A.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Ferro F.",
    playerFlagId: 77,
    playerCountryCode: "FRA",
  },
  {
    playerName: "Svitolina E.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Yastremska D.",
    playerFlagId: 195,
    playerCountryCode: "UKR",
  },
  {
    playerName: "Linette M.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Rosolska Ali.",
    playerFlagId: 154,
    playerCountryCode: "POL",
  },
  {
    playerName: "Mattek-Sands B.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Pegula J.",
    playerFlagId: 200,
    playerCountryCode: "USA",
  },
  {
    playerName: "Chan H-C.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Chan L.",
    playerFlagId: 218,
    playerCountryCode: "TWN",
  },
  {
    playerName: "Niculescu M.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Olaru I.R.",
    playerFlagId: 157,
    playerCountryCode: "ROU",
  },
  {
    playerName: "Perez E.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Stosur S.",
    playerFlagId: 24,
    playerCountryCode: "AUS",
  },
  {
    playerName: "Ostapenko J.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Sevastova A.",
    playerFlagId: 110,
    playerCountryCode: "LVA",
  },
  {
    playerName: "Muguruza G.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Suarez Navarro C.",
    playerFlagId: 176,
    playerCountryCode: "ESP",
  },
  {
    playerName: "Mertens E.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Van Uytvanck A.",
    playerFlagId: 32,
    playerCountryCode: "BEL",
  },
  {
    playerName: "Bencic B.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Golubic V.",
    playerFlagId: 182,
    playerCountryCode: "SUI",
  },
  {
    playerName: "Aoyama S.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
  {
    playerName: "Shibahara E.",
    playerFlagId: 100,
    playerCountryCode: "JPN",
  },
];
module.exports = { playersInfo };
