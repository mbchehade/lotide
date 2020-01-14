# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Head is a function which returns the first item in the array. 

* `function2(middle)`: middle function will take in an array and return the middle-most element(s) of the given array.

* `function3(tail)`: tail function returns the "tail" of an array: everything except for the first item(head) of the povided array. 

* `function4(assertEqual)`: assertEqual is a function that compares two values it takes in and prind out a message telling you if they match or not.   

* `function5(assertArrayEqual)`: assertArraysEqual function will take in two arrays and console.log an appropriate message to the console.

* `function6(assertObjectEqual)`: assertObjectsEqual function will take in two objects and console.log an appropriate message to the console.  

* `function7(countLetters)`: countLetters function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.  

* `function8(countOnly)`: countOnly function will be given an array and an object. It will return an object containing counts of everything that the input object listed.

* `function9(eqArrays)`: eqArrays function takes in two arrays and returns true or false, based on perfect match.   

* `function10(eqObject)`: eqObjects function which will take in two objects and returns true or false, based on a perfect match.

* `function11(findKey)`: findKey function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `function12(findKeyByValue)`: findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined. 

* `function13(flatten)`: function flatten will take in an array of arrays and return a "flattened" version of the array.  

* `function14(index)`: index is a function which contains an object of all the file on this project to exports.

* `function15(letterPosition)`: letterPositions which will return all the indices in the string where each character is found. 

* `function16(map)`: map function will take two arguments, an array to map and a callback function, the map function will return a new array based on the results of the callback function.

* `function17(takeUntil)`: takeUntil function will take two parameters, the array to work with abd the callback. The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

* `function17(without)`:  without function will return a subset of a given array, removing unwanted elements.


