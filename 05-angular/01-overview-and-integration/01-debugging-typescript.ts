// 1. Setting types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";

// 2. Setting the types for function parameters

function sayHello(name: string) {
    return `Hello, ${name}!`;
}

// This is working great:
console.log(sayHello("Kermit"));

// Why isn't this working? I want it to return "Hello, 9!"

// console.log(sayHello(9));
/* 
    1. It is not working because we already declared the
    function parameter to be a String - so you have to pass into 
    the func a string with the "Hello, 9!"

*/

console.log(sayHello("Hello, 9!"));

// 3. Optinal parameters
function fullName(firstName: string, lastName: string, middleName: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

// This works:
console.log(fullName("Mary", "Moore", "Tyler"));

// What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

/*
    2. We can declare our function parameters to be optional
    with the '?' questionmark like so:
 */

function fullName2(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

console.log(fullName2("Jimbo", "Johnes"));

// 4. Interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}

function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}

const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}

const jay = {
    firstName: "Jay",
    lastName: "patel",
    belts: 4 // fixed
}

// This seems to work fine:
console.log(graduate(christine));

// This one has problems:
console.log(graduate(jay));

/*
    3. We have created our student jay- but when we pass
    the 'belt' key to the student jay - that doesn't exists in
    Student interface - so we have to change the 'belt'
    into 'belts' 
 */

// 5. Classes and function parameters

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend!");
    }
}

// This is not making an instance of Ninja, for some reason:
// const shane = Ninja();

/*
    4. This const shane is not making an instance of Ninja
    because it is not callable - Ninja is an object constructor
    so we need to include new in front of Ninja() and send 2 string parameters
    for the firstname and lastname
 */
const shane = new Ninja("Albiona", "Hoti");

// Since I'm having trouble making an instance of Ninja,
// I decided to do this:

const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing",
    debug() {

    }
}

// Now I'mm make a study fundtion, which is like
// out graduate function above 

function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
/*
    'study' func is receiving an object 'turing'
    which has 3 keys - fullName, firstName, lastName
    And at the same time the 'study' func
    is a constant of 'Ninja' class - it has it's structure
    And 'Ninja' class waits for only two parameters: firstName, lastName

 */

/*
        Haha - I was wrong - I forgot about the 
        debug func ----- I have to have 10 eyes open!!

        Now I get it: 
        We have in the class a function - which every
        instance of that class should have that func!
        
 */

// 6. Array Functions

var increment = x => x + 1;
// this works great:
console.log(increment(3));

var square = x => { return x * x };
//This is not showing me what I want:
console.log(square(4));

// I added the return - without the return statement
// didn;t worked because in the first example I think
// it was because only one value was waiting to get back

// This is not working:
var multiply = (x, y) => { return x * y };
// fixed it : when two parameters we have to put the brackets

console.log(multiply(2,3))
// Nor is this working:
var math = (x, y) => {
    let sum: number = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
    
};

console.log(math(2, 3));

// fixed - put everything inside brackets there are a lot of things going on

// 7.  Arrow functions and 'this'

class Elephant {
    
    constructor(public age: number){
    }   
    birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class

/*
        omg - fixed it!

        I didn;t thought of this solution in the first place!

        I was going around declaring the birthday as a variable
        accessing her with this - blabla

        Then I went on Google and search arrow functions typescript

        Thank you guys - you made me believe even though I don't know the solution
        search for it and learn!
 */