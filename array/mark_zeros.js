'use strict';
// Function to mark zeros of one array by entire row and columns
function mark_zeros(numberArray)
{


  let registerZeros = [];
  let ii;
  let jj;


  // Register every zero from this matrix and their own position
  for (let i=0;i<=numberArray.length-1;i++)
  {

    for (let j=0;j<=numberArray[0].length-1;j++)
    {

      if (numberArray[i][j] == 0)
      {

        registerZeros.push({"I":i,"J":j});

      }

    }

  }

  // After reigistering zeros now go through the zeros and do the zeroing of the corresponding row and column
  registerZeros.forEach(function(element){
    for (ii=0;ii<=numberArray.length-1;ii++)
    {
      numberArray[ii][element.J] = 0;

    }

    for (jj=0; jj<=numberArray.length-1;jj++)
    {

      numberArray[element.I][jj] = 0;
    }
  });


  return numberArray;
  //return registerZeros;
}


// Build the main function
function main()
{

  var numberArray = [];

  numberArray.push([-3,1,5,7,-1,0,1,2,6,-5]);
  numberArray.push([4,-3,5,-1,6,-7,2,8,9,0]);
  numberArray.push([-1,2,-3,4,5,6,-7,8,9,-4]);
  numberArray.push([12,11,-13,-5,6,-7,5,-3,-6,8]);
  numberArray.push([-13,-5,-7,-3,-6,12,11,6,5,-2]);
  numberArray.push([-1,0,-9,-3,1,5,-7,5,-9,1]);
  numberArray.push([1,-2,3,-4,5,-6,-7,8,9,4]);
  numberArray.push([9,-3,5,-2,-8,-6,1,3,7,6]);
  numberArray.push([-3,-2,6,-4,-8,-6,5,9,1,3]);
  numberArray.push([10,-5,5,-8,9,5,9,0,-9,-1]);

  console.log(mark_zeros(numberArray));

}



// MAIN -----------------------------------------------------------------------------

main();
