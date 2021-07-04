const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
  test("Translation with text and invalid locale field", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
  test("Translation with missing text field", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
  test("Translation with missing locale field", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
  test("Translation with empty text", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
  test("Translation with text that needs no translation", () => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruits.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        if (err) return console.log(err);
        // console.log()
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruits.'
        );
      });
  });
});
