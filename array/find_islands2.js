'use strict';
// Register the island from a matrix
function registerIslands(island)
{

  let registerIsland = [];
  let islandIter = 1;
  let i;
  let j;
  let testIsland = [];
  let testSize;

  // Register each island position as object
  for(i=0;i<=island.length - 1;i++)
  {

    for(j=0;j<=island[0].length - 1;j++)
    {

      // If this position is a 1 store it and go through all the other connected 1
      if (island[i][j] == 1 && !checkPosition(i,j,testIsland))
      {

        // Now go through all the other 1's connected to this 1
        // Make the island grow until it cannot anymore
        testIsland.push({"I":i,"J":j,"Island":islandIter,"Checked":false});
        //testSize = testIsland.length;
        testSize = 0;
        while (testSize < testIsland.length)
        {
          testSize = testIsland.length;
          // Now for each element that has to be checked
          testIsland.forEach(function(element)
          {
            if (element.Checked === false)
            {
              // Go around that Position and check for new position
              // POS 1
              if (element.I+1 <= island.length -1)
              {
                if (island[element.I+1][element.J] == 1 && !checkPosition(element.I+1,element.J,testIsland))
                  testIsland.push({"I":element.I+1,"J":element.J,"Island":islandIter,"Checked":false});
              }

              // POS 2
              if (element.I-1 >= 0)
              {
                if (island[element.I-1][element.J] == 1 && !checkPosition(element.I-1,element.J,testIsland))
                  testIsland.push({"I":element.I-1,"J":element.J,"Island":islandIter,"Checked":false});
              }

              // POS 3
              if (element.J+1 <= island[0].length -1)
              {
                if (island[element.I][element.J+1] == 1 && !checkPosition(element.I,element.J+1,testIsland))
                  testIsland.push({"I":element.I,"J":element.J+1,"Island":islandIter,"Checked":false});
              }

              // POS 4
              if (element.J-1 >= 0)
              {
                if (island[element.I][element.J-1] == 1 && !checkPosition(element.I,element.J-1,testIsland))
                  testIsland.push({"I":element.I,"J":element.J-1,"Island":islandIter,"Checked":false});
              }


              // POS 5
              if (element.I+1 <= island.length - 1 && element.J+1 <= island[0].length - 1)
              {
                if (island[element.I+1][element.J+1] == 1 && !checkPosition(element.I+1,element.J+1,testIsland))
                  testIsland.push({"I":element.I+1,"J":element.J+1,"Island":islandIter,"Checked":false});
              }

              // POS 6
              if (element.I+1 <= island.length - 1 && element.J-1 >= 0)
              {
                if (island[element.I+1][element.J-1] == 1 && !checkPosition(element.I+1,element.J-1,testIsland))
                  testIsland.push({"I":element.I+1,"J":element.J-1,"Island":islandIter,"Checked":false});
              }

              // POS 7
              if (element.I-1 >= 0 && element.J+1 <= island[0].length - 1)
              {
                if (island[element.I-1][element.J+1] == 1 && !checkPosition(element.I-1,element.J+1,testIsland))
                  testIsland.push({"I":element.I-1,"J":element.J+1,"Island":islandIter,"Checked":false});
              }

              // POS 8
              if (element.I-1 >= 0 && element.J-1 >= 0)
              {
                if (island[element.I-1][element.J-1] == 1 && !checkPosition(element.I-1,element.J-1,testIsland))
                  testIsland.push({"I":element.I-1,"J":element.J-1,"Island":islandIter,"Checked":false});
              }

            }
            // That element has been check ed so true now
            console.log(checkPosition(element.I,element.J+1,testIsland));
            element.Checked = true;

          });


        }

        islandIter++;
      }

    }

  }


  return testIsland;
  //return island;

}


// This function checkes if thie position has already been registered in the island
function checkPosition(i,j,testIsland)
{
  let result = false;
  let records = [];
  // Return if the record has already been saved in that island
  records = testIsland.filter(function(element){
    return element.I == i && element.J == j;
  });

  if (records.length > 0)
    return true;
  else
    return false;
}

// Build the main function
function main()
{

  var island = [[1,1,0,0,0],
                [0,1,0,0,1],
                [1,0,0,1,1],
                [0,0,0,0,0],
                [1,0,1,0,1]];
  console.log(registerIslands(island));



}


// MAIN---------------------------------------------------------------------------------------

main();

