'use strict';
// Build function merging arrays
function mergeArray(arrayOne,arrayTwo)
{

  let sizeOne = arrayOne.length;
  let sizeTwo = arrayTwo.length;
  let resultArray = [];

  // First sort both arrays
  arrayOne.sort(function(a,b){
    return a - b;
  });

  arrayTwo.sort(function(a,b){
    return a - b;
  });

  // Populate the result array based on the first record of the two arrays.
  for (let i=0; i<=sizeOne+sizeTwo-1;i++)
  {
    // If arrayOne is empty fills with arrayTwo values
    if (arrayOne[0] === undefined)
    {
      resultArray.push(arrayTwo[0]);
      arrayTwo.splice(0,1);
    }
    // If arrayTwo is empty fill with array one values
    if (arrayTwo[0] === undefined)
    {
      resultArray.push(arrayOne[0]);
      arrayOne.splice(0,1);
    }
    // If both arrayOne and arrayTwo
    //console.log(arrayOne[0]);
    //console.log(arrayTwo[0]);
    if (arrayOne[0] !== undefined && arrayTwo [0] !== undefined)
    {
      if (arrayOne[0] <= arrayTwo[0])
      {
        // Enter the new record in the array
        resultArray.push(arrayOne[0]);
        //resultArray[i] = arrayOne[0];
        // Remove record from corresponding array
        arrayOne.splice(0,1);

      }
      else
      {

        // Enter the new record in the array
        resultArray.push(arrayTwo[0]);
        //resultArray[i] = arrayTwo[0];
        // Remove record from corresponding array
        arrayTwo.splice(0,1);
      }
    }

  }
  return resultArray;
}



// Build main function
function main()
{

  var arrayOne = [2,4,6,7,9,13,14,16,17,18,19,20,21,24,25];
  var arrayTwo = [23,22,15,12,11,10,8,5,3,1];

  console.log(arrayOne);

  console.log(mergeArray(arrayOne,arrayTwo));

}


// MAIN---------------------------------------------------

main();


