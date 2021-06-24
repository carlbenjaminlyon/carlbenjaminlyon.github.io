// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 /*
 I:
 O:
 C:
 E:
 */
 
 
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //using Array.isArray() to confirm or deny if passed in parameter is an array 
    if (Array.isArray(value)) {
        return true;
    }
    else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 /*
 I: any data type (boolean, array, null, number, object, string, date)
 O: return true only if value passed is an object
 C: strict comparison to string data returned by number, string, boolean, object
 E: 
 */
 
 // could probably use || in here to shorten it
 
 
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if Array.isArray([]), return false
    if (Array.isArray(value)) {
        return false;
    }
    //else-if passed in parameter contains no data, aka, null, return false
    else if (value === null) {
        return false;
    }
    //else if passed in value is a date, (format?), return false
    else if (value instanceof Date) {
        return false;
    }
    else if (typeof value === "number") {
        return false;
    }
    else if (typeof value === "string") {
        return false;
    }
    else if (typeof value === "boolean") {
        return false;
    }
    // if typeof returns "object", return true
    else if (typeof value === "object") {
        return true;
    }
    else {
        return "Error";
    }
    
}

    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 /*
 I: any value
 O: return true only if value passed is an Array or an Object, return false for everything else
 C: Needs to check against possible values that may return as an Object (array literal, null, date)
 E: final else if check before else break needs to be where the comparison resolves true
 */
 
 
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if-elseif chain to return false for array literal, null, date, numbers, strings, booleans
    if (value === null){
        return false;
    }
    else if (value instanceof Date){
        return false;
    }
    else if (typeof value === "number"){
        return false;
    }
    else if (typeof value === "string"){
        return false;
    }
     else if (typeof value === "boolean") {
        return false;
    }
    // else-if value is an actual object OR value is an actual array
    else if (typeof value === "object" || Array.isArray(value)){
        return true;
    }
    else {
        return "Error";
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 /*
 I: any data type
 O: return type of data in string format
 C: n/a
 E: n/a
 */
 
 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
     if (Array.isArray(value)) {
        return "array";
    }
    else if (value === null) {
        return "null";
    }
    else if (value instanceof Date) {
        return "date";
    }
    else if (typeof value === "number") {
        return "number";
    }
    else if (typeof value === "string") {
        return "string";
    }
    else if (typeof value === "boolean") {
        return "boolean";
    }
    else if (typeof value === "object") {
        return "object";
    } //same as description for function below
    else if (typeof value === "undefined"){
        return "undefined";
    } //typeof for functions returns as a string "function", so this is an easy one
    else if (typeof value === "function"){
        return "function";
    }
    else {
        return "Error";
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
