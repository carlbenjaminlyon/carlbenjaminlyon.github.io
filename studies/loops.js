/*
 * LOOPS:
 *
 * 0. WHAT IS A LOOP?
 *
 *	  To be able to process or create a lot of information efficiently, the best method to use is a loop. A loop is a function that will iterate through data, and within the 
 *    code block for that loop, an action may be performed for as many times as the loop is indicated to do so. To better clarify where you would want to use a loop, lets say
 *    that I wanted to print "Hello World" five times. While I could print "Hello World" to the console on five separate lines, a loop to perform the action of printing five times
 *    allows us to do the same thing, but in an efficient manner.
 *
 * 1. TYPES OF LOOPS AND WHERE TO USE THEM
 *	  
 *    // FOR LOOP
 *
 *	  All loops have the same basic properties -  a starting condition, an ending condition, and an interation by which the loop updates. To loop a command ten times in a for-loop,
 *    we would set a starting condition where the variable we're using for our starting condition is equal to where we want to start at, for this case, i = 0. We then want the loop 
 * 	  to stop when it cycles ten times, so our stopping condition would be i < 10. Then, to update our starting condition so our code block can run again, we have our iteration controller.
 *    This part of the loop updates the starting condition each time the code runs by an indicated amount. For our example, we'll have i++, or i + 1. Our loop will then look like this:
 *																				
 *																				for (var i = 0; i < 10; i++){
 *																					 // code to run here
 *																				};
 *	  
 *	  What we should know though, is the different types of loops. For strings, arrays, and simple actions like our example here, we would use a 'for-loop'. For objects, we can only use 
 *    the 'for-in' loop. For longer blocks of code, or for a section of code that needs to run while a particular condition is true, we need a 'while' loop.
 *    
 *    //FOR-IN LOOP
 *
 *    For objects, we can only use the 'for-in' loop, as it is designed to run through all of the enumberable properties of an object, and while running through it, perform some action.
 *    The handy thing about the for-in loop is that we do not need to write a specific starting/stopping/update condition, as the object will dictate when it begins and when it ends.
 *
 *                                                                            var obj = {
 *																				name: 'Ben',
 *																				isTall: true
 *                                                                             };
 *
 *                                                                             for (var key in obj){
 *																					//code to run here
 *                                                                             };
 *
 *
 *
 *
 *    //WHILE LOOP
 *
 *	  For the 'while' loop, it needs to have a definite stopping condition, as the while loop does not have built in functionality to state specifically when it will end. Rather, it 
 *    executes so long as a specific condition is true, which is useful for when you need one program to finish before the other one starts or stops.
 *
 *
 *																				counter = 0;
 *
 *																				while (counter < 10){
 *																					// code to run here
 *																					// optional counter for condition here
 *																				};
 *
 */


// 1. Using a for-loop to count numbers ascending //
	//Initialize for-loop to start at 0, stop at 10, and update by 1

	for (var i = 0; i < 10; i++){
		console.log(i);
	};
	/* expected output: 0 
						1 
						2 
						3 
						4 
						5 
						6 
						7 
						8 
						9
	*/

// 2. Using a for-loop to count numbers backwards
	//Initialize for-loop to start at 10, stop at 1

	for (var i = 10; i > 0; i--){
		console.log(i);
	};
	/* expected output: 10 
						9 
						8 
						7 
						6 
						5 
						4 
						3 
						2 
						1
	*/

	/*
	 * Remember that our conditional will allow our loops to count up to BUT NOT INCLUDING the value of our stopping condition. To print the stopping condition, we need to use
	 * the greater-than-or-equal-to, or the less-than-or-equal-to conditional operators ( <=, >= )
	 */

// 3. Looping over an array //
    // Initialize array with some values
    var array = [1, 2, 3, 4, 5, "Hello", "World", true];

    // Initialize for-loop to start at index 0, iterate for the length of the array by using the array method .length, and stop when we reach the end of the array.
    for (var i = 0; i < array.length; i++){
    	//prints the index element at the current index value
    	console.log(array[i]);
    };
    /* expected output: 1 
    					2 
    					3 
    					4 
    					5 
    					"Hello" "World" 
    					true
    */

    /*
     * A convienent use of for-loops for strings and arrays, is that we can dynamically call our stopping condition, based on the length of what we want to iterate through.
     * In this example, I used the array method '.length' to get the value for which I want the loop to stop at. 
     */

// 4. Looping backward over an array //
	// Reusing the array used in the previous example
	// Initialize for-loop to iterate backward over array
	for (var i = array.length - 1; i >= 0; i--){
		//prints the index element at the current index value
		console.log(array[i]);
	};
	/* expected output: true 
						"World" 
						"Hello" 
						5 
						4 
						3 
						2 
						1
	*/

	/*
	 * When looping backward over an array, it is important to set the starting condition equal to the value of the array length **minus one**. While the length of the array
	 * is eight index values, computers read 0 as 1, meaning we need to set our starting condition to 'array.length - 1'. Otherwise our loop will begin at an index
	 * value that does not exist. 
	 */

// 4. Using a for-in loop over an object.
    // Initialize object with some data

    var object = {
    	firstName: "Ben",
    	lastName: "Lyon",
    	isTall: true,
    	height: 6.5
    };

    // Initilize for-in loop 
    for (var key in object){
    	console.log(object[key]);
    };
    /* expected output: "Ben" 
    					"Lyon" 
    					true 
    					6.5
	*/




