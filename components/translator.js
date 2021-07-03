const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(text) {
    // let string = text.match(/[a-z]+/gi);
    // console.log(string);
    // let letterArray = text.match(/[a-z]/gi);

    // console.log(letterArray);
    let string = text.split("");
    string[0] = string[0].toUpperCase();
    text = string.join("");
    // string = string.filter((item) => item !== "\n");
    string.forEach(function (item, i) {
      if (item == "\n") string[i] = " ";
    });
    console.log(string);
    let anyChanges = false;

    var stringArr = text.split(/( )|(\n)/g);
    // console.log(stringArr);

    // stringArr.map((word, index) => {
    //   if (americanOnly.hasOwnProperty(word)) {
    //     console.log("it has property");
    //     stringArr[index] =
    //       '<span class="highlight">' + americanOnly[word] + "</span>";
    //     anyChanges = true;
    //     console.log(stringArr[index]);
    //   }
    //   if (americanToBritishSpelling.hasOwnProperty(word)) {
    //     stringArr[index] =
    //       '<span class="highlight">' +
    //       americanToBritishSpelling[word] +
    //       "</span>";
    //     anyChanges = true;
    //   }
    // });

    console.log(text);
    for (const spelling in americanOnly) {
      // console.log(spelling);
      if (text.includes(spelling) === true) {
        // console.log(string);
        console.log(spelling);
        console.log("index", text.indexOf(spelling));
        // const spellingregex = new RegExp(spelling, "g");
        const spliced = string
          .splice(text.indexOf(spelling), spelling.length)
          .join("");
        console.log(spliced);
        var replaced = text.replace(spelling, americanOnly[spelling]);
        console.log(replaced);
        // console.log("founded", spelling);
      }
    }
    // console.log(stringArr);
    if (!anyChanges) {
      return "Everything looks good to me!";
    }
    return stringArr.join(" ");
  }
}

module.exports = Translator;
