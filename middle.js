function eqArrays(arr1, arr2) {
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

//middle function should return an array with only the middle elements of the provided array
//if the array had one or two elements, thhere is no middle return empty array
//if the array has odd numbers, an array containing a single middle element should be returned. so return the middle number;
// if the arrays with even numbers an array containing the middle elements in the middle should be return.

function middle(arr) {
  const emptyArr = [];
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length === 1 || arr.length === 2) {
    return emptyArr;
  } else if (arr.length % 2 === 0) {
    emptyArr.push(arr[midIndex - 1])
    emptyArr.push(arr[midIndex])
  } else {
    emptyArr.push(arr[midIndex])
  }
  return emptyArr;
}

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]













