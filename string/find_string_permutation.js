'use strict';
// Build a function that displays all the permutations of one string
function permut(string)
{
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i=0; i<string.length; i++)
  {
     var char = string[i];

     // Cause we don't want any duplicates:
     if (string.indexOf(char) != i) // if char was used already
       continue;           // skip it this time

     var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

     for (var subPermutation of permut(remainingString))
       permutations.push(char + subPermutation)

  }

   return permutations;

}

// Build the main function
function main()
{

  var string = "lo op";

  console.log(permut(string));


}



// MAIN ---------------------------------------------------------------------------------------------------------------------------


main();
