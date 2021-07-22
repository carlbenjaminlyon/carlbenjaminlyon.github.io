/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword var, let, or const followed by a name (id or alias) for our
 *    variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3. Each of our variable keywords are declared and assigned the same way. However, the keyword
 *    used will affect where that variable can be used by other processes.  You may think of this
 *    as "level of importance", but the term for this is called 'hoisting'. Hoisted variables can 
 *    be declared at any point in the program body, and can be accessed prior to them being declared.      
 *    However, depending on the keyword used, the data inside the variable may or may not be accessible. 
 *    
 *    var - The keyword 'var' is a hoisted variable, meaning it can be accessed anywhere, except for when
 *          it is declared within a function body. Outside of the function body, you can call this variable
 *          prior to its declaration and assignment, but it will return 'undefined'.
 */
                        //Accessing var greeting before it is initialized and declared
                        console.log(greeting); // --> 'undefined'
                        //Initialization and declaration of var greeting
                        var greeting = "Hello!";
                        //Accessing var greeting after it is intialized and declared
                        console.log(greeting); // --> 'Hello!'
 
/*
 *    let - The keyword 'let' is also a hoisted keyword, but unlike 'var', 'let' will throw a   
 *          reference error when you try to use it before its declaration. However, 'let' is 
 *          very useful for data that you do not want to have changed. When 'let' is declared and 
 *          initialized, it will remain the same variable name and contained data within its scope.
 *          This means, that if we were to initialize a 'let' variable in the global scope, a 'let'
 *          variable with the same name inside of a function would be an entirely different variable.
 *          By that same logic however, 'let' cannot be reassigned once it has been declared in the same
 *          scope. Attempting to do so will return a syntax error: Identifier has already been declared. 
 *          Let is useful if you wish to maintain a data type, as the values within the data type can be 
 *          modified
 */
                        //Accessing let before it is initialized and declared
                        console.log(value); // --> ReferenceError: Cannot access 'value' before initialization
                        //Initialization and declaration of let value
                        let value = 25;
                        //Accessing let after it is initialized and declared
                        console.log(value); // --> 25
                        //Re-assigning let value
                        let value = [1, 2]; // --> SyntaxError: Identifier 'value' has already been declared
                        
                        //new let variable containing an array
                        let thisArray = [1, 2, 3, 4, 5]
                        //Adding new data to thisArray
                        array.concat([6, 7, 8, 9, 10]); // --> returns a single array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        
/*
 *    const - Much like the keyword 'let', 'const' is a read only variable keyword, which cannot be reassigned
 *            or accessed before it is initialized. It also cannot be accessed outside of the scope from where it exists, 
 *            meaning, if a function attempts to reassign a 'const' that was initialized outside of the function body, the invokation
 *            will return 'undefined'. If the reassignment occurs within the same scope, a TypeError will occur. 
 *            Additionally, just like 'let', attempting to reuse the same variable name with a different keyword 
 *            will return a syntax error, as the identifier has already been declared. 
 */
                        //Initialization of const array
                        const array = [1, 2, 3];
                        //Re-assigning the const array
                        array = "This cannot be reassigned." // --> TypeError: Assignment to a constant variable
 

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


