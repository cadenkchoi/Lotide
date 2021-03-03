const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countLetters = function(string) {

// }

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { // removes spaces
      if (result[letter]) { // keeps from creating multiple letter counts
        result[letter] += 1;
      } else { // creates letter if it doesn't exist in object
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));