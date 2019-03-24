/*
    Scopes

*/

function counter() {
  var count = 0;

  function childScope() {
    // increment count inside
    count += 1;
    return count
  }
  return childScope;
}

counter = counter();
// once we declare the function - it remembers the environment it was created
// it still has a memory of all the info that existed when it was created - 
// count info.
// 

// console.log(counter);
// => 1
console.log(counter());
// => 2
console.log(counter());
// => 3

console.log(counter());
// => 3

console.log('--------------')



function Person(name, items) {
  if (!(this instanceof Person)) {
    return new Person(name, items);
  };

  this.name = name;

  console.log('Context - Current object---', this);
  this.items = items;

}

Person.prototype.take =  function take(item, target) {
  console.log('Persona calling: ', this.name);
  // console.log(target.items instanceof Array);
  // console.log(Array.isArray(target));
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target must have items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    console.log('index.', index, target.items[index])
    if (item === target.items[index]) {
      console.log('found item', item, 'at index', index)

      // console.log('result', target.items.slice(index, index+1))
      // console.log('rpersonesult', target.items.splice(index, 1))
      target.items.splice(index, 1);

      this.items.push(item);
      // console.log('items', target.items);
      // slice - makes a copy and does not destroy data from the original array
      // splice -- mutates array

      return true;
    }
  }
  return false;
}


const person1 = Person('Albiona', ['Hoti', '23 years old', 'one way'])
// it depends on the context of the Person function
// this refers to the current object
const person2 = new Person('Rino', ['Mal', '26 years old', 'two ways'])

console.log('person', person1);
console.log('person', person2);

console.log('---------')


person2.take('Hoti', person1);
person1.take('Hoti', person2);
// take('Hoti', person1);

// console.log(1 == '12');

console.log('person', person1);
console.log('person', person2);

const backpack = {
  items: ['compass', 'snacks', 'map']
};

person1.take('snacks', backpack);

console.log('person', person1);
console.log('back', backpack);

// backpack.take = person1.take;

// console.log(backpack);

// person2.take.call(backpack, 'Hoti', person1);
person2.take.apply(backpack,['Hoti', person1]);


console.log('person', person1);
console.log('person2', person2);
console.log('back', backpack);