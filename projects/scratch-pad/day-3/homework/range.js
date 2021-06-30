// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 /*
 I: two integers
 O: array containing all integers between the two parameters, inclusive
        else if : first integer > second integer, return array in reverse order
 C: needs array to contain values, and must use .push to put values into array
 E: if start and end are the same value, return "Same value". Numbers entered must be whole numbers
 */
 
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //init array to contain integers
    var arr = [];
    //if start is less than end
    if (start < end){
        // i begins at start value, continues while start value is less than or equal to end, increment by 1
        for (var i = start; i <= end; i++){
            //push current i value to array
            arr.push(i);
        }
    }
    // else if start is greater than end
    else if (start > end) {
        // j begins at start value, continues while start value is greater or equal to end value, decrement by 1
        for (var j = start; j >= end; j--){
            //push current j value to array
            arr.push(j);
        }
    }
    else {
     console.log("issue");
   }
   //return array arr
  return arr;
 } 
 
console.log(range(1, 5));
    
    //else
        //start => end, which is a conditional that wouldnt need to be here
            //for loop to iterate from greater value to lesser value
            // will need to set starting condition to var j
                //push to array arr
    
    
    
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
