const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns the middle number in an array [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });
});