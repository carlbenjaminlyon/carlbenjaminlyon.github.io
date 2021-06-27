// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 //IOCE here so I can copy/paste it as I go
 /*
 I:
 O:
 C:
 E:
 */
 
 
  /*
 I: number and string values
 O: return internal function, for if base greater than given value, return true. If base lesser than given value, return false. (not inclusive) 
 C: Must use loose comparison boolean evaluation, as we need to be able to use string values as well as number values
 E: If something other than a number value or string number value is passed, return "Not a number"
 */     
 
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //init internal function with parameter for value
    return function(value) {
        //if to compare if number value is greater than base value
        if (base > value) {
            return false;
        }
        else if(base < value) {
            return true;
        }
        else {
            return "Not a number";
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //init internal function
    return function(value) {
        //literally the same thing as above, just switch the comparison operators around
        if (base < value) {
            return false;
        }
        else if(base > value) {
            return true;
        }
        else {
            return "Not a number";
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //init internal return function
    return function(char){
        //strict equality to check first index value of each string
        //force .toLowerCase for both inputs for strict comparison to work
        if (startsWith[0].toLowerCase() === char[0].toLowerCase()){
            return true;
        }
        else {
            return false;
        }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //init internal return function
    return function(char) {
        //check last character in string, forcing each to lowercase for strict comparison
        //use .charAt to specify the last index value in the string for the strict comparison, force both to lowercase
        if (endsWith.charAt(endsWith.length - 1.).toLowerCase() === (char.charAt(char.length - 1).toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //init internal function(x)
    //assign function(x) to var toModify
    var toModify = function(x) {
        //return modify(x)
        return modify(x);
    }
    //init internal var strings, assigning strings.map(toModify)
    var strings = strings.map(toModify);
        //return strings.
        return strings;
        //read more about .map
    
        

   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
