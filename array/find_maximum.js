'use strict';
// Build a function looking for elements in increasing and decreasing array
function findElement(numberArray,k)
{


  // Find the maximum Element of that array
  // Sort the array
  numberArray.sort(function(a,b){
    return b - a
  });

  var filterArray = numberArray.filter(function(element){
    return element <= k;
  });

  //return numberArray[0];
  //return filterArray;
  return filterArray[0];
}


// Build the main function
function main()
{

  var numberArray = [2,4,6,7,9,13,14,16,17,18,19,20,21,24,25,23,22,15,12,11,10,8,5,3,1];
  var k = 17;

  console.log(findElement(numberArray,k));


  // Filter the value to get the wanted element



}



// MAIN-------------------------------------------------------------------------------

main();

