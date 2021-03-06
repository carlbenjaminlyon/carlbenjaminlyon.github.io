////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Using Math.min, create function that returns smallest argument. Function to take two arguments and returns their minimum.

/*
I: any two numbers
O: returns smaller of the two numbers. 
C: If numbers are equal to each other, return 0, needs Math.min 
E: if numbers entered are negative, returns the more negative. (-2, -1), returns -2
*/

function min(num1, num2) {
  if (num1 === num2){
    return 0;
  }
  else {
    return Math.min(num1, num2)
  }
};

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: any number value
O: boolean expression
C: needs to call in on itself (recursion)
E: 
*/

function isEven(val) {
  if (val === 0){
    return true;
  }
  else if (val % 2 === 1 || val % 2 === -1){
    return false;
  }
  else {
    return isEven(val - 2);
  }
};

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// var myString = "this is my string";

function countChars(str, char) {
  //init internal counter
  var counter = 0;
  //for loop for string length
  for (var i = 0; i < str.length; i++){
    //if current string index === char
    if (str[i] === char){
      //update counter
      counter++;
    }
  }
  //return counter
  return counter;
};

// console.log(countChars(myString));

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//takes in a string as parameter
function countBs(str) {
  //init internal counter to return
  var counter = 0;
  //for loop for string length
  for (var i = 0; i < str.length; i++){
    //Only checking if string contains instances of 'B', specifically
    if (str[i] === 'B'){
      counter++;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
