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
    let duplicateNotes = notes.filter((note) => note.title === title )    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

getAll = () => {
    console.log('Getting all of the notes!');
}

getNote = () => {
    console.log('This is to read the note!!!');
}

removeNote = (title) => {
    console.log('Removed the note');
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
}