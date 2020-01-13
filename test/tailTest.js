const tail = require('../tail');
const assertEqual = require('../assertEqual');



const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);