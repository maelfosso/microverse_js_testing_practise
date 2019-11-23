import reverseString from './reverseString.js';

test('reverse an empty string', () => {
  expect(reverseString('')).toBe('');
})

test('reverse a letter', () => {
  expect(reverseString('a')).toBe('a');
});

test('reverse a word', () => {
  expect(reverseString('love')).toBe('evol');
  expect(reverseString('KindnesS')).toBe('SsendniK');
});

test('reverse a sentence', () => {
  expect(reverseString("I'm looking for love")).toBe("evol rof gnikool m'I");
});