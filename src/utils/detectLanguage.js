const detectLanguage = (req) => {
  // Check if the 'lang' query parameter is present and valid
  if (req && req.query && req.query.lang) {
    const lang = req.query.lang.toLowerCase();
    return lang.startsWith("fr") ? "fr" : "en";
  }

  // Fallback to checking the 'accept-language' header in the request
  if (req && req.headers && req.headers["accept-language"]) {
    const acceptLanguage = req.headers["accept-language"];
    const lang = acceptLanguage.split(",")[0];
    return lang.startsWith("fr") ? "fr" : "en";
  }

  // Default to English if no valid language is detected
  return "en";
};

module.exports = { detectLanguage };
