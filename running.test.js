// @ts-nocheck
const {checkSubarray} = require("./Challenges/arrayMap")
const {
  reversingString,stringToAscII,transformString,} = require("./Challenges/stringTransform");

// test for challenge about string manipulation

describe('reversingString function', () => {
  test('it should reverse a string correctly', () => {
    expect(reversingString('hello')).toBe('olleh');
    expect(reversingString('')).toBe('');
    expect(reversingString('a')).toBe('a');
    expect(reversingString('!@#$')).toBe('$#@!');
  });
});
describe('stringToAscII function', () => {
  test('it should convert a string to ASCII representation', () => {
    expect(stringToAscII('hello')).toBe('104 101 108 108 111');
    expect(stringToAscII('')).toBe('');
    expect(stringToAscII('a')).toBe('97');
    expect(stringToAscII('!@#$')).toBe('33 64 35 36');
  });
});

describe("transformString function", () => {
test("it should reverse the string and convert to ASCII if length is divisible by 15", () => {
  expect(transformString("transformString")).toBe("114 105 110 115 102 111 114 109 83 103 110 105 114 116 115");


  });

  test("it should reverse the string if length is divisible by 3", () => {
    expect(transformString("abcdef")).toBe("fedcba");
    expect(transformString("123456")).toBe("654321");
  });

  test("it should convert the string to ASCII if length is divisible by 5", () => {
    expect(transformString("hello")).toBe("104 101 108 108 111");
    expect(transformString("world")).toBe("119 111 114 108 100");
  });

  test("it should return an empty string if the input string length is not divisible by 3, 5, or 15", () => {
    expect(transformString("a")).toBe("");
    expect(transformString("hello world")).toBe("");
  });
});

//tests for arraymap challenge


describe("checkSubarray function", () => {
  test("returns true if there exists a subarray with the given target sum", () => {
    const arr = [4, 2, 7, 1, 9, 5];
    const targetSum = 17;
    expect(checkSubarray(arr, targetSum)).toBe(true);
  });

  test("returns false if there does not exist a subarray with the given target sum", () => {
    const arr = [1, 2, 3, 4, 5];
    const targetSum = 11;
    expect(checkSubarray(arr, targetSum)).toBe(false);
  });

  test("returns false if the array is empty", () => {
    const arr = [];
    const targetSum = 5;
    expect(checkSubarray(arr, targetSum)).toBe(false);
  });

  test("returns false if the target sum is 0", () => {
    const arr = [1, 2, 3];
    const targetSum = 0;
    expect(checkSubarray(arr, targetSum)).toBe(false);
  });
});