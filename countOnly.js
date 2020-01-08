const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//only keys that has truthy value should be counted in the resulting object. all other strings are either set to false orn ot included at all in the object should not be counted.

//setting up a function that is caled countOnly and takes 2 parameters and it should report back how many instances of each string were found in the allItems array of strings. so allItems is an arrat of strings;
//countOnly is a function that would see how many strings found in the iput array and their respective counts. so it will return an object to represent how many strings have a truthy value in the object.
const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    // console.log(item)
    if (results[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);