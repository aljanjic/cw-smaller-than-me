const smallerThanMe = require('./smallerThanMe');

describe('smallerThanMe', () => {
  it('[1, 2, 3] should return [0, 0, 0]', () => {
    expect(smallerThanMe([1, 2, 3])).toStrictEqual([0, 0, 0]);
  });
});
