/*
 * STRING MANIPULATION:
 *
 * 0. In our Data types section, we talked about string values. String values are alphanumeric or numerical characters 
 *    encapsulated in quotation marks. This data type is a simple data type that can is used to represent and
 *    manipulate a sequence of characters. They're mostly used for holding data that can be represented in text
 *    form, such as names, places, and return responses for prompts. Beyond simply holding character values, string 
 *    data types hold additional information, like index values, similarly to arrays. Today we'll be talking about
 *    strings and the tools we can use to access, add, remove, and modify information in them. 
 *
 * 1. STRING METHODS
 *    
 *    I mentioned that strings have methods. These methods are similar in their function to array methods, in that 
 *    we are able to get the length of the string, concatenate them, find individual indexes, cutting them up for 
 *    use elsewhere, or removing elements from the string. The most notable ones are:
 *
 *    .charAt() - Returns a character at an indicated index in the parentheses
 *    'string'[0] - Similar to .charAt, returns a character at the indicated index in the brackets
 *    .toUpperCase - Returns all characters in the string to uppercase
 *    .toLowerCase - Returns all characters in the string to lowercase
 *    .slice(0, 5) - Extracts and returns the section of the string from the indicated starting and stopping indexes 
 *    .concat() - Returns a concatenated version of the string. A variable representing a string or a string literal
 *                can be placed in the parentheses
 *    .split(" ") - Returns an array that is split by all occurences of the space
 *    .join(" ") - Returns a string from an array that is joined with a space. Any other character can be used to join
 *                 or split strings. Note that this is really only used for arrays.
 *
 * 2. STRING OPERATORS
 *
 *    Similarly to arrays, strings have their own use case for operators. You can use the plus '+' symbol to concatenate
 *    two strings, although simply doing "string1" + "string2" will return a string of "string1string2" without any 
 *    consideration for spacing. To solve this, you can simply add a string space in between the values and the concatenation
 *    operation to create a space, like so:
 *
 *                                    "Hello" + " " + "World!"
 *                                      //returns "Hello World!"
 *
 *    An easier way to do this is by string interpolation. The difference being with string interpolation is that you must 
 *    call upon a variable to act in the place of your string. So for example:
 *
 *                                    var greeting = "Hello";
 *                                    var subject = "World!";
 *
 *                                    var str = `${greeting}`, ${subject}`;
 *                                      //str is now equal to "Hello, World!";
 *
 *    String interpolation is useful for if you want to return a string using variables that might change. This interpolation
 *    can also be used to express values in the run time of the interpolated string as well.
 *
 */



 // 1. String Methods //

    // Declaration of our string for later use
    var string = "Hello World!";
    var otherString = "Programming is fun!";

    //.charAt() and accessing value by index
    return string.charAt(0);
        //returns 'H'

    //string[]
    return string[2];
        //returns 'e'

    //.toUpperCase()
    return string.toUpperCase();
        //returns "HELLO WORLD!"

    //.toLowerCase()
    return string.toLowerCase();
        //returns "hello world!"

    //.slice()
    return string.slice(0, 4);
        //returns "Hello"

    //.concat()
    return string.concat(otherString);
        //returns "Hello World!Programming is fun!"

    //.split()
    return string.split(" ");
        //returns an array containing ["Hello", "World!"]

    //.join()
    // Initialize an array for use in this method
    var joinString = ["My", "name", "is", "Ben"];

    return joinString.join(" ");
        // returns "My name is Ben" in string type


 // 2. String Operators //

    // Concatenation by addition
    return string + " " + otherString;
        //returns "Hello World!"

    // Concatenation by interpolation
    var greeting = "Hello";
    var subject = "World!";
 
    // var str = `${greeting}`, ${subject}`;
    //   str is now equal to "Hello, World!";

