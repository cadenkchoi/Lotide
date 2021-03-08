const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5, 6] for [2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([2, 3, 4, 5, 6, 7, 8, 9]), [5, 6]);
  });
});
