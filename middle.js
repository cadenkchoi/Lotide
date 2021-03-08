const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr1) {
  if(arr1.length <= 2) {
    return [];
  } else if(arr1.length % 2 === 0) {
    let middle = [arr1[(arr1.length)/2 -1], arr1[(arr1.length/2)]];
    return middle;
  } else {
    let oddMiddle = [Math.floor((arr1.length)/2) +1];
    return oddMiddle;
  }
}

module.exports = middle;

