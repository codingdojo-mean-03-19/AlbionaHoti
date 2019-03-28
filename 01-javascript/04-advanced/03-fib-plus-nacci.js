/*
    The Fibonacci sequence is a sequence where each number is the sum
    of its two predecessors. 
    - The sequence starts off like so: (0), 1, 2, 3, 5, 8. etc

    - The 0 is in parenthesis because it helps the sequence
    get started but it is not actually part of the sequence.

    - Using Closures, make the Fib function with the following specifications:
*/

function fib() {
  // some variables here
  var self = 0;
  function nacci() {
    // do something to those variables here
    console.log(self + 1);
    self ++; 
    if (self <= 1) return 1;
  }
  return nacci
}

var fibCounter = fib();

fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()