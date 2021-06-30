// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:  
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //init object literal to return data
    //add keys for the above parameters which would be passed into the key values
    //since the data passed in will always correspond with the parameters, we can name the keys the same as the parameter names, since keys themselves are immutable. 
    //the keys will look at whatever has been passed into the parameter values
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
        
    return contact;
} 
console.log(makeContact(42, "Ben", "Lyon"));




function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //init array to contain contacts. Above note states .length(), so either array or string, idk yet
     //needs to return an object
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            //contact parameter assumed to be an object already
            //push contact into contacts array
            contacts.push(contact)
        },
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++){
                // fullName parameter assumed to be a string concatenation of nameFirst and nameLast
                // if fullName strict equal to the string result of (nameFirst + " " + nameLast), return the object in the array where that contact is
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                    return contacts[i];
                }
                else {
                    return undefined;
                }
            }
            
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++){
               //I tried this one a few different ways, but it all works
               //if the passed contact is the object name, OR fullName string, OR is an ID number for that contact
                if (contact === contacts[i] || contacts[i].nameFirst + " " + contacts[i].nameLast || contacts[i].id ){
                    //splice that singular contact out from the current index value of the contacts array
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            //init string to contain full names
            var logNames = "";
            //for loop to iterate to second to last index. Note about using '<' and contacts.length - 1 to get this
            for (var i = 0; i < contacts.length - 1; i++){
                    //so for everything that isn't the last index in the array, it gets a '\n' tacked on the end
                    logNames += contacts[i].nameFirst + " " + contacts[i].nameLast + '\n';
                }
                
                //easy way, return logNames as noted above, which should contain all but the last index currently. Concatenate the last index to the end without the '\n' to dynamically add the ending without the line break
            return logNames + contacts[contacts.length - 1].nameFirst + " " + contacts[contacts.length - 1].nameLast;
        }
        
        }
    }








// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
