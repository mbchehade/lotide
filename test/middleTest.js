// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');


// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]


const assert = require('chai').assert;
const tail = require('../middle');


describe("#middle", () => {

  it("return the middle element of a function", () => {

    const array = [1, 2, 3]
    assert.deepEqual(tail(array), [2]);
  });

  it("return the middle elements of a function if the length is even", () => {

    const array = [1, 2, 3, 4]
    assert.deepEqual(tail(array), [2, 3]);
  });

  it("return the middle element of a function if the length is odd", () => {

    const array = [1, 2, 3, 4, 5]
    assert.deepEqual(tail(array), [3]);
  });

  it("return the middle elements of a function if length is even", () => {

    const array = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(tail(array), [3, 4]);
  });

});