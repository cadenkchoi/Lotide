const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [6, 7, 8] for [5, 6, 7, 8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });
});