'use strict';
// Function build consecutive character check for A B and C
function findNonConsecutive(A,B,C)
{

  // Construct the string having all the characters
  let charSelection = "";
  let permutation = [];
  let nonConsec = [];

  for(let i=0;i<=A - 1;i++)
  {
    charSelection += "a";
  }

  for (let j=0;j<=B - 1;j++)
  {
    charSelection += "b";
  }

  for (let k=0;k<=C - 1;k++)
  {
    charSelection += "c";
  }

  // Now get all the permutations aof that series of characters
  permutation = permut(charSelection);

  // Now filter to see if any permutation doesn't have a "abc" consecutivity
  nonConsec = permutation.filter(function(element){
    return element.indexOf("ccc") == -1 && element.indexOf("aaa") == -1  && element.indexOf("bbb") == -1  ;
  });

  if (nonConsec.length > 0)
    return nonConsec[0];
  else
    return -1;

  //return charSelection;

}


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

  //var string = "lo op";
  //console.log(permut(string));


  // Input 1:
  var A = 1;
  var B = 1;
  var C = 6;

  //// Input 2:
  //var A = 1;
  //var B = 2;
  //var C = 3;


  console.log(findNonConsecutive(A,B,C));
}



// MAIN ---------------------------------------------------------------------------------------------------------------------------


main();
