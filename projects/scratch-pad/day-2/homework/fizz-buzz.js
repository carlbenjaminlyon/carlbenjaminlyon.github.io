// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: none
O: console.log numbers 1 to 100 (inclusive)
C: Multiples of 3 return the string "Fizz", multiples of 5 return the string "Buzz". Multiples of both 3 and 5 return "FizzBuzz". 
   All numbers meeting contraint conditions return string instead of number. Use console.log
E: string values to print are case sensitive. 
   Values which are multiples of both 3 and 5 are to be checked first. Then check for 3, then 5. Final else prints i to console.
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // init for loop to iterate from 1 to 100 inclusive. Start: i = 1, stop: i <= 100, update i++
    for (var i = 1; i <= 100; i++) {
        //if current value is multiple of 3 AND 5
       if (i % 3 === 0 && i % 5 === 0) {
           //print "FizzBuzz" in place of number
           console.log("FizzBuzz");
       }
       else if 
            //if current value is multiple of 3
           (i % 3 === 0) {
              //print "Fizz" in place of number
             console.log("Fizz");
        }
        else if
            //if current value is multiple of 5
            (i % 5 === 0) {
                //print "Buzz" in place of number
                console.log("Buzz");
            }
        else {
            //if current value is not multiple of 3 or 5, and not multiple of 3 AND 5, print value to console
            console.log(i);
        }
       
        }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}