const isLowerCase = (str) => str === str.toLowerCase();
const isUpperCase = (str) => str === str.toUpperCase();

function convertOneCharacter(char, value) {
  // Turn char into code + value
  // check if lower case
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
}

function caesarCipher(string, value) {
  string = string.split("");
  string = string.map((element) => convertOneCharacter(element, value));
  return string.join("");
}

console.log(caesarCipher("AaA", 3));

module.exports = caesarCipher;
