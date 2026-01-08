const isLowerCase = (str) => str === str.toLowerCase();
const isUpperCase = (str) => str === str.toUpperCase();
function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char);
}
function convertOneCharacter(char, value) {
  // Turn char into code + value
  // check if lower case
  // check if isAlpha
  if (isAlpha(char)) {
    if (isLowerCase(char)) {
      if (char.charCodeAt() + value > 122) {
        return String.fromCharCode(char.charCodeAt() + value - 122 + 96);
      }
    }
    if (isUpperCase(char)) {
      if (char.charCodeAt() + value > 90 && char.charCodeAt() + value < 97) {
        return String.fromCharCode(char.charCodeat() + value - 90 + 64);
      }
    }
    char = char.charCodeAt() + value;
    // return char
    return String.fromCharCode(char);
  } else {
    return char;
  }
}

function caesarCipher(string, value) {
  string = string.split("");
  string = string.map((element) => convertOneCharacter(element, value));
  return string.join("");
}

module.exports = caesarCipher;
