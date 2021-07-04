const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
suite("Unit Tests", () => {
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I ate yogurt for breakfast. to British English  ", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate We had a party at my friend's condo. to British English  ", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Can you toss this in the trashcan for me? to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate The parking lot was full. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate To play hooky means to skip class or work. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate No Mr. Bond, I expect you to die. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Dr. Grosh will see you now. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Lunch is at 12:15 today. to British English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate We watched the footie match for a while. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Paracetamol takes up to an hour to work. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate First, caramelise the onions. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I spent the bank holiday at the funfair. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I had a bicky then went to the chippy. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Have you met Mrs Kalyani? to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Prof Joyner of King's College, London. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Highlight translation in Mangoes are my favorite fruit.", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Highlight translation in I ate yogurt for breakfast.", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Highlight translation in We watched the footie match for a while.", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
  test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
    var translated = translator.translate("Mangoes are my favorite fruit.");
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });
});
