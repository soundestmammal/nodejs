console.log('Starting nodes dot js');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.addCalc = (a,b) => {
    const sum = a + b;
    console.log(sum);
}
