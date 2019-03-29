module.exports = function() {
  return {
    add: function(num1, num2) {
      console.log("The sum is: ", num1+num2);
    },
    multiply: function(num1, num2) {
      console.log("The product is: ", num1 * num2);
    },
    square: function(x) {
      if (x == 0 || x == 1){
        return x;
      }
        
      // Staring from 1, try all numbers until 
      // i*i is greater than or equal to x. 
      var i = 1;
      var  result = 1;
      while (result <= x){
        i += 1;
        result = i * i; 
      } 
      console.log("The square number is: ", result);
      return i - 1;
    },
   random: function(start, end) {
      console.log('The random nr: ', Math.floor((Math.random() * end) + start));
   } 
  }
}