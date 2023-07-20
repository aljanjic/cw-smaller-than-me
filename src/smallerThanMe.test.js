const smallerThanMe = require('./smallerThanMe');

describe('smallerThanMe', () => {
  it('should return hello', () => {
    expect(smallerThanMe()).toBe('hello');
  });
});
