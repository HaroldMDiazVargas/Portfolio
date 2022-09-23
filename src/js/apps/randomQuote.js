// Random quote generator

export class GenerateQuote {
  constructor(url) {
    this.url = url;

    this.getQuotes = function () {
      return fetch(this.url).then(function (response) {
        return response.json();
      });
    };
  }
}

export function displayQuote(quotes, textSelector, authorSelector) {
  quotes.getQuotes().then(function (data) {
    let randomNumber = Math.floor(Math.random() * data.length);
    let randomQuote = data[randomNumber];
    document.querySelector(textSelector).innerHTML = `"${randomQuote.text}"`;
    document.querySelector(authorSelector).innerHTML = `- ${
      randomQuote.author ? randomQuote.author : ""
    }`;
  });
}
// export const generateQuote = () => {
//   let url = "https://type.fit/api/quotes";
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       let randNum = Math.floor(Math.random() * 1500 + 1);
//       let randomQuote = data[randNum];
//       document.getElementsByClassName(
//         "quote-gen__text"
//       )[0].innerHTML = `"${randomQuote.text}"`;
//       document.getElementsByClassName("quote-gen__author")[0].innerHTML = `- ${
//         randomQuote.author ? randomQuote.author : ""
//       }`;
//     });
// };
