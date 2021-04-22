//* REGEX

//--------------------------

// // Only change code below this line
// let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!'
// let chewieQuote2 = 'aba'
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// let result2 = chewieQuote2.match(chewieRegex);

// console.log(result, result2)

//--------------------------

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.[a-z0-9]*?>/; // Change this line
let result = text.match(myRegex);

let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested', ['loop', 'shift', 6, 7, 1000, 'method', ['concat', false, true, 'spread', 'array', ['mutate', 1327.98, 'splice', 'slice', 'push', ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]]],


    // Only change code above this line
];