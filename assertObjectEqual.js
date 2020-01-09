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

//-------------------------------------------------------
//this is my eqArrays function
function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
//-------------------------------------------------------

//This should take the 2 objects and log a message 

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  if (!eqObjects(object1, object2)) {
    console.log(`🛑🛑🛑 ${inspect(object1)} !== ${inspect(object2)}`)
  }
  else if (eqObjects(object1, object2))
    console.log(`✅✅✅ ${inspect(object1)} === ${inspect(object2)}`)
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);// true


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);//true


const cd2 = { a: "1", b: "2", c: "3" };
assertObjectsEqual(cd, cd2);// false