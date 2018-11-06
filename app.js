console.log("Starting the App!");

// Allows us to load in a file
const fs = require('fs');
const os = require('os');
// Load in a file that we have created
const notes = require('./notes');

// let user = os.userInfo()
// fs.appendFile('greetings.txt', `Hello ${user.username}!
//  You are ${notes.age}!`);


const res = notes.addNote();
console.log(res);

notes.addCalc(1, 3);

