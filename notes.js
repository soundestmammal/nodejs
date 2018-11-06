console.log('Starting the notes app');

addNote = (title,body) => {
    console.log('Adding the note', title, body);
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