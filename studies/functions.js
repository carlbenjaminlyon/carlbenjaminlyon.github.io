/*
 * FUNCTIONS:
 *
 * 0. WHAT IS A FUNCTION?
 *
 *	  In programming, we have the ability to make tools for ourselves that take care of processing data for us. These tools are called functions. 
 *    A function is simply a list of statements (an individual instruction), given in a particular order, that describes how to perform a 
 *	  particular task. For example, we could call a recipie for a cake a function for the cake. In order to properly bake a cake, you must follow
 *    a line by line order of statements to produce your result. These "recipies" are reusable blocks of code that can accept inputs, 
 *    process those inputs, and return a new data value.
 *
 *
 *
 * 1. PHASES OF FUNCTIONS
 *
 *	  In order to use our function, we must initialize it, optionally provide the ability for it to take in data, and then create code for it
 *    to perform the desired result. Once we've given it a function body, we must 'invoke' the function by calling it in some manner. 
 *	  Functions will not take any action until they're invoked, or 'called'. For our immediate example here, we will create a function  
 *    called 'print', which will take in data as its 'parameter', and then return it to the console.
 *
 *								function print(string){
 *									console.log(string);
 *								};
 *
 *    Now that we have defined our function, let's invoke it:
 *
 *
 *								print("Hello World!");
 *									//prints "Hello World!"
 *											
 *
 *    Having called this function (or invoked it), and having passed in a string value in its parameter, the function will now return
 *    "Hello World!" to the console. 
 *
 *
 * 2. FUNCTION PARAMETERS AND ARGUMENTS
 *
 *    In our previous example, we gave our function 'print' a parameter indicating a string value to be passed in. Now while parameters are
 *    optional for functions, the parenthesis are still required for the function to be correctly defined. As write our functions parameters,
 *    we will use those parameters we gave it in the body of our function. These effectively stand as variables that are within the local
 *    scope of the function. The values passed into those parameters, are our arguments. So in our previous example, we gave our function
 *    a parameter of 'string'. We placed the 'string' parameter in our function body, and when we invoked our function, we gave the 
 *    parameter an argument of "Hello World!" In short, a parameter is a variable for use within the function. The argument is the data
 *    we want the function to process in the place of that parameter. 
 *
 * 3. FUNCTION SYNTAX AND ASSIGNMENT
 *    
 *    So there are a few different kinds of functions: function declarations, and function expressions. Our above example is a 
 *    function declaration, wherein we wrote the word 'function', followed by a name for the function with an attached parameter.
 *    A function expression, is where we assign a function to a variable when we declare it. We previously talked about 
 *    expressions, where an expression is a set of literals, variables, operators, and expressions that evaluate to a single 
 *    value. We can create our function expression by simply assigning the function to a variable, like so:
 *
 *												// anonymous function
 *
 *												var myFunction = function(param1, param2){
 *													// code to execute here
 *												};
 *
 *												// named function expression
 *
 *												var myFunction = function namedFunction(param1, param2){
 *													// code to execute here
 *												};
 *
 *    When the function finishes its execution, the value returned by it will resolve to the variable 'myFunction'. One of the 
 *    benefits of creating a named function expression is that in case we encounter an error, the stack trace will contain
 *    the name of the function, making it easier to find the origin of the error. 
 *
 * 3. SPECIFYING FUNCTION INPUT AND OUTPUT
 *
 *    Like our first example, we were able to specify what sort of input we wanted in our function by defining our parameter
 *    as 'string'. While parameters are simply variables to be assigned arguments for use in the function, we should make sure
 *    our parameters are named for the type of data that they will be taking in. Additionally, we should also be able to account
 *    for the type of data that our function will output. So for our above example, we indicated we wanted a string value as 
 *    our input, and a string value for our output. The type of output we will get will be indicated by the type of methods
 *    used in our function body, and will be given back to us in our return statement at the end of our function.
 *
 * 4. FUNCTION SCOPE 
 *
 *    Two things that make functions invaluable are their local scoped variables, and their hoisted status. To hoist data is to 
 *    allow it to be accessed from anywhere in the code, instead of only after it is declared. Functions are hoisted to the top
 *	  of the stack (the project that it is written in), and can be invoked before it is written - meaning, that if I called
 *    my 'print' function in the lines before where the actual function was located, then I could still run the 'print' function. 
 *    The important thing to note though, is that only functions declared as 'function funcName()' can be global, as function expressions
 *    will not be global, as those are not hoisted in the same manner, if at all. 
 *    The variables within that function though, are local only to that function, and cannot be accessed from outside of it. This
 *    is a necessary feature of functions, so if we need to reuse a variable name or a parameter name in another
 *    function or in another variable, such as 'string', then two functions sharing the same parameter names will not 
 *    interfere with each other. 
 *
 * 5. FUNCTION CLOSURES
 *    Functions are code blocks that take in values, and return values. In terms of how that relates to functions, we can create 
 *    child functions in our functions - meaning an internal function that processes data passed into it by the parent function. 
 *    To create closure in a function, the child function must share a variable with the parent function, meaning the child 
 *    function is able to access and process data from the parent function. An example of this is as follows
 *
 *                                             function outerFunction(){
 *													var outerVariable = 10;
 *
 *														function innerFunction(){
 *															alert(outerVariable);
 *														}
 *														return innerFunction;
 *												};
 *
 *    In this example, the innerFunction references the parent functions variable 'outerVariable'. This creates one example of closure. 													
 *    What this means is that child functions with closure are able to see and modify variables in both the parent, AND the global
 *    scope. However, nothing in the global scope can affect the variables inside either the parent or child function. 
 *
 */



 // 1.  Declaring a named function with parameters
 		// Function 'add' to take in two number values, and return the sum of those variables.

 		function add(num1, num2){
 			//declare and initialize internal variable
 			var sum = num1 + num2;
 			//return the passed in arguments
 			return sum;
 		};

 		// Invoking the function with arguments
 		add(4, 2);
 			// returns 6

 // 2.  Named Function expression

 		var myFunction = function getArea(length, width){
 			var area = length * width;
 			return area;
 		}; 

 // 3.  Anonymous function expression

 		var anonFunction = function(stringOne, stringTwo){
 			//concatenate two strings
 			var newString = stringOne + stringTwo;
 			return newString;
 		};

 // 4.  Function Closure

 		function outerFunc() {
 			//Outer scope variable
 			var outerVar = "I am outside!";
 		
 			function innerFunc(){
 				//Inner Scope
 				console.log(outerVar); // prints "I am outside!"
 			}
 			innerFunc(); // invocation of the inner function to return value to the outer function
		}
		// Invoking the parent function
		outerFunc();