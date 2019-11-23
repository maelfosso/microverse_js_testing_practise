import capitalize from './capitalize';
// const capitalize = require('./capitalize');

test('Capitalize empty string is empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize a letter return a upper case letter', () => {
  expect(capitalize('l')).toBe('l'.toUpperCase());
});

test('capitalize a word', () => {
  expect(capitalize('morning')).toBe('Morning');
});

test('capitalize a sentence', () => {
  expect(capitalize('good morning')).toBe('Good morning');
});