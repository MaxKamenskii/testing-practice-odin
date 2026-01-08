function analyzeArray(array) {
  let object = {};
  let total = 0;
  array.forEach((el) => {
    total = total + el;
  });
  object.average = total / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;
  return object;
}

module.exports = analyzeArray;
