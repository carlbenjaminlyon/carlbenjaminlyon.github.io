/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init function search, parameter for array, string

function search(arr, str){
    for (var i = 0; i < arr.length; i++){
        //if name exists in any object, return object
        if (arr[i].name.toLowerCase() === str.toLowerCase()){
            return arr[i];
        }
    
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init function replace with parameters (animals, name, replacement)
    //takes in array of animals, searching for a name, and a replacement object to put in that objects place
function replace(arr, name, replace){
    for (var i = 0; i < arr.length; i++){
        if (arr[i].name.toLowerCase() === name.toLowerCase()){
            arr[i] = replace;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init function remove, two parameters (arr, name)
function remove(arr, name) {
    //iterate loop through array
    for (var i = 0; i < arr.length; i++){
        if (arr[i].name.toLowerCase() === name.toLowerCase()){
            //returns the array itself with this slice
            return arr.splice(i, 1);    
        }
        
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//int function add, parameters array of 'animals', and object of 'animal'
function add(animals, animal){
    //good example of control flow
    //if both animal.name and species have a .length greater than 0
    if (animal.name.length > 0 && animal.species.length > 0){
    //loop to iterate through animals arrays
        for (var i = 0; i < animals.length; i++){
            //if name exists, return already exists. 
            if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return "Already exists";
            }
            else {
                //els push the animal object to the animal array
                animals.push(animal);
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
