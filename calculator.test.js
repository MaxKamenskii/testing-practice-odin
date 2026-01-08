const calculator = require("./calculator");

test("add 2 + 2", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtract 2 from 5", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("divide 12 by 3", () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test("multiply 3 by 7", () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});
