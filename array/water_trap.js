'use strict';
// This function vcalculates the amount of water units that can be strored
function waterTrap (waterArray)
{

  let waterTotal = 0;
  let heightMax = 0;
  // First get ehe maximum height of the
  waterArray.forEach(function(element){
   if (element > heightMax)
      heightMax = element;

  });

  return heightMax;

}


// Bulild the main function
function main()
{

  //var waterArray = [2,0,2];
  //var waterArray = [3,0,0,2,0,4];
  var waterArray = [0,1,0,2,1,0,1,3,2,1,2,1];

  console.log(waterTrap(waterArray));

}



// MAIN-------------------------------------------------------------------------

main();
