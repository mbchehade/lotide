const takeUntil = function (array, callback) {
  const results = []
  for (let num of array) {
    if (callback(num)) {
      results.push(callback(num) ? null : num);
      console.log(false);
    } else {
      console.log(true);
      break;
    }
  }
  return results;
}

//-----------------------------------------------------------

const assertEqualArray = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//-----------------------------------------------------------

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//===========================================================


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertEqualArray(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertEqualArray(results2, ["I've', 'been', 'to', 'Hollywood"]);