// @ts-nocheck

const { reversingString, stringToAscii, transformString } = require('./Challenges/stringTransform');

describe('reversingString function', () => {
  test('it should reverse a string correctly', () => {
    expect(reversingString('hello')).toBe('olleh');
    expect(reversingString('')).toBe('');
    expect(reversingString('a')).toBe('a');
    expect(reversingString('!@#$')).toBe('$#@!');
  });
});
describe('stringToAscii function', () => {
  test('it should convert a string to ASCII representation', () => {
    expect(stringToAscii('hello')).toBe('104 101 108 108 111');
    expect(stringToAscii('')).toBe('');
    expect(stringToAscii('a')).toBe('97');
    expect(stringToAscii('!@#$')).toBe('33 64 35 36');
  });
});

describe('transformString function', () => {
  test('it should reverse the string and convert to ASCII if length is divisible by 15', () => {
    expect(transformString('hello')).toBe('olleh');
    expect(transformString('world')).toBe('dlrow');
    expect(transformString('hello world')).toBe('olleh dlrow');
  });

  test('it should reverse the string if length is divisible by 3', () => {
    expect(transformString('abcdef')).toBe('fedcba');
    expect(transformString('123456')).toBe('654321');
  });

  test('it should convert the string to ASCII if length is divisible by 5', () => {
    expect(transformString('hello')).toBe('104 101 108 108 111');
    expect(transformString('world')).toBe('119 111 114 108 100');
  });

  test('it should return an empty string if the input string length is not divisible by 3, 5, or 15', () => {
    expect(transformString('a')).toBe('');
    expect(transformString('hello world')).toBe('');
  });
});
