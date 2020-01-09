const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //we need to compare object1 to object 2
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const value of key1) {
    if (Array.isArray(object2[value])) {
      console.log("entering eqArrays")
      if (!eqArrays(object1[value], object2[value])) {
        return false;
      }
    } else if (object1[value] !== object2[value]) {
      return false;
    }
    return true;
  }



};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba));//true
console.log(eqObjects(ab, abc));// false










