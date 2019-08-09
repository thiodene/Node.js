'use strict';
// This function vcalculates the amount of water units that can be strored
function waterTrap (waterArray)
{

  let waterTotal = 0;
  let heightMax = 0;
  // First get ehe maximum height of the traps
  waterArray.forEach(function(element){
    if (element > heightMax)
      heightMax = element;

  });

  // Buidld each water traap level from 1 to highest
  let levels = [];
  let i;
  let j;
  for (i=1;i<=heightMax;i++)
  {
    levels.push([]);
    for(j=0;j<=waterArray.length - 1;j++)
    {
      if (waterArray[j] >= i)
        levels[i-1].push(1);
      else
        levels[i-1].push(0);
    }
  }

  // Now go through each levels and count the trap water units
  let k;
  let l;
  let trap_status = false;
  let waterIter = 0;
  let waterUnit = 0;
  for(k=0;k<=levels.length - 1;k++)
  {
    // For each level rest the trap_status to false
    trap_status = false;
    waterIter = 0;
    for(l=0;l<=levels[k].length - 1;l++)
    {
      //if encounters an edge of a trap start counting with trap_status as TRUE
      if (levels[k][l] == 1 && !trap_status)
      {
        trap_status = true;
      }

      // Now increment the water unit if trap status is TRUE
      if (levels[k][l] == 0 && trap_status)
      {
        waterIter++;
      }

      if (levels[k][l] == 1 && trap_status)
      {
        //validate the water unit counter
        waterUnit += waterIter;
        // Now reset waterIter to zero
        waterIter = 0;
      }

    }
  }


  return waterUnit;
  //return levels;
  //return heightMax;

}


// Bulild the main function
function main()
{

  //var waterArray = [2,0,2];
  var waterArray = [3,0,0,2,0,4];
  //var waterArray = [0,1,0,2,1,0,1,3,2,1,2,1];

  console.log(waterTrap(waterArray));

}



// MAIN-------------------------------------------------------------------------

main();
