// console.log(example);
// let example = "I'm the example!";

/*
    var example;
    console.log(example);
    example = "I'm the example!"
*/

// 1.

// console.log(hello);
// var hello = 'world';

/*
    var hello;
    console.log(hello) // logs undefined
    hello='world';
*/

// 2.

var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}

/*
    var needle = 'haystack'
    function test(){}
    test(){
      var needle = 'magnet';
      console.log(needle)
    }

*/

// 3.

var brendan = 'super cool';
// print()
function print(){
  brendan = 'only okay';
  console.log(brendan)
}
console.log(brendan);

/*
    var brendan = 'super cool';
    print(){
      brendan = 'only okay';
      console.log(brendan)
    }
    console.log(brendan)

*/

// 4.

var food = 'chicken';
console.log(food);
eat();
function eat(){
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

/*
    var food = 'chicken';
    console.log(food)
    eat(){};
    function eat() {
      // food = 'half-chicken'; // global scope
      console.log(food); // global scope
      var food = 'gone'
    }
*/

console.log('-----------')
// 5.

mean()
console.log(food);
// var mean =
 function mean() {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
}
console.log(food);

/*
    mean(){}
    var food;
    console.log(food); // undefined
    mean() {
      food = 'chicken' // globally
      console.log(food) // chicken
      var food = 'fish'
      console.log(food); // fish
    }

    console.log(food) // chicken
*/
console.log('-----------')

// 6.

console.log(genre);
var genre = 'disco';
rewind();

function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

/*
    var genre;
    console.log(genre); // undefined
    genre = 'disco'
    rewind(){}
    function rewind() {
      genre = 'rock'
      console.log(genre) // rock
      var genre = 'r&b'
      console.log(genre); // r&b
    }
    console.log(genre); // disco
*/

console.log('-----------')

// 7.

dojo = 'san jose';
console.log(dojo);
learn()
function learn(){
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

/*
    'san jose'
    learn(){}
    function() {
      dojo = 'seattle'
      console.log(dojo) // seattle
      var dojo = "burbank"
      console.log(dojo) // burbank
    }
    console.log(dojo) // san jose
*/

// 8.

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
  let dojo = {};
  dojo.name=name;
  dojo.students=students;
  if(dojo.students>50){
    dojo.hiring=true;
  } else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}

/*
    the const wont allow assignment 
    = with let:
    {
      name: 'Chicago', students: 65, hiring: true
    }
    closed for now
*/