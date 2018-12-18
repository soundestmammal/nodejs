// Create a list of products with properties name and type.
const products = [
    {name: "apple", type: "fruit", quantity: 0, price: 2},
    {name: "banana", type: "fruit", quantity: 10, price: 1.5},
    {name: "celery", type: "veggie", quantity: 5, price: 2.25},
    {name: "squash", type: "veggie", quantity: 2, price: 1}
];

// Create an array to push the desired results into
// Named oldResult because it is the way I used to solve this problem
const oldResult = [];

for (i=0; i < products.length; i++) {
    if (products[i].type == 'veggie')
        oldResult.push(products[i]);
}

// console.log(oldResult);

// Produce a subset of the different products
const usingFilter = products.filter( (item) =>  item.type == "fruit" );

// console.log(usingFilter);

// Make the filter a little bit more complex
// type is veggie, quantity is greater than 0, price is less than 10
// add on more logic for filtering
const complex = products.filter((item) => {
    return item.type == "veggie"
    && item.quantity > 0
    && item.price < 10
});

console.log(complex);