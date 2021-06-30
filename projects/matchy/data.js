/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init object literal 
//need to use var for this one, something with the test
var animal = {};

//assign properties to the animal using dot notation
animal.species = "canine";
//console.log(animal); returns { species: 'canine' }

//assign property called 'name' with value of name
animal["name"] = "Snowy";
//console.log(animal);

//assign property called noises with value of empty array
animal.noises = [];
//console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//init var array called noises, assign to array literal
var noises = [];

// assign first index value to var noises
noises[0] = "woof";
//console.log(noises);
//init function to add data to the array
function addToArray(value){
    noises.push(value);
}
addToArray("arf");
addToArray("yip");
//console.log(noises);

// use bracket notation to add to the begining, plus .unshift
noises.unshift("bark");
//console.log(noises);

//use bracket to add element to end of noises, dont hardcode postion of new element, not using .push.
//Using noises.length essentially adds a new final index in bracket notation
noises[noises.length] = "yap";

// console.log noises length
console.log(noises.length);

//console.log last element in noises without hard coding it. Need the length - 1 b/c we'll get an undefined spot otherwise
console.log(noises[noises.length - 1]);

//console.log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign noises property on object animal to the new noises array
animal["noises"] = noises;
//console.log(animal); //animal object now has key value of the array noises


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Can access properties on an object either by using bracket notation, or by using key notation. Bracket notation is good for when you don't know the exact key name, dot is good for when you do know it.
 * 2. What are the different ways of accessing elements on arrays?
 * Array elements can be accessed by accessing the arrays individual bracket notation indexes. You can also access them by calling the entire array, which will return the whole array with all of the elements present. 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init variable array litera, called animals 
var animals = [];

//push object animal to array animals
animals.push(animal);

//console.log(animals); //animal object now at index 0 of animals array

//init var object named duck, load in properties listed in instructions
var duck = {
    species: "duck",
    name: "Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//push object duck to animals array
animals.push(duck);

//create two more object animals (cow and cat)
var cat = {
    species: "cat",
    name: "Monty",
    noises: ['meow', 'bell', 'yell', 'purr']
};

var cow = {
    species: "cow",
    name: "Bluebell",
    noises: ["moo", "chew", "snort", "ring"]
};

//push objects cat and cow to animals array
animals.push(cat);
animals.push(cow);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init array friends, because I think it's easier to access and add/remove individual index values from an array, instead of say a string of names
var friends = ["Ben", "Carol", "Vicky", "Chase"];

//init function getRandom to return a random index value of array friends. Use Math.random, function takes in array
function getRandom(array){
    //index value is a value that is randomly chosen from the muliplied result of array.length. That result is then rounded down to nearest whole integer, which will be the number used to point to the index value
    return array[Math.floor(Math.random() * array.length)];
}

getRandom(animals);
console.log(friends)

animal['friends'] = friends;

//using bracket notation, add the friends list as a property also named friends on one of the animals in the animals array



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}