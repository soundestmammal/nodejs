// Create a list of products with properties name and type.
const products = [
    {name: "apple", type: "fruit"},
    {name: "banana", type: "fruit"},
    {name: "celery", type: "veggie"},
    {name: "squash", type: "veggie"}
];

// Create an array to push the desired results into
// Named oldResult because it is the way I used to solve this problem
const oldResult = [];

for (i=0; i < products.length; i++) {
    if (products[i].type == 'veggie')
        oldResult.push(products[i]);
}

console.log(oldResult);

// Produce a subset of the different products
const usingFilter = products.filter( (item) =>  item.type == "fruit" );

console.log(usingFilter);


