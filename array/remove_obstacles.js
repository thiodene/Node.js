'use strict';
// Function claculates the number of moves to reach an obstacle and remove it out of the way
function removeObs(lot,numRows,numColumns)
{

  let myPos = {"I":0,"J":0};
  let lastPos = {"I":0,"J":0};
  let pathPos = [];
  let obsPos = {};
  let direction = {"I":1,"J":0};
  let moves = 0;

  // Find the position of the obstacle
  for (let i=0;i<=numRows - 1; i++)
  {
    for (let j=0;j<=numColumns - 1;j++)
    {
      if (lot[i][j] == 9)
      {
        lot[i][j] = 1;
        obsPos = {"I":i,"J":j};
      }
    }

  }

  while (myPos != obsPos)
  {
    console.log(myPos);
    if (checkMoveLimits(lot,myPos,direction))
    {
      // Try to move along the direction of 1 to find the obstacle
      console.log(direction);
      if (lot[myPos.I + direction.I][myPos.J + direction.J] == 1)
      {
        // save last posiution
        lastPos.I = myPos.I;
        lastPos.J = myPos.J;

        // Move the current position
        myPos.I += direction.I;
        myPos.J += direction.J;
        // Save the move
        moves++;
      }
      else //change direction
      {
        direction = changeDir(lot,myPos,lastPos);

      }

    }
    else // change direction
    {
      direction = changeDir(lot,myPos,lastPos);
    }

    if (!direction)
      break;

    if (myPos.I == obsPos.I && myPos.J == obsPos.J)
      break;
  }

  console.log(moves);
  if (!direction)
    return -1;
  else
    return moves;
  //return obsPos;
  //return lot;

}

// Change the direction of the cursor
function changeDir(lot,myPos,lastPos)
{
  let newDirection = {};
  // Move on I+
  if (myPos.I + 1 <= lot.length - 1 && lot[myPos.I + 1][myPos.J] == 1)
  {
    // Check last position
    if (myPos.I + 1 != lastPos.I || myPos.J != lastPos.J)
      return newDirection = {"I":1,"J": 0};
  }

  // Move on J+
  if (myPos.J + 1 <= lot[0].length - 1 && lot[myPos.I][myPos.J+1] == 1)
  {
    // Check last position
    if (myPos.I != lastPos.I || myPos.J + 1 != lastPos.J)
      return newDirection = {"I":0,"J": 1};
  }


  // Move on I-
  if (myPos.I - 1 >= 0 && lot[myPos.I - 1][myPos.J] == 1)
  {
    // Check last position
    if (myPos.I - 1 != lastPos.I || myPos.J != lastPos.J)
      return newDirection = {"I":-1,"J": 0};
  }


  // Move on J-
  if (myPos.J - 1 >= 0 && lot[myPos.I][myPos.J-1] == 1)
  {
    // Check last position
    if (myPos.I != lastPos.I || myPos.J - 1 != lastPos.J)
      return newDirection = {"I":0,"J": -1};
  }

  return false;

}


// Check if the move is inside the limits of the lot
function checkMoveLimits(lot,myPos,direction)
{
  let checkLimit = true;

  if (myPos.I + direction.I < 0)
    checkLimit = false;

  if (myPos.I + direction.I > lot.length - 1)
    checkLimit = false;

  if (myPos.J + direction.J < 0)
    checkLimit = false;

  if (myPos.J + direction.J > lot[0].length - 1)
    checkLimit = false;
  console.log(checkLimit);
  return checkLimit;

}


// Build the main function

function main()
{

  var numRows = 3
  var numColumns = 3
  var lot = [
             [1, 0, 0],
             [1, 0, 0],
             [1, 9, 1]];

  console.log(removeObs(lot,numRows,numColumns));
}


// MAIN-----------------------------------------------------------------

main();
