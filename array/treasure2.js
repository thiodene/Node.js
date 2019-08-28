'use strict';
// Build the function that will search each treasures and the fastest route possible
function find_treasure(mapArray)
{
  // One position for startPos and one for goalPos
  let startPos = {};
  let goalPos = {};
  let foundPos;
  let moves = 0;
  let minimalMoves = 0;
  let cursorPos = {};
  let lastPos = {};
  let switchPos = {"I":0,"J":0};
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
        startPos = {"I": i,"J":j};

      if (mapArray[i][j] == "X")
        goalPos = {"I": i,"J":j};
    }
  }

  // For each goal position, go through the start position and get the smallest path to reach the goals
  cursorPos = {"I":startPos.I,"J":startPos.J};
  console.log(cursorPos);
  lastPos = {"I":startPos.I,"J":startPos.J};
  foundPos = false;
  moves = 0;
  while (foundPos != true)
  {
    // Initialize the move
    hasMoved = false;
    // First get the natural direction to reach goal on I
    if (cursorPos.I < goalPos.I)
      direction.I = 1;
    else if (cursorPos.I > goalPos.I)
      direction.I = -1;
    else
      direction.I = 0;

    // Natural direction to reach goal on J
    if (cursorPos.J < goalPos.J)
      direction.J = 1;
    else if (cursorPos.J > goalPos.J)
      direction.J = -1;
    else
      direction.J = 0;

    console.log("DirI:" + direction.I);
    console.log("DirJ:" + direction.J);

    // Try a move in those directions getting closer to the goal and check if it is possible
    // Move closer on I+
    if (direction.I > 0)
    {
      console.log("I+");
      // Verify it doesn't go out of limits
      if (cursorPos.I + direction.I <= mapArray.length - 1)
      {
        console.log("Limit OK");
        //console.log(cursorPos.I + direction.I);
        console.log(cursorPos);
        console.log(direction.I);
        //console.log(cursorPos.J);
        console.log(mapArray[cursorPos.I + direction.I][cursorPos.J]);
        // Now verify the new position is allowed!
        if (mapArray[cursorPos.I + direction.I][cursorPos.J] != "D")
        {
          console.log("New Pos OK");
          // Add the condition for last position
          if (lastPos.I != cursorPos.I + direction.I || lastPos.J != cursorPos.J)
          {
            console.log("Move OK");
            lastPos = {"I":cursorPos.I,"J":cursorPos.J};
            console.log(lastPos);
            cursorPos.I = cursorPos.I + direction.I;
            hasMoved = true;
            moves++;
          }
        }
      }
    }

    // Now try Move closer on I-
    if (direction.I < 0)
    {
      console.log("I-");
      // Verify it doesn't go out of limits
      if (cursorPos.I + direction.I >= 0)
      {
        // Now verify the new position is allowed!
        if (mapArray[cursorPos.I + direction.I][cursorPos.J] != "D")
        {
          // Add the condition for last position
          if (lastPos.I != cursorPos.I + direction.I || lastPos.J != cursorPos.J)
          {
            lastPos = {"I":cursorPos.I,"J":cursorPos.J};
            console.log(lastPos);
            cursorPos.I = cursorPos.I + direction.I;
            hasMoved = true;
            moves++;
          }
        }
      }
    }

    // Now try move closer on J+
    if (!hasMoved)
    {
      // Try a move in those directions and check if it is possible
      if (direction.J > 0)
      {
        console.log("J+");
        // Verify it doesn't go out of limits
        if (cursorPos.J + direction.J <= mapArray[0].length - 1)
        {
          // Now verify the new position is allowed!
          if (mapArray[cursorPos.I][cursorPos.J + direction.J] != "D")
          {
            // Add the condition for last position
            if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + direction.J)
            {
              lastPos = {"I":cursorPos.I,"J":cursorPos.J};
              cursorPos.J = cursorPos.J + direction.J;
              hasMoved = true;
              moves++;
            }
          }
        }
      }


      // Finally try move closer on J-
      if (direction.J < 0)
      {
        console.log("J-");
        // Verify it doesn't go out of limits
        if (cursorPos.J + direction.J >= 0)
        {
          // Now verify the new position is allowed!
          if (mapArray[cursorPos.I][cursorPos.J + direction.J] != "D")
          {
            // Add the condition for last position
            if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + direction.J)
            {
              lastPos = {"I":cursorPos.I,"J":cursorPos.J};
              cursorPos.J = cursorPos.J + direction.J;
              hasMoved = true;
              moves++;
            }
          }
        }
      }
    }


    // If no move has been made to get the cursor closer choose another direction that isnt lastPos!
    // choose another direction on I or on J
    if (!hasMoved)
    {
      console.log("Not!");
      // If direction.I equals zero then move on I left or right
      if (Math.abs(cursorPos.I - goalPos.I) >= Math.abs(cursorPos.J - goalPos.J))
      {
        console.log("closer on J");
        // Verify it doesn't go out of limits
        if (cursorPos.J - 1 >= 0)
        {
          // Now verify the new position is allowed!
          if (mapArray[cursorPos.I][cursorPos.J - 1] != "D")
          {
            // Add the condition for last position
            if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J - 1)
            {
              console.log(cursorPos);
              lastPos = {"I":cursorPos.I,"J":cursorPos.J};
              cursorPos.J = cursorPos.J - 1;
              hasMoved = true;
              moves++;
            }
          }
        }
        console.log("Here");
        console.log(lastPos);
        if (!hasMoved)
        {
          console.log("2nd J+");
          // Verify it doesn't go out of limits
          if (cursorPos.J + 1 <= mapArray[0].length - 1)
          {
            // Now verify the new position is allowed!
            if (mapArray[cursorPos.I][cursorPos.J + 1] != "D")
            {
              // Add the condition for last position
              if (lastPos.I != cursorPos.I || lastPos.J != cursorPos.J + 1)
              {
                lastPos = {"I":cursorPos.I,"J":cursorPos.J};
                console.log(lastPos);
                cursorPos.J = cursorPos.J + 1;
                hasMoved = true;
                moves++;
              }
            }
          }

        }
        console.log(lastPos);
      }
      else
      {
        console.log("closer on I");
        // If closer on I move I farther

        // Verify it doesn't go out of limits
        if (cursorPos.I - 1 >= 0)
        {
          // Now verify the new position is allowed!
          if (mapArray[cursorPos.I - 1][cursorPos.J] != "D")
          {
            // Add the condition for last position
            if (lastPos.I != cursorPos.I - 1 || lastPos.J != cursorPos.J)
            {
              lastPos = {"I":cursorPos.I,"J":cursorPos.J};
              console.log(lastPos);
              cursorPos.I = cursorPos.I - 1;
              hasMoved = true;
              moves++;
            }
          }
        }

        if (!hasMoved)
        {
          // Verify it doesn't go out of limits
          if (cursorPos.I + 1 <= mapArray.length - 1)
          {
            // Now verify the new position is allowed!
            if (mapArray[cursorPos.I + 1][cursorPos.J] != "D")
            {
              // Add the condition for last position
              if (lastPos.I != cursorPos.I + 1 || lastPos.J != cursorPos.J)
              {
                lastPos = {"I":cursorPos.I,"J":cursorPos.J};
                console.log(lastPos);
                cursorPos.I = cursorPos.I + 1;
                hasMoved = true;
                moves++;
              }
            }
          }

        }


      }

    }

    // If not move was possible come back to the last position of the cursor
    if (!hasMoved)
    {
      switchPos = {"I":lastPos.I,"J":lastPos.J};
      lastPos = {"I":cursorPos.I,"J":cursorPos.J};
      cursorPos = {"I":switchPos.I,"J":switchPos.J};
      moves--;
    }

    if (cursorPos.I == goalPos.I && cursorPos.J == goalPos.J)
      foundPos = true;

    console.log(lastPos);
    if (foundPos)
      break;
    //break;
  }


  console.log(lastPos);
  return moves;
  //return minimalMoves;

  //return startPos;
  return goalPos;






}




// Build trhe main function
function main()
{

  var mapArray = [["O","O","O","S","O"],
                  ["D","O","D","O","D"],
                  ["O","O","O","O","X"],
                  ["O","D","D","O","O"],
                  ["O","D","D","D","O"]];

  console.log(find_treasure(mapArray));



}



// MAIN----------------------------------------------------


main();
