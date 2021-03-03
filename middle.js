let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]) )// => [3])
console.log(middle([1, 2, 3, 4]) );// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]);