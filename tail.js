// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');
const tail = function (items) {
  let item = items.slice(1);
  return item;
};



module.exports = tail;
