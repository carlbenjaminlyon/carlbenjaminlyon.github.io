// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //.length string method to return string length. -1 not needed
   return string.length;

    // YOUR CODE ABOVE HERE //
}
console.log(length("string"));

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //.toLowerCase string method to return entire string in lowercase format
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //.toUpperCase string method to return entire string in uppercase format
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 
 //edge case would be the output needs to be all lowercase
 
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //init global flagged var search to check for all instances of a " " within the string
    var search = /\s/g;
    //init local var replace with string data to be used to replace all instances of the found " "
    var replace = "-";
    
    return string.replace(search, replace).toLowerCase();


    // YOUR CODE ABOVE HERE //
}

console.log(toDashCase("Hello World"));
/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //strict comparison of first index string value to entered char value
    //.toLowerCase method for both parameter inputs b/c '===' is case sensitive
    // intentionally using bracket notation here
    if (string[0].toLowerCase() === char.toLowerCase()){
        //if string[0] === char, return true
        return true;
    }
    else {
        //else return false
        return false;
    }
    

    // YOUR CODE ABOVE HERE //
}
console.log(beginsWith("Hello", "h"));

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // strict comparison of final character in string to given char. 
    //Still seems to be case sensitive 
    //intentionally using dot notation here
    if (string.charAt(string.length - 1).toLowerCase() === char.toLowerCase()){
        //return true if final index is 'A' compared to 'a'
        return true;
    }
    else {
        //return false if 'A' is anything other than the letter 'A', regardless of capitalization
        return false;
    }


    // YOUR CODE ABOVE HERE //
}
console.log(endsWith("Hello World", "D")); //returns true
console.log(endsWith("Hello World", "g")); //returns false


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return function to concatenate two given parameters using '+' function
    return stringOne + stringTwo;
        

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *     
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //.join method on array args to return as string, joined without any characters
    return args.join("");


    // YOUR CODE ABOVE HERE //
}
console.log(join("string", "otherString")); //returns "stringotherString"

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if comparison to return longer of two strings
   // if stringOne.length > stringTwo.length, return stringOne
    if ((stringOne.length) > (stringTwo.length)) {
        return stringOne;
    }
    // if stringOne is NOT greater in length than stringTwo, return stringTwo
    else {
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   // if-else chain
   // if stringOne is alphabetically higher than stringTwo
    if (stringOne < stringTwo) {
        //return 1
        return 1;
    }  
    // if strings are alphabetically equal, return 0
    else if (stringOne === stringTwo) {
        return 0;
    }
    else {
        return -1;
    }
    


    // YOUR CODE ABOVE HERE //
}

console.log(sortAscending("abc", "acb")); //returns 1
console.log(sortAscending("acb", "abc")); //returns -1
console.log(sortAscending("abc", "abc")); //returns 0


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //literally the same thing as above, but if stringTwo is higher than stringOne, return 1
      if (stringOne > stringTwo) {
        //return 1
        return 1;
    }
    // if strings are alphabetically equal, return 0
    else if (stringOne === stringTwo) {
        return 0;
    }
    else {
        return -1;
    }
    



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
