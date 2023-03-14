const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

describe("#tail", () => {
  it("returns the last number in an array [1, 2, 3]", () => {
    assertArraysEqual(tail([1, 2, 3]), [3]);
  });
});