'use strict';
// Build the function that will search each treasures and the fastest route possible
function find_treasure(mapArray)
{

  let startPos = [];
  let goalPos = [];
  let foundPos;
  let moves = 0;
  let minimalMoves = 0;
  let cursorPos = {};
  let lastPos = {};
  let direction = {"I":0,"J":0};

  // Register all the starting and goal positions
  for (let i=0;i<=mapArray.length - 1;i++)
  {

    for (let j=0;j<=mapArray[0].length - 1;j++)
    {
      if (mapArray[i][j] == "S")
        startPos.push({"I": i,"J":j});

      if (mapArray[i][j] == "X")
        goalPos.push({"I": i,"J":j});
    }
  }

  // For each goal position, go through the start position and get the smallest path to reach the goals
  for(g=0;g<=goalPos.length - 1;g++)
  {
    for(s=0;s<=startPos.length - 1; s++)
    {
      cursorPos = {"I":startPos.I,"J":startPos.J};
      lastPos = {"I":startPos.I,"J":startPos.J};
      foundPos = false;
      moves = 0;
      while (foundPos != true)
      {

        // First get the natural direction to reach goal on I
        if (cursorPos.I < goalPos[g].I)
          direction.I = 1;
        else if (cursorPos.I > goalPos[g].I)
          direction.I = -1;
        else
          direction.I = 0;

        // Natural direction to reach goal on J
        if (cursorPos.J < goalPos[g].J)
          direction.J = 1;
        else if (cursorPos.J > goalPos[g].J)
          direction.J = -1;
        else
          direction.J = 0;

        // If could not get closerr on I or J try go another direction that is not the direction you came from


        // Try to get closer on I
         if (cursorPos.I + 1 <= mapArray.length - 1)
         {
           if (mapArray[cursorPos.I + 1] != "D")
           {

           }
           else
           {


           }
         }

         // Try to get closer on J
         if (cursorPos.J + 1 <= mapArray[0].length - 1)
         {

         }

         // Try to get closer on I
         if (cursorPos.I - 1 >= 0)
         {
           cursorPos.I += 1;
         }

         // Try to get closer on J
         if (cursorPos.J - 1 >= 0)
         {

         }


      }

    }

  }



  return minimalMoves;

  //return startPos;
  return goalPos;






}



// Build trhe main function
function main()
{

  var route = [["S","O","O","S","S"],
               ["D","O","D","O","D"],
               ["O","O","O","O","X"],
               ["X","D","D","O","O"],
               ["X","D","D","D","O"]];


  console.log(find_treasure(route));



}



// MAIN----------------------------------------------------


main();
