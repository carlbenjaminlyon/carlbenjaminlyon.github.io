/*
 * DATATYPES 
 *
 * 0. Data types are the built-in data structures in a programming language. These are types of data that
 *    contain properties specific to them, and can be manipulated in various ways. The data types that are
 *    available to us are:
 *
 *    Numbers - as it sounds, a number data type is an integer value, such as 10, or 42
 *
 *    String - String data types are alphanumeric or numerical values stored in a way that can be used
 *             as part of a sentence.
 *
 *    Boolean - A boolean is a data type that is a result of a boolean expression. These only come in 
 *              two flavors - true, or false. 
 *
 *    Array - Arrays are lists of information that are stored at index values. Similar to strings, but 
 *			  more useful in accessing and modifying information from them
 *
 *    Object - Similar to arrays, objects are complex data types that contain properties, stored in
 *             key: value pairs. This is especially useful for when you need to have a basic item with
 *             basic key properties, with their values giving specific indication as to what that property
 *             value is.
 *
 *    Function - In a previous example, I described functions as a recipie. Functions are a set of instructions
 *               for which a value can be taken in, modified, and returned as a new value. 
 *
 *    undefined - This is more of a status and less of a data type. Undefined is returned when an expected value
 *                is either not initialized, or is unreachable. An example of this would be for a variable to 
 *                be printed to console before it is assigned data. 
 *
 *    null -      Null refers to a data type without value in it. The data type exists, but it has not been populated.
 *                Think of this as a paper towel holder with an empty roll on it. 
 *
 *    NaN - Stands for 'Not a Number'. This occurs when an expected numeric data type is called, but the called 
 *          data type is not a number. 
 *
 *    Infinity - Infinity is a global data type that is greater than any other number. This number is presented the 
 *               to represent a numerical value that exceeds the upper limit of the floating point numbers.
 *
 *    Negative Infinity - This is the same as inifinity, but in the opposite direction. 
 *
 * 1. Primitive/Simple Data Types vs Complex Data Values
 *
 *    Between the above mentioned data types, the primary ones we are to be concerned with are: Numbers, Strings, 
 *    Booleans, Arrays, and Objects. These are the primary containers we will be using. However, while these
 *    are all data types that contain information, numbers, strings, and booleans are considered 'simple' data
 *    types. The types are considered 'immutable', meaning their contents cannot be changed without direct
 *    accessing and reassigning of the data. The other data types are considered mutable, and those data types
 *    are arrays and objects. While the data type of the array or object cannot be changed, the contents of them
 *    are easily modifiable, without reassigning the entirety of the array/object. 
 *
 *
 * 2. Copy by Reference vs Copy by Value
 *
 *    When you need to use data from one variable in another, there are two methods by which programming languages
 *    do this, and the method that is chosen is by which data type is being copied. When a variable copies by value,
 *    it means that when a simple data type is assigned to another variable, that new variable is given a new copy of
 *    that data. What that means is, if a simple data type variable is intialized, then another variable copies it, 
 *    when that new variable is called, it will contain it's own copy of the information from the original. This 
 *    applies to simple data types only. 
 *    
 *    Copy by reference works a little differently, and only for complex data types. Rather than create a whole new
 *    copy of the information in the referenced variable, copy by reference will refer back to that original variable
 *    when the new variable is called upon. Meaning, that if the data in the original complex variable changes, the 
 *    data in the referencing variable will change
 *
 */


// 1. Simple Data Types //

    //Type: Number
    var num = 42;

    //Type: String
    var string = "Hello World!";

    //Type: Boolean
    var bool = true;

// 2. Complex Data Types //

    //Type: Array
    var array = [42, 22, 12, 2, "a", "b", "c", "d", true];

    //Type: Object
    var object = {
        firstName: "Ben",
        lastName: "Lyon",
        isTall: true    
    };
