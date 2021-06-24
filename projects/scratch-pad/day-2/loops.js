// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //begin at index 0 of array, stop when i <= array length - 1, update by 1
  for (var i = 0; i <= array.length -1; i++) {
    //print array index values to console, iterating over each index
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //begin at array.length -1 index (so the last one), stop when i >= 0, update by -1
  for (var i = array.length - 1; i >= 0; i--) {
    //print array index values in reverse
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //given object, return key names in string form. Use for-in loop
  //init array literal to contain key values
  var arr = [];
  //init array literal to contain key names
  var arr2 = [];
  //init for-in, with init var key
  for (var key in object) {
    //array method push object key values to arr
    arr.push(object[key]);
    //array method push object key names to arr2
    arr2.push(key);
    //prints the referenced key name, not the key value, from the object.
  
  }
    //not sure why arr2 returns both arr and arr2, but it satisfies the test
    return arr2;
}

  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */


function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for-in to iterate through passed in object
  for (var key in object) {
    //console log var key
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

//console.log(printObjectKeys(myObject));
/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //\
  //init var arr as array literal
  var arr = [];
  //for-in to iterate through passed in object
  for (var key in object) {
    //array push method to push each key:value pair into the array
    arr.push(object[key]);
    }
    //return array
    return arr;
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //init for-in
  for (var key in object) {
    //print current object key value to console
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //prints object length to console
  for (var key in object) {
    //instruction set to return, not console.log
  return Object.keys(object).length;
  }
}
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //init array to contain values
  var arr = [];
  //init for-in loop
  for (var key in object) {
    //for each loop, push value into array
    arr.push(object[key]);
  }
    //init for loop to iterate backward through the array
    for (var i = arr.length - 1; i >= 0; i--) {
      //console.log value of array
     console.log(arr[i]);
     
  }
}
/*
alternatively
var arr = Object.values(object).reverse();
  for (var val of arr) {
    console.log(val);
  }

*/  
  // YOUR CODE ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
