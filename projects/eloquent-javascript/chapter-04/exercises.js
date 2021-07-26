////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
// init internal array to contain all numbers from start up to AND INCLUDING end
  var arr = [];
//if start = end, OR step is less than 0 regardless of comparison of start and end
  if (start === end || step < 0){
     arr = arr;
  }
  //if step is greater than 0 AND end greater than start
  else if (start < end){
      for (var i = start; i <= end; i += step){
        arr.push(i);
        }
      }
      else if (start > end){
        for (var i = start; i >= end; i += step){
          arr.push(i);
      }
  }
  return arr;
};

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var total = 0;
  
  if(!array.length){
    return 0;
  }
  else {
    for (var i = 0; i < array.length; i++){
      total += array[i];
    }
  }
    return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var returnArray = [];
  
  if (!array.length){
    return [];
  }
  else {
    for (var i = array.length - 1; i >= 0; i--){
      returnArray.push(array[i]);
    }
  }
  
    return returnArray;
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  if(!array.length){
    return [];
  }
  else {
    //we can use .reverse in this one
    array.reverse();
  }
    
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //set to null so last rest instance is null
  let list = null;
  
  for (var i = array.length - 1; i >= 0; i--){
    //why do we start backwards? 
    //builds out last value with 3, then nests that object with 2, 1, etc. 
    list = { value: array[i], rest: list };
  }
  
  return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var arr = [];
       //start cond. = list.  //stop condition when node = null //update value to = the next node.rest
       //memorize this, because this is another stupid one. 
  for (var node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function prepend(val, arr) {
//   var array = [val].concat(arr);
//   var list = null;
  
//   for (var i = array.length - 1; i >= 0; i--){
//     list = { value: array[i], rest: list };
//   }
//   return list;
// } //this is dumb as hell that this doesnt pass. This works in Repl. The directions are bad.

function prepend(element, list){
  //all this does is take element and put it onto the first element
  var elementList = {
   	value: element,
   	//then takes in an existing list and tacks it onto the end.
   	//this just takes an existing list and puts it into another layer
   	rest: list
  };
  return elementList;
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
I: list and a value
O: return value + 1
C: 
E:
*/



function nth(list, val){
  for(var node = list; node; node = node.rest){
    if (val == 0){
      return node.value;
    }
    else if (node.rest == null){
      return undefined;
    }
    else {
      return nth(list.rest, val - 1);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
I: two values of any type 
O: returns true if passed in values are the same value, or complex data types with same properties
C: needs to check on 'null' as well, b/c that will return an object
E:
*/


function deepEqual(val1, val2) {
  if(val1 === val2) { 
    return true; 
  } else if(val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") {
     return false;
  } else if(typeof(val1) === 'object' && typeof(val2) === 'object') {
      if (!Object.keys(val1)[0] && !Object.keys(val2)[0]) {
        return true;
      }
    var propsInVal1 = 0, propsInVal2 = 0;
      for(var prop in val2) {
        propsInVal1 += 1;
      }
    for(prop in val2) {
      propsInVal2 += 1;
      }
    if(!(prop in val1) || !deepEqual(val1[prop], val2[prop])) {
      return false;
    }
    return propsInVal1 == propsInVal2;
  } 
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
