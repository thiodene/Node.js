'use strict';
// Build function printing the largest elements of an array
function printLargest(numberArray,k)
{

  let largestArray = [];
  let lastValueArray = [];
  let storedValue = false;

  // sort the array from smallest to largest
  numberArray.sort(function(a,b){
    return b - a;
  });

  // loop from extremes and print the largest different values
  for (let i=0;i<=numberArray.length - 1; i++)
  {

    if (lastValueArray.indexOf(numberArray[i]) == -1 || !storedValue)
    {
      if (largestArray.length < k)
      {
        largestArray.push(numberArray[i]);
        lastValueArray.push(numberArray[i]);
        storedValue = true;
      }
    }
  }


  return largestArray;

}


// Build the main function
function main()
{

  var numberArray = [12,-13,-5,11,11,-7,-3,-6,12,11,16,5,-2,6];
  var k = 6;

  console.log(printLargest(numberArray,k));



}



// MAIN-------------------------------------------------------------------------------

main();
