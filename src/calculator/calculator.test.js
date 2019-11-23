import { add, subtrack, divide, multiply } from './calculator';

test('add two number', () => {
  expect(add(2, 3)).toBe(5);
});

test('add a number with 0', () => {
  expect(add(0, 4)).toBe(4);
});

test('add zero number', () => {
  expect(add(0, 0)).toBe(0);
});

test('subtrack two number to be negative', () => {
  expect(subtrack(2, 3)).toBe(-1);
});

test('subtrack two number to be positive', () => {
  expect(subtrack(5, 3)).toBe(2);
});

test('subtrack a number with 0', () => {
  expect(subtrack(0, 4)).toBe(-4);
});

test('subtrack zero number', () => {
  expect(subtrack(0, 0)).toBe(0);
});

test('multiply two non null number', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('multiple a number with zero', () => {
  expect(multiply(0, 4)).toBe(0);
  expect(multiply(3, 0)).toBe(0);
});

test('divide two number', () => {
  expect(divide(4, 2)).toBe(2);
  expect(divide(4, 5)).toBe(4/5);
});

test('divide by 0 is not allowed', () => {
  expect(divide(4, 0)).toThrow();
});