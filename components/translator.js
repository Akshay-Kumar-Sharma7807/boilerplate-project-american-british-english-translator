const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(text) {
    let string = text.match(/[a-z]+/gi);
    console.log(string);
    let letterArray = text.match(/[a-z]/gi);
    console.log(letterArray);
    // let string = text.split("");
    // string[0] = string[0].toUpperCase();
    // text = string.join("");
    // console.log(string);

    // let anyChanges = false;

    // var stringArr = text.split(/( )|(\n)/g);
    // console.log(stringArr);

    // stringArr.map((word, index) => {
    //   if (americanOnly.hasOwnProperty(word)) {
    //     console.log("it has property");
    //     stringArr[index] =
    //       '<span class="highlight">' + americanOnly[word] + "</span>";
    //     anyChanges = true;
    //     console.log(stringArr[index]);
    //   }
    // });

    // console.log(stringArr);
    // if (!anyChanges) {
    //   return "Everything looks good to me!";
    // }
    // return stringArr.join(" ");
  }
}

module.exports = Translator;
