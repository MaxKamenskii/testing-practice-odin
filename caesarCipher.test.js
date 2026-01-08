const caesarCipher = require("./caesarCipher");

test("Cipher one letter by 3", () => {
  expect(caesarCipher("a", 3)).toBe("d");
});

test("Cipher aaa by 3", () => {
  expect(caesarCipher("aaa", 3)).toBe("ddd");
});

test("Cipher xyz to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Cipher with the same case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KnOOr");
});

test("Cipher preserving punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
