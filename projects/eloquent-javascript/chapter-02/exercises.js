
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
I: a number value
O: a triangle made of the '#' character in a triangle over the passed in number value of loops, output should look like

function(7);

#
##
###
####
#####
######
#######

C: must use console.log to return this. Needs 
E: Parameter is numerical value, must also account for if passed in value is 0. 
   If val = 0, nothing will print since starting condition would be the same as the stop condition, so loop would never run. 
*/

//init function triangles with single parameter. 
function triangles(val) {
      //init string to contain character passed in while converting number data types to a string data type
      var str = "";
      //for loop to run until i = 7 not inclusive. 0 to 6 is 7 steps 
      for (var i = 0; i < val; i++){
        // concatenate '#' to 
        str += '#';
        //print str on each successive loop. Console.log must be within the loop block in order to function like this.
        console.log(str);
  }
}
triangles(0);
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
I: a range of numbers, first value less than second
O: Replace numbers for which have a remainder of 3, 5, 3 AND 5 with 3 = fizz, 5 = buzz, 3 AND 5 = fizzbuzz. Must start at num1 and include num2 in loop 
C: Need to use % remainder symbol for comparison
E: replaced numbers must have fully lowercase words replacing them
*/

function fizzBuzz(num1, num2) {
      // init for loop to iterate from 1 to 100 inclusive. Start: i = 1, stop: i <= 100, update i++
    for (var i = num1; i <= num2; i++) {
        //if current value is multiple of 3 AND 5
       if (i % 3 === 0 && i % 5 === 0) {
           //print "FizzBuzz" in place of number
           console.log("fizzbuzz");
       }
       else if 
            //if current value is multiple of 3
           (i % 3 === 0) {
              //print "Fizz" in place of number
             console.log("fizz");
        }
        else if
            //if current value is multiple of 5
            (i % 5 === 0) {
                //print "Buzz" in place of number
                console.log("buzz");
            }
        else {
            //if current value is not multiple of 3 or 5, and not multiple of 3 AND 5, print value to console
            console.log(i);
        }
       
        }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
I: any number value, even or odd
O: a chessboard that is the character value length and width, comprised of '#' and ' '
C: must join array by using newline break
E: 
*/

/*
function drawChessboard(val) {
  var str = "";
  //loop i loop enters " " and "#"
  for (var i = 0; i < val; i++){
    // if i % 2 === 0, adds '#' to str. Else, adds " " to str 
    if (i % 2 === 0 ? str += "#" : str += " ");
  }
  //loop j prints str 7 times
  //if j % 2 === 1, prints str. Else, prints " " + str
  for (var j = 0; j < val; j++){
    if (j % 2 === 1){
      //prints string
      console.log(str);
    }
    else {
      //prints string with space concatenated to front end
      console.log(" " + str);
    }
    }
}
*/

//this feels hacky, but it works in repl, sooooooo

function drawChessboard(val) {
  //init internal array for board
  var arr = [];
  //nested for loop, i and j
  for (var i = 0; i < val; i++){
    for (var j = 0; j < val; j++){
      //when i + j remainder of 2 === 0
      if ((i + j) % 2 === 0){
        //add space
        arr += " ";
      }
      else {
        //add '#'
        arr += "#";
      }
    }
    //add newline break
    arr += "\n";
  }
  //print array
  console.log(arr);
}

drawChessboard(8);
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
