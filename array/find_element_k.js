'use strict';
// Function to find kth number in sorted array of repetitive elements
function find_element(elements, k)
{
  let elementIter = 0;
  let rankElement = elements[0][0];
  let elementIterB = 0;
  let rankElementB = elements[1][0];

  // Look for the kth element in the first array
  for (let i=0; i<=elements[0].length - 1; i++)
  {
    if (rankElement != elements[0][i])
    {
       elementIter++;
       rankElement = elements[0][i];

    }

    if (elementIter == k -1)
      break;

  }

  // Look for the kth element in the second matrix
  for (let j=0; j<=elements[1].length - 1; j++)
  {
    if (rankElementB != elements[1][j])
    {
       elementIterB++;
       rankElementB = elements[1][j];

    }

    if (elementIterB == k -1)
      break;

  }


  return [rankElement,rankElementB];
}



// function main
function main()
{

  var elementsOne = [0,0,1,1,1,2,2,3,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,8,8,9,9,9,9,9,9,9,10,10,10,11,11,12,12,12,12,12,12,12,13];
  var elementsTwo = [0,2,2,2,5,5,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,8,8,9,9,9,9,9,10,10,11,11,11,11,11,12,12,15,15,19,19,20,25,32,32,32,36,38,38,40];

  var elements = [];
  elements.push(elementsOne);
  elements.push(elementsTwo);

  console.log(find_element(elements, 5));

}


// MAIN---------------------------------------------------------------------------------------------

main();
