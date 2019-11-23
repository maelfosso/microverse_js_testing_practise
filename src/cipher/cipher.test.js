import cipher from './cipher';

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

test('encryption of a word', () => {
  expect(cipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('encryption wrap from z to a', () => {
  let text = letters.join('');

  expect(cipher(text, 0)).toBe(text);
  expect(cipher(text, 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('encryption with punctuation', () => {
  expect(cipher('Hello World !!', 1)).toBe('ifmmp xpsme !!');
  expect(cipher('How are you ?', 5)).toBe('ipx bsf zpv ?');
});

