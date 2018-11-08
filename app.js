console.log("Starting the App!");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`You successfully added note with Title: ${note.title} and Body: ${note.body}.`)
    }
    else {
        console.log("Woops. That didn't work. Try a different title");
    }
    // If note exists print out the note title and the note body

    // If the note does not exist, or undefined, print that the note title already in use.
}
else if (command === 'list'){
    notes.getAll()
}
else if (command === 'read'){
    notes.getNote();
}
else if (command === 'remove'){
    notes.removeNote(argv.title);
}
else {
    console.log('command not recognized.');
}


