const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(translated, "Mangoes are my favourite fruit.");
  });
});
