'use strict';
// Build the maze function to solve it and give out the number of move to get to the solution
function solveMaze(maze)
{

  let debutPos = {"I":0,"J":0};
  let endPos = {};
  let lastPos = {};
  let waitlastPos = {};
  let currentPos = {};
  let posPath = [];
  let moveIter = 0;

  // Get the debut position  and position first
  for (let i=0;i<=maze.length - 1;i++)
  {
    for (let j=0;j<=maze[0].length - 1;j++)
    {
      if (maze[i][j] == -1)
        endPos = {"I":i,"J":j};
    }

  }
  // Give the debut position to current position
  currentPos = debutPos;

  // Considering the initial position to be 0,0 -> move either Down or right before looping!
  if (maze[debutPos.I + 1][debutPos.J]  == 0)
  {
    // make the move and give last position to last pos
    lastPos = currentPos;
    currentPos = {"I":debutPos.I + 1,"J":debutPos.J};
    moveIter++ ;
  }
  else if (maze[debutPos.I][debutPos.J + 1]  == 0)
  {
    // Make the move and give last position to last pos
    lastPos = currentPos;
    currentPos = {"I":debutPos.I,"J":debutPos.J+1};
    moveIter++;
  }
  else
    return false;


  // based on the last and current position go the opposite way!
  //if not possible change direction // New direction different from lastPos!
  while (currentPos != endPos)
  {
    if (maze[currentPos.I+currentPos.I-lastPos.I][currentPos.J+currentPos.J-lastPos.J] == 0)
    {
      // make the move
      waitlastPos = currentPos;
      currentPos = {"I":currentPos.I+currentPos.I-lastPos.I,"J":currentPos.J+currentPos.J-lastPos.J};
      lastPos = waitlastPos;
      moveIter++;

    }
    else if(newPos = checkPossibleDir(maze,currentPos,lastPos))
    {
      // If new direction then make the move
      waitlastPos = currentPos;
      currentPos = {"I":newPos.I,"J":newPos.J};
      lastPos = waitlastPos;
      moveIter++;
    }
    else
      break;
  }

  //checkPossibleDir();
  console.log(lastPos);
  return currentPos;
}

//function checkPossibleDir(maze,currentPos,lastPos)
//{
  // Check for new position around current that isn't equal to last Position
  let x = 1;

  // check if going right is okt
  if (maze[currentPos.I][currentPos.J+x] == 0)
  {


  }
  else
  {

  }

//}

// Build the main function with the maze
function main()
{

  // final position  on this maze is -1
  var maze = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [ 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [ 0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
    [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
  ];

  console.log(solveMaze(maze));

}


//MAIN---------------------------------------------------------------------------

main();
