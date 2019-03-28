/*
    Finish the five methods attached to the '_' object to create
    your own custom library - The purpose of this assignment
    is to show how a simple JavaScript library can be made.
*/

// Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index); // ivoking the callback many times... delegation!
  }
}

const stringArray = ['1', 'cat', 'albo', '2', '3', '4', '5', '6', '7', '8'];

each(stringArray, function (element, index) { // anonymous function - 
  console.log(`element: ${element} and index ${index}`);
  console.log('element: ' + element + ' and index ' + index); // string concatenation
});

each(stringArray, listItem);

function listItem(item) {
  console.log(item);
}

function map(arr, callback) {
  const new_arr = [];
  for (let index = 0; index < arr.length; index++) {
    new_arr.push(callback(arr[index], index));
  }

  return new_arr;
}

let results = map(stringArray, function (element, index) {
  return parseInt(element, 10);
});

console.log(results);

function filter(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      // we are passing a second arg
      // because our function when it calls it can optionally accept it.
      results.push(array[i]);
    }
  }
  return results;
}

// results = filter(results, function(element) {
//   return !isNaN(element);
// });

// console.log(results);

function reject(array, callback) {
  const new_arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      new_arr.push(array[i]);
    }
  }
  return new_arr;
}

results = reject(results, function (element) {
  return isNaN(element);
})

console.log(results);

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return array[i];
    }
  }
}

res = find(results, function (element) {
  return element % 2 == 0;
});

re = filter(results, function (elem) {
  return elem % 2 === 0;
})

console.log(re);

console.log(find(results, function (elem) {
  return elem === 3;
}))

console.log(res);

function reduce(array, callback, memo) {
  const new_arr = [].concat(array);
  if (memo === undefined) {
    memo = new_arr.pop();
  }
  for (let i = 0; i < array.length; i++) {
    memo = callback(memo, array[i], i);
  }

  return memo;
}

resu = reduce(results, add, 8);

function add(num1, num2) {
  return num1 + num2;
}
console.log('Reduce', resu);

var _ = {
  map: function (array, callback) {
    // code here;
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
      new_array.push(callback(array[i], i));
    }
    return new_array;
  },
  reduce: function (list, iterate, init) {
    // code here;
    const new_arr = [].concat(array);
    if (memo === undefined) {
      memo = new_arr.pop();
    }
    for (let i = 0; i < array.length; i++) {
      memo = callback(memo, array[i], i);
    }

    return memo;
  },
  find: function (array, callback) {
    // code here;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i)) {
        return array[i];
      }
    }
  },
  filter: function (array, callback) {
    // code here;
    const new_arr = [];

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i)) {
        new_arr.push(array[i]);
      }
    }
    return new_arr;
  },
  reject: function (array, callback) {
    // code here;
    const new_arr = [];
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i)) {
        new_arr.push(array[i]);
      }
    }
    return new_arr;
  }
}

// you just created a library with 5 methods;