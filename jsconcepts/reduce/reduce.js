var numbers = [10, 20, 30];
var sum = 0;
for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}

// number after the function is the initial value
numbers.reduce((sum, number)=>{
    return sum + number
}, 0)


var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

primaryColors.reduce((prev, primaryColor) => {
    return prev.push(primaryColor.color);
}, [])


//How to solve balanced parameters question?

// I am thinking about this and it sounds resonable to...

// keep track of count of open and close
// check to see if one is open if the next one is closed
// if one closes before another opens than it is unbalanced
