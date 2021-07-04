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

    // console.log(text);
    for (const spelling in americanOnly) {
      // console.log(spelling);
      // if (text.includes(spelling) === true) {
      // console.log(string);
      // console.log(spelling);
      // console.log("index", text.indexOf(spelling));
      const spellingregex = new RegExp("\\b" + spelling + "\\b", "ig");
      // const spliced = string
      //   .splice(text.indexOf(spelling), spelling.length)
      //   .join("");
      // console.log(spliced);
      var replaced = text.replace(
        spellingregex,
        '<span class="highlight">' + americanOnly[spelling] + "</span>"
      );
      // console.log(replaced);
      if (replaced !== text) anyChanges = true;
      text = replaced;

      // console.log("founded", spelling);
      // }
    }
    for (const spelling in americanToBritishSpelling) {
      const spellingregex = new RegExp("\\b" + spelling + "\\b", "ig");
      var replaced = text.replace(
        spellingregex,
        '<span class="highlight">' +
          americanToBritishSpelling[spelling] +
          "</span>"
      );
      if (replaced !== text) anyChanges = true;
      text = replaced;
    }
    for (const titles in americanToBritishTitles) {
      const titlesRegex = new RegExp(titles, "ig");
      let splittedString = americanToBritishTitles[titles].split("");
      splittedString[0] = splittedString[0].toUpperCase();
      let translateTitle = splittedString.join("");
      var replaced = text.replace(
        titlesRegex,
        '<span class="highlight">' + translateTitle + "</span>"
      );
      if (replaced !== text) anyChanges = true;
      text = replaced;
    }
    var timeRegex = /\b([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\b/g;
    while (timeRegex.test(text)) {
      var time = text.match(timeRegex);
      console.log("time", time);
      time = time[0].replace(":", ".");
      text = text.replace(
        timeRegex,
        '<span class="highlight">' + time + "</span>"
      );
      anyChanges = true;
    }

    // console.log(stringArr);
    if (!anyChanges) {
      return "Everything looks good to me!";
    }
    // return stringArr.join(" ");
    return text;
  }
  translateBritish(text) {
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

    // console.log(text);
    for (const spelling in britishOnly) {
      // console.log(spelling);
      // if (text.includes(spelling) === true) {
      // console.log(string);
      // console.log(spelling);
      // console.log("index", text.indexOf(spelling));
      const spellingregex = new RegExp("\\b" + spelling + "\\b", "ig");
      // const spliced = string
      //   .splice(text.indexOf(spelling), spelling.length)
      //   .join("");
      // console.log(spliced);
      var replaced = text.replace(
        spellingregex,
        '<span class="highlight">' + britishOnly[spelling] + "</span>"
      );
      // console.log(replaced);
      if (replaced !== text) anyChanges = true;
      text = replaced;

      // console.log("founded", spelling);
      // }
    }
    for (const spelling in americanToBritishSpelling) {
      const spellingregex = new RegExp(
        "\\b" + americanToBritishSpelling[spelling] + "\\b",
        "ig"
      );
      var replaced = text.replace(
        spellingregex,
        '<span class="highlight">' + spelling + "</span>"
      );
      if (replaced !== text) anyChanges = true;
      text = replaced;
    }
    for (const titles in americanToBritishTitles) {
      const titlesRegex = new RegExp(americanToBritishTitles[titles], "ig");
      let splittedString = americanToBritishTitles[titles].split("");
      splittedString[0] = splittedString[0].toUpperCase();
      let translateTitle = splittedString.join("");
      var replaced = text.replace(
        titlesRegex,
        '<span class="highlight">' + translateTitle + "</span>"
      );
      if (replaced !== text) anyChanges = true;
      text = replaced;
    }
    // Date
    var timeRegex = /\b([0-9]|0[0-9]|1[0-9]|2[0-3]).[^:][0-5][0-9]\b/g;
    while (timeRegex.test(text)) {
      var time = text.match(timeRegex);
      console.log("time", time);
      time = time[0].replace(".", ":");
      text = text.replace(
        timeRegex,
        '<span class="highlight">' + time + "</span>"
      );
      anyChanges = true;
    }

    // timeArray.map((time) => {});
    // console.log(stringArr);
    if (!anyChanges) {
      return "Everything looks good to me!";
    }
    // return stringArr.join(" ");
    return text;
  }
}

module.exports = Translator;
