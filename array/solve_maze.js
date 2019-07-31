'use strict';
// Build the maze function to solve it and give out the number of move to get to the solution
function solveMaze(maze)
{
  let finalPos = {};
  let myPos = {"I":0,"J":0};
  let curDir;
  let dirI;
  let dirJ;
  let Opp;

  let checkDown;
  let checkUp;
  let checkRight;
  let checkLeft;

  hasMoved = false;

  // By default the position to move is 1 so Down, 2 so right, 3 so up, and 4 left
  // Define the 4 directions in an object
  let allDir = [];
  allDir.push({"Dir":1,"Opp":3,"I":1,"J":0});  // DOWN
  allDir.push({"Dir":2,"Opp":4,"I":0,"J":1});  // RIGHT
  allDir.push({"Dir":3,"Opp":1,"I":-1,"J":0});  // UP
  allDir.push({"Dir":4,"Opp":2,"I":0,"J":-1});  // LEFT

  // Initial position and direction for the cursor
  let posPath = [{"I":0,"J":0,"Dir":2,"Moves":0, DoublePath:""}];

  // First thing get the coordinates of the final exit
  for(let i=0;i<=maze.length -1;i++)
  {

    for (let j=0; j<=maze[0].length -1;j++)
    {
      if (maze[i][j] == -1)
        finalPos = {"I":i,"J":j};

    }
  }

  // Starting at the 0,0 position try to get tho the maze
  // Travel only posible along 4 main directions, no diagonals
  //while (myPos != finalPos)
  //{

  //}


  // Check the 4 possible directions around myPos
  // Check down
  if (maze[myPos.I+1][myPos.J] !== undefined && maze[myPos.I+1][myPos.J] != 1)
    checkDown = true;
  else
    checkDown = false;
  // Check right
  if (maze[myPos.I][myPos.J+1] !== undefined && maze[myPos.I][myPos.J+1] != 1)
    checkRight = true;
  else
    checkRight = false;
  // Check up
  if (maze[myPos.I-1][myPos.J] !== undefined && maze[myPos.I-1][myPos.J] != 1)
    checkUp = true;
  else
    checkUp = false;
  // Check left
  if (maze[myPos.I][myPos.J-1] !== undefined && maze[myPos.I][myPos.J-1] != 1)
    checkLeft = true;
  else
    checkLeft = false;


  // get the default direction information
  allDir.forEach(function(element){
    if (element.Dir == posPath[posPath.length-1].Dir){
      curDir = element.Dir;
      dirI = element.I;
      dirJ = element.J;
      Opp = element.Opp;
    }
  });


  // If the direction is open go there if not go to the next open direction



  return posPath;
  //return finalPos;

}



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
