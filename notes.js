console.log('Starting the notes app');

const fs = require('fs');

const fetchNotes = () => {
    
    try {
        const notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString);
    } catch (e) {

    }
}
const saveNotes () => {

}
addNote = (title, body) => {
    let notes = [];
    const note = {
        title,
        body
    };
    // Create a variable for duplicate notes
    // Use filter method to 
    let duplicateNotes = notes.filter((note) => note.title === title )    
    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        console.log('Choose a Different Title.');
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