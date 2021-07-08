//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //init internal arr
    var arr = [];
        //for-in
        for (var key in object){
            //array push the object[key]
            arr.push(object[key]);
        }
    //return array
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //init internal array to contain values
    var arr = [];
        //init for-in for object
        for (var key in object){
            //push var key to array
            arr.push(key);
        }
    // return array as string using join() method
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// var benObj = {
//     name: "ben",
//     test: {},
//     last: "Lyon"
// };
// var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};

//if value is not string, dont push it

function valuesToString(object) { 
    //init interal array
    var arr = [];
    for (var key in object){
        //confirm key: value is a string, and if it is
        if (typeof object[key] === "string"){
            //push the value into the array
            arr.push(object[key]);
        }
    }
    //RETURN OUTSIDE OF THE LOOP DUMMY
    return arr.join(" ");
}
// console.log(valuesToString(objectOne));



//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if (typeof collection === "object"){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //init array to contain words split
    var arr = string.split(" ");
    console.log(arr);
    var arr1 = [];
    //arr.push(string.split(" "));
        for (var i = 0; i < arr.length; i++){
            arr1.push(arr[i][0].toUpperCase() + arr[i].slice(1));
        }
    return arr1.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var myObject = {
    name: "ben"
};


function welcomeMessage(object) {
    //init string to contain object.name value
    var str = object.name;
    //init var theName to contain name with first letter uppercase, remainder lowercase
    var theName = str[0].toUpperCase() + str.slice(1);
    
    return "Welcome " + theName + "!"; //returns "Welcome Ben!"
}

welcomeMessage(myObject);

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //init var to contain object values
    var name = object.name;
    var species = object.species;
    //init var to contain uppercased version of above object values
    var name2 = name[0].toUpperCase() + name.slice(1);
    var species2 = species[0].toUpperCase() + species.slice(1);

    return name2 + " is a " + species2;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   // always check for undefined first, then check for if object.noises does not have a length
    if(object.noises === undefined || !object.noises.length){
        return "there are no noises";
    }
    else {
        return object.noises.join(" ");
    }
}   

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //init loop to compare strings
    for(var i = 0; i < string.length; i++){
        if (string.includes(word)){ //.includes is almost its own loop, searches for char or word
            return true;
        }
        else {
            return false;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name to object.friends array using array method .push(name)
    object.friends.push(name);
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //check to see if the key exists first, and if key does exist, if array in it has length
    if (object.friends === undefined || !object.friends.length){
        return false;
    }
    else {
        //for loop to iterate through friends array when it exists
        for (var i = 0; i < object.friends.length; i++){
        //compare to undefined, friends array length of 0, and if name does not exist at current index
        if(object.friends[i] === name){
            return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
        //init internal array
        var arr = [];
        //for array.length
        for (var i = 0; i < array.length; i++){
            //if object.name DOES NOT equal name
            //AND
            //is NOT a friend as passed in from the isFriend function
            if (array[i].name !== name && !isFriend(name, array[i])){
                // push the object.name into the array;
                arr.push(array[i].name);
            }
        }
        //return array
        return arr;
    }

    



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: input any object, key, and value. 
O: return updated object ?
C: Check for if key exists, if not, create it. If exists, update value
E: Check for if key exists first, and check if object exists. Does not need a for-in loop lol
*/

function updateObject(object, key, value) {
        //if object[key] is undefined or does not exist
        if (object[key] === undefined){
            //add key:value pair to object
            object[key] = value;
        }
        //if key: value does not equal value
        else if (object[key] !== value){
            //update value of that specific key
            object[key] = value;
        }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // for loop to iterate through array
        for (var i = 0; i < array.length; i++){
            //for loop to iterate through object
            for (var key in object){
                //array[i] is standing in as the string value
                // for .hasOwnProperty to check if that string is a key
                if (object.hasOwnProperty(array[i])){
                    //delete the property where the value was found
                    delete object[array[i]];
                }
        }
    }
}
    

 
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var arr = [1, 2, 2, 2, 3, 3, 4, 5, "a", "b", "c", "c", "d", "d"];

function dedup(array) {
    // i loop for check. Starting checks 0th index
    for (var i = 0; i < array.length; i++){
        //j loop for to check against. Starting checks at i + 1
        for (var j = i + 1; j < array.length; j++){
            //starting: if array index 0 === array index 1
            if (array[i] === array[j]){
                //remove value from index j
                array.splice([i], 1);
                //return i to original value
                i -= 1;
            }
        }
    }
    return array;
}
// dedup(arr);

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}