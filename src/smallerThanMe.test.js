const smallerThanMe = require('./smallerThanMe');

describe('smallerThanMe', () => {
  it('[1, 2, 3] should return [0, 0, 0]', () => {
    expect(smallerThanMe([1, 2, 3])).toStrictEqual([0, 0, 0]);
  });

  it('[1, 2, 0] should return [1, 1, 0]', () => {
    expect(smallerThanMe([1, 2, 0])).toStrictEqual([1, 1, 0]);
  });

  it('[1, 2, 1] should return [0, 1, 0]', () => {
    expect(smallerThanMe([1, 2, 1])).toStrictEqual([0, 1, 0]);
  });
});
