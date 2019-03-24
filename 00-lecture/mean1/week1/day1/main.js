var myVar = 'this is a string';

const array = ['brown', 'blue', 5.6, 34];


array.push(myVar);


// for(var index = 0; index < array.length; index++) {
//   console.log('index is ' + index, array[index]);
// }

// console.log('----------')

// for(var element in array) {
//   console.log('element is ' + element)
// }

// console.log('----------')

// for(var element of array.entries()) {
//   console.log('element is ', element)
// }

//  [ 0, 'brown' ] - array.entries() gives you this

// using let for declaring  - 
/*
    let allows content to be mutable
    - 

    const info should not change - you cant reassign 
    -
*/


// Array destructuring 


var [brown, , num] = array;
console.log(brown, num)

for(var [index, element] of array.entries()){
  console.log('element is ', element, index)
}

console.log('---------')

// var person = ['blue', 'pink', 2.3, 19];

// // key, value pairs - or dict in python, hash in ruby

const person = {
  hair: 'brown',
  eyes: 'blue',
  height: 2.3,
  age: 19,
  prop: 'this is prop'
  // the internals data can be changed - even if it's declared with const

};

person.weight = 18;
// person['weight'] = 123;

console.log(person);

// for(var prop in person){
//   console.log('prop is ', prop, person[prop])
// }


// Functions

myFunc();
function myFunc() {
  console.log('running func');
}
/*
    Hoisting - in js is -interpreter looks for func and var declarations
    - will group them and raise them to the top of their
    scope, the current scope - consider the global scope - myFunc.. 
    it will be available everywhere.
*/