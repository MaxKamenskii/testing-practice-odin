const analyzeArray = require("./analyzeArray");

test("average", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
});

test("min", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});

test("max", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
});

test("length", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.length).toBe(6);
});
