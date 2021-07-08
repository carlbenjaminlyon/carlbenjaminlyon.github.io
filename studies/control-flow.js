/*
 * CONTROL-FLOW:
 *
 * 0. To properly execute blocks of code in a manner where all conditions may be run appropriately, we must insitute a form of order of operations. 
 *	  This methodology is called 'control-flow', which is the order in which individual statements, instructions or function calls of a program
 *    are executed or evaluated. These statements come in the form of if/if-else/else. If/else-if/else is useful for loops, as they can be run 
 *	  each time for the loop.
 *
 * 1. IF
 *    An 'if' statement is the beginning of a conditional statement, the result of which will resolve to true or false. If the 'if' condition resolves
 *    'true', then the action within the code block is performed. If the 'if' condition resolves 'false', then the code block is skipped and the program
 *    either ends, or resolves in a different way.
 *
 * 2. ELSE-IF
 *    An 'else-if' statement will always come after an 'if' statement. It acts if the first 'if' statement in the 'if/else-if' chain resolves 'false'. 
 *    If multiple conditions need to be checked, an 'if/else-if/else-if...' chain would be used. 
 *
 * 3. ELSE
 *    If an 'if' statement still needs to resolve to another statement, but does not need to check against other conditions, we would only need an 'else'
 *    after the 'if' statement. The 'else' statement does not use a conditional statement, as it is intended to run when the prior conditions return 'false'.
 *
 * 4. SWITCH
 *    A switch statement works similarly to an 'if' statement, but can be chained together to create multiple conditions for which to check against. This works 
 *    in a similar fashion to an if/else-if chain, but instead of looping through an entire string or array to find a true condition, it will check only once 
 *    against a series of standalone conditions and stop when it meets the match. 
 */


// 1. Using a if statement to check if a condition is true or false
 	// Initialize 'if' to see if 5 is less than 10
 	if (5 < 10){
 		// print "Five is less than ten."
 		console.log("Five is less than ten.");
 	};

// 2. Using else-if to check multiple conditions.
   //Initialize two number variables for comparison
   var x = 10;
   var y = 100;

   //Initialize if/else-if 
   if (x > y){
   	// print "X is greater than Y"
   	console.log("X is greater than Y.");
   }
   //else-if to check other condition
   else if (x < y){
      //prints "X is less than Y"
   	    console.log("X is less than Y");
   };

   /*
    * While we can see that x is less than y, we want to set up our chain so that we can run comparisons against all possible outcomes, so that for when
    * x is greater than y, we can have a condition to return a result for that.
    */

// 3. Using Else to return statement if nothing else is needed.
    //Initialize if statement, reusing x and y variables above
    //Initialize if/else
   	if (x > y){
   		// print "X is greater than Y"
   		console.log("X is greater than Y.");
   }
  	//else to return if no further comparison is needed. 
   	else {
   		// print "X is less than Y"
   		console.log("X is less than Y");
   };

   /*
    * The problem with using an else in a statement like this is that it assumes that x will always be less than y. While this does return an objectively
    * true statement, it does not account for anything else, which is why it wouldn't be best used in a scenario like this. Rather, it would be best used
    * as a final catch-all in an 'if/else-if' chain as a final catch all for if all conditions prior are false. 
    */

// 4. Switch statements 
	//Initialize variable x, assign value of 1
	var x = 1
	//Initialize switch statement to return 'Off' when 0, and 'On' when 1
	switch(x) {
		// if x = 0
		case 0:
			//print "Off"
			text = "Off";
			//break code when condition is met
			break;
		// if x = 1
		case 1:
			//print "On"
			text = "On";
			//break code when condition is met
			break;
		// if x does not equal 0 OR 1
		default:
			//print default statement
			text = "Flip the switch!";
	};

   /*
    * If var x equals anything other than what we write for it, the default statement will be returned. This acts as our previously mentioned else "catch-all"
    * to return information even if nothing in the conditional chain is met. By this way, all comparison expressions are run, and this will always resolve at some 
    * point. This and else statements are especially useful in the debugging phase, for when you know a condition should be met, but isn't.
    */