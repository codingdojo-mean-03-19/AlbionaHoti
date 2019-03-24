console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';
setTimeout(function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
  );
console.log("Printing ninja value.");
console.log(ninja, "NOW");

console.log('--------')

var a = 2;
var b = function() { console.log("something"); };

function doSomething(x) {
  console.log(typeof(x));
}

doSomething(a);
doSomething(b);

console.log('--------------')

function doSomething(possibleCallback) {
  if(typeof(possibleCallback) === 'function') {
    console.log('possibleCallback is a callback! yeeeeeeee');
    possibleCallback(); // we can invoke the callback;
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}

doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');

console.log('---------')

function makePasta(pasta, makeSouce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSouce();
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}

function makePesto(){
  console.log("Making Pesto");
  return "pesto";
}

function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo"
}

// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));
