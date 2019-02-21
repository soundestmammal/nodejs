const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleObj = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const bodyObj = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const argv = yargs.command('add', 'Add a new note', {
    title: titleObj,
    body: bodyObj
}).command('list', 'List of the notes')
.command('read', 'Read a single note', {
    title: titleObj
})
.command('remove', 'Removes the note by title', {
    title: titleObj
})
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        notes.logNote(note);
    }
    else {
        console.log("Woops. That didn't work. Try a different title");
    }
}
else if (command === 'list'){
    notes.getAll()
}
else if (command === 'read'){
    var read = notes.getNote(argv.title);
    if (read) {
        console.log("Note found!"); 
        notes.logNote(read);
    } else {
        console.log("Could not locate that note");
    }

}
else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `You removed the item with title: ${argv.title}` : "No note found";
    console.log("This is the remove output ", message);
}
else {
    console.log('command not recognized.');
}


