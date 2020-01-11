cofunction eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertEqualArray = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// 1. we want to create a function that would get rid of nested function and return them as one array of numbers.
// 2. forEach the array then check with Array.isArray the type of elements inside the numArray.
// 3. if the elements are not arrays, return them and push them into an empty array.
// 4. if they are arrays, push them into the same emptyArray;


const flatten = function (numArray) {
  let emptyArray = [];
  for (const item of numArray) {
    if (Array.isArray(item)) {
      for (const num of item) {
        emptyArray.push(num)
      }
    } else {
      emptyArray.push(item);
    }
  }
  return emptyArray;
}

assertEqualArray(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

