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
  let g;
  let s;
  let hasMoved ;

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
      cursorPos = {"I":startPos[s].I,"J":startPos[s].J};
      console.log(cursorPos);
      lastPos = {"I":startPos[s].I,"J":startPos[s].J};
      foundPos = false;
      moves = 0;
      while (foundPos != true)
      {
        // Initialize the move
        hasMoved = false;
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
        // Try a move in those directions and check if it is possible
        if (direction.I > 0)
        {
          // Verify it doesn't go out of limits
          if (cursorPos.I + direction.I <= mapArray.length - 1)
          {
            // Now verify the new position is allowed!
            if (mapArray[cursorPos.I + direction.I][cursorPos.J] != "D")
            {
              // Add the condition for last position
              if (lastPos.I != cursorPos.I + direction.I || lastPos.J != cursorPos.J)
              {
                lastPos = cursorPos;
                console.log(lastPos);
                cursorPos.I = cursorPos.I + direction.I;
                hasMoved = true;
              }
            }
          }
        }



        // Try a move in those directions and check if it is possible
        if (direction.I < 0)
        {
          // Verify it doesn't go out of limits
          if (cursorPos.I + direction.I >= 0)
          {
            // Now verify the new position is allowed!
            if (mapArray[cursorPos.I + direction.I][cursorPos.J] != "D")
            {
              // Add the condition for last position
              if (lastPos.I != cursorPos.I + direction.I || lastPos.J != cursorPos.J)
              {
                lastPos = cursorPos;
                console.log(lastPos);
                cursorPos.I = cursorPos.I + direction.I;
                hasMoved = true;
              }
            }
          }
        }

        if (!hasMoved)
        {
          // Try a move in those directions and check if it is possible
          if (direction.J > 0)
          {
            // Verify it doesn't go out of limits
            if (cursorPos.J + direction.J <= mapArray[0].length - 1)
            {
              // Now verify the new position is allowed!
              if (mapArray[cursorPos.I][cursorPos.J + direction.J] != "D")
              {
                // Add the condition for last position
                if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + direction.J)
                {
                  lastPos = cursorPos;
                  cursorPos.J = cursorPos.J + direction.J;
                  hasMoved = true;
                }
              }
            }
          }


          // Try a move in those directions and check if it is possible
          if (direction.J < 0)
          {
            // Verify it doesn't go out of limits
            if (cursorPos.J + direction.J >= 0)
            {
              // Now verify the new position is allowed!
              if (mapArray[cursorPos.I][cursorPos.J + direction.J] != "D")
              {
                // Add the condition for last position
                if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + direction.J)
                {
                  lastPos = cursorPos;
                  cursorPos.J = cursorPos.J + direction.J;
                  hasMoved = true;
                }
              }
            }
          }
        }
        // If no move has been made to get the cursor closer choose another direction that isnot lastPos!
        // choose another direction on I or on J
        if (!hasMoved)
        {
          console.log("Not!");
          // If direction.I equals zero then move on I left or right
          if (Math.abs(cursorPos.I - goalPos[g].I) >= Math.abs(cursorPos.J - goalPos[g].J))
          {
            console.log("closer on J");
            // Verify it doesn't go out of limits
            if (cursorPos.J - 1 > 0)
            {
              // Now verify the new position is allowed!
              if (mapArray[cursorPos.I][cursorPos.J - 1] != "D")
              {
                // Add the condition for last position
                if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J - 1)
                {
                  lastPos = cursorPos;
                  console.log(lastPos);
                  cursorPos.J = cursorPos.J - 1;
                  hasMoved = true;
                }
              }
            }

            if (!hasMoved)
            {
              // Verify it doesn't go out of limits
              if (cursorPos.J + 1 > mapArray[0].length)
              {
                // Now verify the new position is allowed!
                if (mapArray[cursorPos.I][cursorPos.J + 1] != "D")
                {
                  // Add the condition for last position
                  if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + 1)
                  {
                    lastPos = cursorPos;
                    console.log(lastPos);
                    cursorPos.J = cursorPos.J - 1;
                    hasMoved = true;
                  }
                }
              }

            }

          }
          else
          {
            console.log("closer on I");
            // If closer on I move I farther

            // Verify it doesn't go out of limits
            if (cursorPos.I - 1 > 0)
            {
              // Now verify the new position is allowed!
              if (mapArray[cursorPos.I - 1][cursorPos.J] != "D")
              {
                // Add the condition for last position
                if (lastPos.I != cursorPos.I - 1 || lastPos.J != cursorPos.J)
                {
                  lastPos = cursorPos;
                  console.log(lastPos);
                  cursorPos.I = cursorPos.I - 1;
                  hasMoved = true;
                }
              }
            }

            if (!hasMoved)
            {
              // Verify it doesn't go out of limits
              if (cursorPos.I + 1 > mapArray.length)
              {
                // Now verify the new position is allowed!
                if (mapArray[cursorPos.I + 1][cursorPos.J] != "D")
                {
                  // Add the condition for last position
                  if (lastPos.I != cursorPos.I + 1 || lastPos.J != cursorPos.J)
                  {
                    lastPos = cursorPos;
                    console.log(lastPos);
                    cursorPos.I = cursorPos.I + 1;
                    hasMoved = true;
                  }
                }
              }

            }


          }

        }

        //if (foundPos)
        //  break;
        break;
      }

    }

  }

  //console.log(lastPos);
  return cursorPos;
  //return minimalMoves;

  //return startPos;
  return goalPos;


}




// Build trhe main function
function main()
{

  var mapArray = [["O","O","O","O","S"],
                  ["D","O","D","O","D"],
                  ["O","O","O","O","X"],
                  ["O","D","D","O","O"],
                  ["O","D","D","D","O"]];



  //var mapArray = [["S","O","O","S","S"],
  //                ["D","O","D","O","D"],
  //                ["O","O","O","O","X"],
  //                ["X","D","D","O","O"],
  //                ["X","D","D","D","O"]];


  console.log(find_treasure(mapArray));



}



// MAIN----------------------------------------------------


main();

