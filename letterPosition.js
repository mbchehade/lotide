function letterPositions(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]// i assigned sentence[i] to letter var

    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i]

    }
  }
  return results
}

const assertEqualArray = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

assertEqualArray(letterPositions("hello").l, [2, 3])



function letterPositions(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]// i assigned sentence[i] to letter var

    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i]

    }
  }
  return results
}

