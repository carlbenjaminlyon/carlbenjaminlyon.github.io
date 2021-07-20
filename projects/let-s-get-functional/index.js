// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); //put in ('lodown-carlbenjaminlyon')

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional   <<< copy paste this into the terminal
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//higher order are functions that takes function as a parameter


var maleCount = function(array) {
    return _.filter(array, function(e, i, a){
        return e.gender === "male";
    }).length;
}; 

// var maleCount = function(array) {       //this internal bit is the parameter for the passed in function
//     let numOfMales =  _.filter(array, function(element, index, array){ //this bracket here is the beginning of the definition for what
//         return element.gender === "male";                              //we want func to do
//     })
//     return numOfMales.length;
// }; 


var femaleCount = function(array) {
    return _.reduce(array, function(array, element, index){
        return (element.gender === "female") ? array += 1 : array;
    }, 0);
};

var oldestCustomer = function(array){
    var old = array[0];
    _.each(array, function(e, i, a){
        old = (e.age > old.age) ? e : old;
    });
    return old.name;
};

//.filter, map, reduce have returns
var youngestCustomer = function(array){
    //external youngObj variable
    var youngObj;                               //seed           //currentObject //current 
    var youngCustomer = _.reduce(array, function(previousReturn, currentElement, currentIndex) {
        if (previousReturn > currentElement.age){
            previousReturn = currentElement.age;
            youngObj = currentElement;
        }
        //this return has to give back the youngest age as the next comparison point
        //when we check the next object
        return previousReturn;
    }, 10000); //this entire block is the parameter for function parameter in reduce parameters.
        //this final parameter is the seed, assume starting seed higher than possible age
    //returning youngObj since its now an object
    return youngObj.name;
};

var averageBalance = function(array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
                //'Number' converts to number data type
        total += Number(array[i].balance.replace(/[$,]/g, ''));
    }
    return total / array.length;
};

//.reduce
var firstLetterCount = function(array, letter){
    var counter = 0;
    var letCount = _.reduce(array, function(previousReturn, currentElement, currentIndex){
        if (currentElement.name[0].toUpperCase() === letter.toUpperCase()){
            counter++;
        } 
        
    }, 0);
    
    return counter;
};
    

var friendFirstLetterCount = function(array, name, letter){  //*** HINT FOR LOOP FOR THIS
                                //PROLLY GONNA COME UP LATER
                                //think about which approach would be best
                                //as for loop is best for this situation
    //loop for overarching array of customer objects
    for (var i = 0; i < array.length; i++){
        //when the customer name we're searching for === name we passed in //check to see if the object is the requested customer under 'name'
        if(array[i].name === name){
            //helper function
            //returns the .friends array in the current object, and the letter we want to compare
            //firstLetterCount already includes a counter, so adding another is not needed
            return firstLetterCount(array[i].friends, letter);
        }   
    }
};
/*
Save the friends array to a variable when the name occurs

alternatively for this one


*/






var friendsCount = function(array, name) {
    //array to hold all customer names
   let customerNames = [];
   //loop through outermost array 
    for (let i = 0; i < array.length; i++) { 
        _.filter(array[i].friends, function(friendElements) {
            // if friends array of objects name is present
            if (friendElements.name === name) {
                //push that friend name into the return array
                customerNames.push(array[i].name);
       }
   })
   
  }
  return customerNames;
};



//look at reduce as an accumulator 



var topThreeTags = function(array) {
   let tagArray = [];
   //push all tags from tags key into single array
    for(let i = 0; i < array.length; i++){
      array[i].tags.filter(function(elements) {
       tagArray.push(elements);
       
      });
      
    }
        //return object to recursively count occurrences of tags
        let obj = _.reduce(tagArray, function(count, currentTag) {
            //if tag does not exist
            if(!count[currentTag]) {
                //create tag, initialize at 1 for first occurence of that tag
                count[currentTag] = 1;
            } 
            else {
                //else, update tag
                count[currentTag]++;
            } 
            return count; 
        }, {});
               //sort object by highest to lowest reported tags
    let sort = Object.entries(obj).sort((a,b) => b[1] - a[1]) 
                   //assign top three tags to array as strings
    let newArray = sort.slice(0, 3);
    //since .flat doesnt work for some reason
    //return an array of strings
    return [].concat.apply([], newArray).filter(element => typeof element === "string");
        
    
};


    
    /*
    idea:
      if no such tag exists in any object in the array
        > create a new object with a tagName value of that tag, and update the counter
      else if tag exists
        > update counter where that tag exists
      
      return the 3 most common tags from the object
        return highest value, then remove highest value
        loop
        return highest value, then remove highest value
        loop
        return highest value, then remove highest value
            store each of these into an array and return array 
            
    */


var genderCount = function(array){
     
    return _.reduce(array, function(count, currentPerson){
        if(!count[currentPerson.gender]){
            count[currentPerson.gender] = 1;
        }
        else {
            count[currentPerson.gender]++;
        }
        return count;
        
    }, {})
    
}    
    
    
    // var genderSummary = _.reduce(array, function(element, index, array){
    //     if (!returnObj[gender]){
    //         returnObj[gender] = 1;
    //     }
    //     else {
    //         returnObj[gender]++;
    //     }
//     }, {})
// }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
