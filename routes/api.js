"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    console.log(req.body);
    const { text, locale } = req.body;
    if (locale === undefined || text === undefined) {
      res.json({ error: "Required field(s) missing" });
    }
    if (text === "") {
      res.json({ error: "No text to translate" });
    }
    if (locale === "american-to-british") {
      const result = translator.translate(text);
      res.json({ text, translation: result });
    } else if (locale === "british-to-american") {
    } else {
      res.json({ error: "Invalid value for locale field" });
    }
  });
};
