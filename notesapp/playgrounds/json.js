const obj = {
    name: 'Robert'
};

// JSON.Stringify takes an object and returns JSON data.

const stringObj = JSON.stringify(obj);
console.log(typeof(stringObj)); //String instead of an object type
console.log(stringObj);

// Take the Data in json form and convert it into an object or an array.
const personString = '{"name": "Robert", "age": 23}'
const person = JSON.parse(personString);
console.log(typeof(person)); // Type of is now an object (it used to be type string!)
console.log(person);

// FS module allows access to standard library module(Libuv I would guess?)
const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// typeof(originalNote) -> Object

const originalNoteString = JSON.stringify(originalNote);
//typeof(originalNoteString) -> String

// Arg1 -> file destination to write to | Arg2 -> data to write (it is in proper format 'JSON' (STRING))
fs.writeFileSync('notes.json', originalNoteString);

// const noteString = fs.readFileSync('notes.json');
// const note = JSON.parse(noteString);
// console.log(typeof(note));
// console.log(note.title);