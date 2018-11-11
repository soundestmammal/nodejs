console.log('Starting the notes app');

const fs = require('fs');

// Reusable function to fetch the notes titles
const fetchNotes = () => {
    try {
        // Try to read file n-d.json, and assign it to variable
        const notesString = fs.readFileSync('notes-data.json')
        // If variable assignment successful, then return the parsed JSON    
        return JSON.parse(notesString);
    // if there is nothing to read, then goes to catch case.
    } catch (e) {
        return [];
    }
}
// Write the note to the json file,
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};
addNote = (title, body) => {
    // Assign the notes from json to the notes variable
    // If no notes, then create an array to store the notes
    let notes = fetchNotes();
    // This is the structure of one of our notes
    const note = {
        title,
        body
    };
    // Create a variable for duplicate notes
    // Use filter method to 
    
}

getAll = () => {
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

getNote = (title) => {
    let notes = fetchNotes();
    let duplicateNotes = notes.filter((note) => note.title === title )    
    if (duplicateNotes.length === 0) {
        return false;
    } else {
        let locatedNote = duplicateNotes[0];
        return locatedNote;
    }
}

removeNote = (test) => {
    // Insert array of notes
    let notes = fetchNotes();
    // What do i need title for:
    // Title - to locate the notes.note.title === title ^^^
    let filteredNotes = notes.filter((note) => note.title != test );
    saveNotes(notes);
    console.log('Your note has been removed')
}
module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
}