// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');



const head = function (item) {
  if (item.length === 0) {
    return undefined;
  } else {
    return item[0];
  }
};

module.exports = head;

