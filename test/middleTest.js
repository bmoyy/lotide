const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for an array with 1 element ", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array for an array with 2 elements ", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns the middle element for an array with odd elements", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns the middle 2 elements for an array with even elements ", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
})