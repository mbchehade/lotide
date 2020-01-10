const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//===========================================================
//function find key should take an object parameter. it should scan the object and return the first key for wich the callback returns a truthy value. if no key is found, then it should return undefined.
//===========================================================
//pseudo code
//-------------------
//create function insert an object in it.
//step2 create for in. if its found return the key, if it is not return false undefined.
const findKey = function (object, callback) {
  for (const objectKey in object) {
    if (callback(object[objectKey])) {
      console.log(`objectkey is: ${objectKey}`)
      return objectKey

    }
  }
};


const someObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
} // => "noma"

assertEqual(findKey(someObject, x => x.stars === 2), "noma");