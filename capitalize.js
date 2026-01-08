function capitalize(string) {
  // Convert to an array? Split by each letter and add to an array?
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}
module.exports = capitalize;
