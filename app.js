console.log("Starting the App!");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

const command = process.argv[2];
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
}
else if (command === 'remove'){
    console.log('Remove the note');
}
else if (command === 'read'){
    console.log('Fetching all notes');
}
else if (command === 'list'){
    console.log('Listing all notes');
}
else {
    console.log('command not recognized.');
}
