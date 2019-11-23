import analysis from './array-analysis';

test('analysis is working', () => {
  expect(analysis([2, 3, 1])).toEqual({ average: 2, min: 1, max: 3, length: 3 });
});

test('analysis throw an error with not number', () => {
  expect(() => analysis([1,'3',3])).toThrow();
});

test('analysis throw an error with empty array', () => {
  expect(() => analysis([])).toThrow();
});