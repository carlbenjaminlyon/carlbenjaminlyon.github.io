// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//add functions to this object, will be an object of functions*****
var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//adding the identity function to var _
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string" !
*          - "array" !
*          - "object" !
*          - "undefined" !
*          - "number" !
*          - "boolean" !
*          - "null" !
*          - "function" !
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //check null
  if (value === null){
      return "null";
  }  
  //check string
  else if (typeof value === "string"){
      return "string";
  }
  //check number
  else if (typeof value === "number"){
      return "number";
  }
  //check array, must go before object
  else if (Array.isArray(value)){
      return "array";
  }
  //check object, must go after array
  else if (typeof value === "object"){
      return "object";
  }
  //undefined check
  else if (typeof value === "undefined"){
      return "undefined";
  }
  //boolean check
  else if (typeof value === "boolean"){
      return "boolean";
  }
  //function check
  else if (typeof value === "function"){
      return "function";
  }
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num){
    //if arr is not an array, return []
  if (!Array.isArray(arr)){
      return [];
  }
  //else if array is array
  //check if num is given OR type of num is not a number
  else if (num === null || typeof num !== "number"){
      //return index 0 of arr
      return arr[0];
  }
  else {
      //for loop array length
      for (var i = 0; i < arr.length; i++){
          //if num is a negative number && num is less than the length of the array
          //why is the num < arr.length returning true 
          if (i > num && num < arr.length){
              return [];
          }
          else {
            return arr.slice(arr[0], num);
       }
  }
  }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(arr, num){
//check for if arr parameter is array
  if (!Array.isArray(arr)){
      return [];
  }
  //else if array is array
  //check if num is given OR type of num is not a number
  else if (num === null || typeof num !== "number"){
      //return last index in arr
      return arr[arr.length - 1];
  }
  else {
      //for loop array length
      for (var i = 0; i < arr.length; i++){
          //if num is a negative number && num is less than the length of the array
          if (i > num){
              return [];
          }
          else if (num > arr.length){
              return arr;
          }
        //   else if (num < arr.length) {
            // return arr.slice(arr[num], arr.length - 1);
        // }
        }
        // if only one value in the .slice(x), then will cont
        // from that index element to end of array
        // if .slice(x, y), will continue from x to y
        // dont need the y here b/c we want to start at an element and
        // just get to end of array
        return arr.slice(arr.length - num);
        
        // return arr.slice(arr[i], arr.length);
    }
};










/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val){
    //init for loop
    for (var i = 0; i < arr.length; i++){
        //only need to set conditional in the loop to return i when === val. 
        //Does not need else, otherwise false positive will occur.
        if (arr[i] === val){
            return i;
        }
    }
    // catch all for when loop fails to return anything.
    return -1;
}
//currently this does not account for multiple index values


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, val){
    // if (val !== null){
        // for (var i = 0; i < arr.length; i++){
            //ternary operator
            //if arr contains val, return true, else false.
            // return (arr.length > 0 ? true : false);
            
            return (arr.length < 0) ? false
                    : (arr.includes(val)) ? true
                    : (arr === val) ? true : false;

};
                 
    
    //return false catch all, mostly for if the value is null
    // return false;

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //check if collection is array
    if (Array.isArray(collection)) {
        // loop over collection array
        for (var i = 0; i < collection.length; i++){
            // call function, passing in index, element, and collection
            func(collection[i], i, collection);
        }
    } else {
        //loop for-in for if collection is an object
        for (var key in collection){
            //call func on collection[i], the key, and the collection
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// var inputData = ["a",1,1,"a","c",false,"b",5,"c",null, false, null];

_.unique = function(arr){
    //init new internal array to return 
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        /*_.indexOf checking for if a value exists
        when value exists, in _.indexOf, it returns i. 
        only when _.indexOf fails and returns -1
        we will push a value. indexOf will rerun now that 
        newArr contains a value, and now has something to check against
        */
        if(_.indexOf(newArr, arr[i]) === -1){
            newArr.push(arr[i]);
            }
        }
    return newArr;
};
// console.log(_.unique(inputData));

//check the tutoring for this one, as this will linearly scale in time required to run


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(arr, func){
    //init array literal
    var newArray = [];
    for (var i = 0; i <arr.length; i++){
        if (func(arr[i], i, arr)){
            newArray.push(arr[i]);
        }
    }
    return newArray;
};




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/*
I: an array and a function
O: 
C:
E:
*/




_.reject = function(arr, func){
    //internal func, taking in array element, index, and array
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        //note our inverse of this would require the ! operator
        if(!func(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr;
};





/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func){
    //init two arrays, one for true one for false
    var trueArr = [];
    var falseArr = [];
    
    for (var i = 0; i < arr.length; i++){
        //just like .filter
        if (func(arr[i], i, arr)){
            trueArr.push(arr[i]);
        }
        //just like .reject
        else if (!func(arr[i], i, arr)){
            falseArr.push(arr[i]);
        }
    }
    //return the two arrays as a nested array
    return [trueArr, falseArr];
}





/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(col, func){
    //init 
    var arr = [];
    // if/else-if to determine if col is array or is object
    if (Array.isArray(col)){
        for (var i = 0; i < col.length; i++){
            //just like .filter
            arr.push(func(col[i], i, col))
        }
    }
    else if (typeof col === "object"){
        for (var key in col){
            //just like filter
            //the third parameter here, 'col', will indicate the length bc of what the test function is doing
            // - which is getting the length of the object by the number of properties
            arr.push(func(col[key], key, col))
        
        }
    }
    return arr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

 

_.pluck = function(array, property){
    // var arr = [];
    
    //use .map function. Not sure why braces matter like this here
    //names for the .map function matter here, element and property are their own words here for this method
    //element = current element being processed in array
    //alt
    return _.map(array, function(e, i, a){
        return e[property];
    });
    
    // arr.map(function(array, property){
        
    // });
    // return [];
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/









/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //check if there is a seed
    //needs to be specifically === undefined
    //!operator will not work here
    if(seed === undefined){
        //if no seed, reassign seed to first element of array
        seed = array[0];
        //loop through array to get access to each element. If seed is undefined
        //seed needs to still be equal to array[0], so start loop at i = 1
        // for (var i = 1; i < array.length; i++){
        //     //reassigning seed for the next iteration
        //     seed = func(seed, array[i], i);
        // }
        //callback function for each. Takes in value, index, and array. Array optional
        //since .each is looping for me, I dont need a loop for this.
        _.each(array, function(value, index){
            //to make sure we start at index 1, we need to set it so it wont include index 0
            if(index !== 0){
                seed = func(seed, value, index);
            }
        })
        return seed;
        //else if seed exists
    } else {
        // this loop needs to start at 0, because seed was given
        // for (var i = 0; i < array.length; i++){
        //     seed = func(seed, array[i], i);
        // }
        //reminder to re-read on parameter statements during callbacks
        _.each(array, function(value, index){
                seed = func(seed, value, index);
            })
        }
        return seed;
    
}

//works as a loop



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
