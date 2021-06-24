// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: any string data
O: the input string printed in reverse
C:
E:
*/


function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //init var tempString to contain reversed string
    var tempString = ""
        // for loop to begin at last index of input, iterate backwards through string

      for (var i = input.length - 1; i >= 0; i--) {
      // init var tempString to contain string data 
        // assign current index value to var tempString, use addition assignment to add to the string, by concatenation 
        tempString += input[i];
        }
          //return tempString
          return tempString;
    }
   
    //console log invocation of reverseString with any string 
    console.log(reverseString("This is a string."));
    
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}