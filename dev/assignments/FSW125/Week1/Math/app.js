//******* 2 examples to call sum from Math  then console  sum of 2 + 3*****/
// const {sum} = require('./math')
// const sum= require('./math').sum
//console.log(sum(2,3))
// below example can run above all in one line .... ussually used if only going to be calling it once
//console.log( require('./math').sum(2, 3) )

// ********** Example to call everything from Math... but then you need to use dot notation..... Math.sum ....etc. *************/
const Math = require("./math");

// using the Sum
console.log("Calling Sum function and passing 2 and 3 = " + Math.sum(2, 3));
// using the subtract
console.log(
  "Calling Subtract function and passing 50 and 32 = " + Math.subtract(50, 32)
);
// using the Multiply
console.log(
  "Calling Multiply function and passing 50 and 32 = " + Math.multiply(50, 32)
);
// using the Divide
console.log(
  "Calling Divide function and passing 100 and 4 = " + Math.divide(100, 4)
);
// using the Multiply by a factor which the factor is defaulted to 10
console.log(
  "Calling multiplyByFactor function and passing (note: default factor set at 10)  43 = " +
    Math.multiplyByFactor(43)
);
Math.setFactor(2)
// using the Multiply by a factor which we just changed in line above
console.log(
  "Calling multiplyByFactor function and pasing (note: we set factor to 2)  43 = " +
    Math.multiplyByFactor(43)
);
// using constructor function
console.log( new Math.User("Dean","Fehr"))
