const fs = require('fs');
const _ = require('lodash');

// const test = "This is a string";

// // lodash isString utility function
// console.log(_.isString(test));

// // lodash Uniq
// // Takes an array and removes duplicates
// var filteredArray = ['Robert', 123, 5, 321, "robert", "rob", "Robert"];
// console.log(_.uniq(filteredArray))

const command = process.argv[2];

if (command === "ADD") {
    return console.log('You are trying to call the add thing!');
}
else if (command === "READ") {
    return console.log('READ requested!');
}
else if (command === "REMOVE") {
    return console.log('removing note')
}
console.log("you did not enter a valid keyword");


