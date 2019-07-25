'use strict';
// Function to rotate an array (matrix) by 90 degrees
function rotateMatrix(thisArray)
{

  let i = thisArray.length;
  let j = thisArray[0].length;
  let newArray = [];


  // Clockwise rotation
  for (let ii=0;ii<= j - 1; ii++)
  {
    newArray.push([]);
    for (let jj = 0; jj<= i - 1; jj++)
    {

      newArray[ii][jj] = thisArray[(i - 1) - jj][ii];

    }

  }


  return newArray;

}




// Build the main function
function main()
{

  var highArray = [];
  var wideArray = [];

  highArray.push([-3,1,5,7,-1,0,1,2]);
  highArray.push([4,-3,5,-1,6,-7,2,8]);
  highArray.push([-1,2,-3,4,5,6,-7,8]);
  highArray.push([12,11,-13,-5,6,-7,5,-3]);
  highArray.push([-13,-5,-7,-3,-6,12,11,6]);
  highArray.push([-1,0,-9,-3,1,5,-7,5]);
  highArray.push([1,-2,3,-4,5,-6,-7,8]);
  highArray.push([9,-3,5,-2,-8,-6,1,3]);
  highArray.push([-3,-2,6,-4,-8,-6,5,9]);
  highArray.push([10,-5,5,-8,9,5,9,0]);

  wideArray.push([-3,1,5,7,-1,0,1,2,6,-5]);
  wideArray.push([4,-3,5,-1,6,-7,2,8,9,0]);
  wideArray.push([-1,2,-3,4,5,6,-7,8,9,-4]);
  wideArray.push([12,11,-13,-5,6,-7,5,-3,-6,8]);
  wideArray.push([-13,-5,-7,-3,-6,12,11,6,5,-2]);
  wideArray.push([-1,0,-9,-3,1,5,-7,5,-9,1]);


  console.log(rotateMatrix(highArray));
  //console.log(rotateMatrix(wideArray));
}


// MAIN -----------------------------------------------------------------------------

main();

