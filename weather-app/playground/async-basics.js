console.log('Starting app');
setTimeout( () => {
    console.log('This is in the timeout')},
    2000
);
setTimeout( () => {
    console.log('Will this run right away?')
}, 0);
console.log('Finish app!');