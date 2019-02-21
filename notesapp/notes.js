const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note; 
    }
};

var getAll = () => {
    console.log('Getting all of the notes!');
    let notes = fetchNotes();
    if (notes.length === 0){
        console.log("There are no notes currently saved");
    } else {
        for (let i = 0; i < notes.length; i++) {
            let t = notes[i].title;
            let b = notes[i].body;
            console.log(`Title: ${t}`);
            console.log(`Body: ${b}\n`);
        }     
    }
};

var getNote = (title) => {
    var notes = fetchNotes();
    var duplicateNotes = notes.filter(note => note.title === title )    
    if (duplicateNotes.length === 0) {
        return false;
    } else {
        var locatedNote = duplicateNotes[0];
        return locatedNote;
    }
}

var removeNote = (test) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== test );
    saveNotes(filteredNotes);
    console.log('Your note has been removed');
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    debugger;
    console.log("---------------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}