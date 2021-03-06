// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

/*
I: any number value
O: a string
C: if/if-else/else chain needed, in numerically ascending order. Use console.log to print string. Output strings are case sensitive
E: output is case sensitive
*/


function greeter(hour) {
    // YOUR CODE BELOW HERE //
    //if hour is greater than or equal to 0, AND hour is less than or equal to 11
    if (hour >= 0 && hour <= 11) {
        //print "Good Morning!"
        console.log("Good Morning!");
    } 
    else if 
        //if hour greater than or equal to 12, AND hour less than or equal to 16
        (hour >= 12 && hour <= 16) {
            // print "Good Afternoon!"
            console.log("Good Afternoon!");
    }
    else if 
        //if hour greater than or equal to 17, AND hour less than or equal to 21
        (hour >= 17 && hour <=21) {
            // print "Good Evening!"
            console.log("Good Evening!");
    }
    else {
        //else print "Good Night!"
        console.log("Good Night!");
    }
    
}


    
console.log(greeter(7)); //returns "Good Morning!"
console.log(greeter(22)); //returns "Good Night!"


    
    // YOUR CODE ABOVE HERE //



/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}