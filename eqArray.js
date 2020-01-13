const assertEqual = require('./assertEqual');


// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



//refactored method.
function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;







// this code is comparing between two strings passed to the parameters actual and expected.
//if they are equal then assertion passed;
//if they arent equal then asserttion failed;
//assertEqual is to test the parameters in the function when using == and === operators;
// function eqArrays(arr1, arr2) {
//   let emptyArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     emptyArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] !== emptyArr[i]) {
//       return false;
//     }
//   }
//   return true;
// };

