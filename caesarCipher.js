function convertOneCharacter(char, value) {
  char = char.charCodeAt() + value;
  return String.fromCharCode(char);
}

function caesarCipher(string, value) {
  string = string.split("");
  string = string.map((element) => convertOneCharacter(element, value));
  return string.join("");
}

console.log(caesarCipher("aaa", 3));

module.exports = caesarCipher;
