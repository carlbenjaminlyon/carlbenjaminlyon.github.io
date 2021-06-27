/*
 * OPERATORS: ((Delete this bit after the title later, need to follow << this formatting))
 *
 * 0. In order to assign values to variables, determine if a condition is true or false, and provide a functional logic to our code, we 
 *    need to use 'operators'. Operators are functions which can assign information to a variable, and can compare values 
 *    of data to one another to determine the next action to be taken. (more?)
 * 
 * 1. Assignment Operators: In a previous example, we learned that variables contain information, and can be called upon after they are initialized. While we may
 *    declare a variable for later use, we can also assign data to it upon its declaration. This action is called 'assignment'. We can also change data with an 
 *    assignment operator, which will work similarly to our arithmetic operators. 
 *
 * 2. Arithmetic Operators: These operators look much more like symbols used in mathematical operations. We would use these to add, subtract, 
 *    multiply, divide, and find remainders of number values. We can also use them in string data to concatenate, or add strings together. 
 *
 * 3. Comparison Operators: If we are to compare two data values, we would use comparison operators. These are operators which
 *    return one of two statuses: true or false. These 'true/false' returns are known as 'booleans'. 
 *
 * 4. Logical Operators: Much like comparison operators, logical operators provide boolean logic returns. However, logical operators
 *    can be used in conjunction with multiple comparison operations to determine if multiple conditions are true or false.
 *
 * 5. Urnary Operators: Urnary operators are similar to assignment operators in that they treat the data they are editing as
 *    number values. With these, we can add, subtract, multiply, and divide a value of the right operand, to its left operand.
 *
 * 6. Ternary Operators: Ternary operators are similar in function and use to our conditional operators. However, we are able
 *    to determine a true or false condition, and apply a boolean return in the form of a value or function. 
 *
 * 
 */


// 1. Assignment Operators //
   // Declaration and initilization (or assignment)
   var myName = 'Ben';

/*
 * As we have both declared and assigned data to our variable using the assignment '=' operator,
 * we can now call this variable later to show and use our contained data. 
 */

   console.log(myName); // prints --> 'Ben'

/*
 * This same assignment operator can assign any data to the right of it (find the word), to any variable to the left of it. 
 * For this next snippet, we will be creating a variable 'number', and assigning it a number value of '10'.
 * We will then print our new variable to the console. 
 */

   var number = 10;
   console.log(number); // prints --> 10

/*
 * If I want to change the value of our variable number, I can assign a new value to it using the assignment operator. 
 * This is simply called 're-assignment'. Now our variable is equal to '15'. 
 */

   number = 15;
   console.log(number); // prints --> 15

/*
 * The following assignment operators are our increment operators. They assign and modify values based on their mathmatical function, even if 
 * the value being modified is not a number. When we use these increment assignment operators, the value or variable to the left of the 
 * equation is then modified to contain the new value. Our first example shows we can add variable contents to another variable.
 */

   // String concatenation using the addition assignment operator
   var stringOne = "Hello ";
   var stringTwo = " World!";
   stringOne += stringTwo;
   console.log(stringOne);  // prints --> "Hello World!" 

   // Data manipulation using the addition assignment operator
   var numberOne = 1;
   var numberTwo = 2;
   numberOne += numberTwo;
   console.log(numberOne); // prints --> 3

/*
 * In this example, we can show that we can change a variable value by specifying a particular value. Now the variable value to the left
 * of the equals sign will have been re-assigned to a new value. 
 */

   // Data manipulation using the subtraction assignment operator
   var numberThree = 4;
   numberThree -= 1;
   console.log(numberThree); // prints --> 3

   // Data manipulation using the multiplication assignment operator
   var multiplyThree = 3;
   multiplyThree *= 2;
   console.log(multiplyThree); // prints --> 6

   // Data manipulation using the division assignment operator
   var divideTwo = 10;
   divideTwo /= 2;
   console.log(divideTwo); // prints --> 5


// 2. Arithmetic Operators //

/*
 * Arithmetic operators can be used in conjunction with assignment operators to assign new values from a mathematical equation.
 * For these, we will continue to use the same variable, but we will assign new data to it as we go. 
 */
   
   //Addition
   var sum = 5 + 5;
   console.log(sum); // prints --> 10
   
   //Subraction
   var sum = 10 - 5;
   console.log(sum); // prints --> 5

   //Division 
   var sum = 10 / 5;
   console.log(sum); // prints --> 2

   //Multiplication
   var sum = 10 * 5;
   console.log(sum); // prints --> 50

   //Remainder
   var sum = 10 % 5;
   console.log(sum); // prints --> 0

// 3. Comparison Operators //

/*
 * Comparison operators are used to determine if a condition resolution is true or false. Any comparison operator will resolve as a 'Boolean' return. 
 */

   // Greater-than comparison operator
   10 > 5;   // returns 'true'
   1 > 20;   // returns 'false'

   // Less-than comparison operator
   10 < 5;   // returns 'false'
   10 < 100; // returns 'true'

   // Greater-than-or-equal-to comparison operator
   20 >= 10; // returns 'true'
   20 >= 20; // returns 'true'
   1 >= 5;   // returns 'false'

   // Less-than-or-equal-to comparison operator
   1 <= 2;   // returns 'true'
   2 <= 2;   // returns 'true'
   3 <= 2;   // returns 'false'

/*
 * The next two examples are operators to determine if two data values are the same. However, we need to know that there are two types of comparisons
 * when determining if two values are indeed the same. Our first comparison, called 'strict' comparison, will determine if the two values in the 
 * comparison are both the same value, and the same KIND of value. For example, the number data type 1 is strictly equal to the number data type 1, and 
 * would return true. Though if we were to compare the number data type 1 to the string data type '1', we would return false, as the data types are different.   
 *
 * If we wanted to compare data without considering the data type, we can use a 'loose' comparison, meaning that only the data value would be considered. In this
 * comparison, the number data type 1 is loosely equal to the string data type '1', and would then return true. 
 *
 * ***Additional Note*** Javascript is a CASE-SENSITIVE LANGUAGE meaning that 'A' =/= 'a' in loose or strict comparisons. String value comparisons will need 
 * additional methods for accurate comparison. 
 */

   // Strict comparison
   (1 === 1);      // returns 'true'
   (1 === "1");    // returns 'false'
   ("A" === "A");  // returns 'true'
   ("A" === "a");  // returns 'false'

   // Loose comparison
   (1 == 1);       // returns 'true'
   (1 == "1");     // returns 'true'
   ("A" === "A");  // returns 'true'
   ("A" === "a");  // returns 'false'

/*
 * This final example in our comparison operators is a little different. If we want to get a boolean return of 'true', when a condition would be false by
 * other comparisons, we insert the exclamation symbol in front of the equals sign. This asks if two values are not the same, and says 'yes, these values are
 * not the same', or 'no, these values are the same'. This is known as an 'equality' operator. Equality operators also operate with the 'loose' and 'strict'
 * comparison rules for data types.
 */

   // Equality loose comparison
   (1 != 'a');     // returns 'true'
   (1 != 2);       // returns 'true'
   (1 != 1);       // returns 'false'
   (1 != '1');     // returns 'false'

   // Equality strict comparison
   (1 !== 'a');     // returns 'true'
   (1 !== 2);       // returns 'true'
   (1 !== 1);       // returns 'false'
   (1 !== '1');     // returns 'true'


// 4. Logical Comparison //

/*
 * Logical comparison is useful when trying to determine if multiple conditions are met at once. There are two immediate logical comparison 
 * methods: the AND (&&) operator, and the OR (||) operator. The AND operator confirms if multiple conditions are true. If one condition is not
 * true, then the boolean expression resolves to false, even if the other conditions are true. With our OR operator, if any of the conditions 
 * we are comparing return true, then the entire expression returns true. 
 *
 * *** Additional Note *** 
 *     In our previous exploration of comparison operators, we covered equality (!=, !==) operators. These can also function as logical operators.
 *     We can also daisy-chain these operators together to provide a boolean result for multiple comparisons. I'll have a note where the comparisons
 *     are occuring and to what they are resolving to under this last one.
 */

   // AND operator 
   (1 === 1 && 2 === 2);       // returns 'true'
   (1 === 2 && 2 === 2);       // returns 'false'
   ('a' === 'a' && 1 === 1);   // returns 'true'
   (1 != 2 && 2 >= 1);         // returns 'true'

   // OR operator
   (1 === 1 || 1 === 1);       // returns 'true'
   (1 === 1 || 5 === 10);      // returns 'true'
   ('A' == 'a' || 9 < 10);     // returns 'true'
   (5 < 1 || 'b' === 'c');     // returns 'false'

   // Use of both AND and OR operators
   (1 === 1 && 2 === '2' || 5 > 3 && 'a' === 'a');  // returns 'true'
   /* true      false       true        true    */
   (5 == '5' && '7' === 7 || 10 > 100 && 1 === 1); // returns 'false' 
   /* true         false       false      true

/*
 * In these two examples, our first comparison returned true, because one of our AND comparisons returned true. 
 * Our second comparison returned false because both AND comparisons returned false. 
 * A clearer way to visualize our above examples may be useful here:
 *                         
 *                         AND
 *                         (true AND true) = true
 *                         (true AND false) = false
 *                         (false AND false) = false
 *
 *                         OR
 *                         (true OR false) = true
 *                         (true OR true)  = true
 *                         (false OR false)= false
 *
 *                         AND-OR-AND
 *                         ((true AND false)) OR ((true AND true)) = true
 *                         ((true AND false)) OR ((false AND true)) = false
 */

// 5. Urnary Operators 



// still gotta figure out what an urnary operator is. 
// so far just seems like an operator that converts a value to a number, like 
        // +true = 1, +false = 0, +"3" = 3, +"not a number" = NaN   
        // seemingly, anything that is loose or strict a number or boolean value, can be returned as a number








// 6. Ternary Operators //

/*
 * Similar to our Conditional operators, ternary operators resolve to one of two results based on a condition. While boolean expressions
 * return a 'true' or 'false', ternary operators will resolve to one of two values. What this means is that if my condition returns
 * 'true', then the first value after the comparison is returned. If my condition returns false, then we will receive the second value.
 */

// Conditional (ternary) operator
   //Initialize variable age, with assigned value of 16
   var age = 16;
   //Initialize a variable to assign our returned data to
   var votingAge = (age < 18) ? "Too young to vote" : "Old enough to vote";
   // Print the assigned result of our variable votingAge
   console.log(votingAge);  // prints --> "Too young to vote"

/*
 * In one swift motion, we have created a variable to hold a number value, passed that variable through a comparison, assigned the result of
 * the comparison to a new variable, and printed our new variable out to the console, showing us the result of the comparison.  
 */



 /*
 Operators to cover:
 Assignment: =, +=, -=, *=, /=
 Arithmetic: +, -, /, %, *
 Comparison: >, <, >=, <=, ==, ===, !==, !=== (is the last one an operator? Dont forget '!=', which means true if a thing is not equal to something else)
 Logical: !, &&, ||
 Urnary: +, -, ++, --, !, typeof, delete, void
 Ternary (conditional operators): varName = (condition) ? value1:value2. 
                                        ex: votingAge = (age < 18) ? "Too young":"Old enough";
                                        :Conditional operator assigns a value to a variable based on a condition

 */