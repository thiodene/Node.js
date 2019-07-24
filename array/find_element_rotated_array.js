'use strict';
// Function find the rotated element in a rotated array (No Algorihtm!)
function find_rotated_element(rotatedArray, element)
{
  let elementPosition = rotatedArray.indexOf(element);



  return elementPosition;

}


// Build the main function
function main()
{

  var rotatedArray = [6,7,8,9,10,11,12,1,2,3,4,5];
  var element = 1;

  console.log(find_rotated_element(rotatedArray, element));

}



// MAIN-------------------------------------------------------------------------
main();
