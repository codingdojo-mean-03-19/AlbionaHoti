// Strings
// var myString : string = "This is a string";
// Numbers
var myNumber = 7;
// Boolean
var myBoolean = true;
// Array of  Numbers 
var arrayOfNumbers;
// (alternative way)
var arrayOfNumbers;
// any (assign to any type, and change to any type, anytime)
var anything = 7;
/*
    Variable Declarations

    - var:  used to declare variables within a function
    - let:  used when wanted to limit the scope of a variable to a block
            an if statement or a for loop
    - const: never change


*/
/*
    VAR - is used when we want to define the scope, and this will scoped
          within functions only

    LET - is used when we want to define the scope, within block { }
          this includes loops, a variable declared as 'LET' within an
          if block, or for loop block, will not be defined outside of the if block
          or the for loop block
          
    CONST - is similar to 'let' - in that it's scoped within blocks, but we are
          not unable to change its type, or value once set.
          NOTE: if an object is declared with const we can't change it's structure
          such as adding or replacing keys, but we can change the object's values

*/
function testing() {
    var x = 10;
    console.log(x);
    /*
        in a function if we use 'var' or 'let' - it's still limited
        in this block of code
    */
}
testing();
// console.log(x) // Error, undefined
if (true) {
    var x_1 = 10;
    console.log(x_1);
}
/*
    if its 'var' in a block of if or for statement:

    - the 'var' is available after the for loop
    - so we use 'let' - to be available only inside the if statement and for statement
    
    'const'
*/
var x = 10;
var myObj = {
    a: 1, b: 2
};
myObj.a = 5; // ok
// myObj.abx = 2 // Error
// myObj = { x: 1, y: 2, z: 4 } // Error
// Functions and Types
// Never type (will never reach the end of the function)
// function errorHandler(message: string): never{
//   throw new Error(message);
// }
// Void (returns nothing)
function printValue(val, x) {
    console.log(val);
    return;
}
/*
    Classes JS - Syntacticall sugar:
    - we are creating an object constructor

    - one feature: --- it comes with a build in function called constructor:
                       the constructor function is build into classes
                       - when we invoke that class to create new instance of it
                       : the parameters we pass in will always be the parameters
                       passed into the constructor -
*/
var SLNode = /** @class */ (function () {
    function SLNode(valueP, secondParam) {
        this.val = valueP;
    }
    SLNode.prototype.doSomething = function () {
        console.log("This is Fun!");
    };
    return SLNode;
}());
var firstNode = new SLNode(1, "second");
console.log(firstNode);
