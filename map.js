const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const assertEqualArray = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];// return index 0
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];//divisable by 2
const wordsTwo = ["chicken", "beef and corn", "with", "south america", "calgary"]// return lenght 

// console.log(words.map(word => word[0]))

assertEqualArray(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertEqualArray(map(numbers, divisible => divisible % 2 === 0), [2, 4, 6, 8]);
assertEqualArray(map(wordsTwo, wordL => wordL.length), [7, 13, 4, 13, 7]);