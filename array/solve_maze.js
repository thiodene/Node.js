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
  let newPos = {};

  // Check the number of possible directions on the cursor's way and register the checkpoints with many paths
  //let numberDir = 0; 
  let numberDir = [];
  let registerCheckPoint = [];
  let isCheckPoint = false;
  let checkPointID = 0;
  let latestCheckPoint;

  // Take the limits of the maze in account
  let maxI = maze.length - 1;
  let maxJ = maze[0].length - 1;

  // Get the debut position  and position first
  for (let i=0;i<=maze.length - 1;i++)
  {
    for (let j=0;j<=maze[0].length - 1;j++)
    {
      if (maze[i][j] == -1)
      {
        endPos = {"I":i,"J":j};
        console.log(endPos);
        // Put the endpos to zero value!
        maze[i][j] = 0;
      }
    }

  }
  // Give the debut position to current position
  currentPos = debutPos;
  checkPointID = posPath.length; // Ulterior ID (Not yet created)
  numberDir = checkMultipleDir(maze,currentPos,debutPos,moveIter,checkPointID);
  if (numberDir.length > 1)
  {
    posPath.push({"I":0,"J":0,"Moves":moveIter,"numberDir":numberDir.length});
    isCheckPoint = true;
  }
  else
    posPath.push({"I":0,"J":0,"Moves":moveIter,"numberDir":numberDir.length}); 

  // Considering the initial position to be 0,0 -> move either Down or right before looping!
  // because need to define the direction
  if (maze[debutPos.I + 1][debutPos.J]  == 0)
  {
    // make the move and give last position to last pos
    lastPos = currentPos;
    currentPos = {"I":debutPos.I + 1,"J":debutPos.J};

    // Check if ischeckpoint is true
    if (isCheckPoint == true)
    {
      numberDir.forEach(function(element){
        if (element.I != currentPos.I || element.J != currentPos.J) 
          registerCheckPoint.push(element);
      });
      isCheckPoint = false;
    }
    moveIter++ ;
    checkPointID = posPath.length; // Ulterior ID (Not yet created)
    numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
    if (numberDir.length > 1)
    {
      posPath.push({"I":debutPos.I + 1,"J":debutPos.J,"Moves":moveIter,"numberDir":numberDir.length});
      isCheckPoint = true;
    }
    else
      posPath.push({"I":debutPos.I + 1,"J":debutPos.J,"Moves":moveIter,"numberDir":numberDir.length});

  }
  else if (maze[debutPos.I][debutPos.J + 1]  == 0)
  {
    // Make the move and give last position to last pos
    lastPos = currentPos;
    currentPos = {"I":debutPos.I,"J":debutPos.J+1};

    // Check if ischeckpoint is true
    if (isCheckPoint == true)
    {
      numberDir.forEach(function(element){
        if (element.I != currentPos.I || element.J != currentPos.J)  
          registerCheckPoint.push(element);
      });
      isCheckPoint = false;
    }


    moveIter++;
    checkPointID = posPath.length; // Ulterior ID (Not yet created)
    numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
    if (numberDir.length > 1)
    {
      posPath.push({"I":debutPos.I + 1,"J":debutPos.J,"Moves":moveIter,"numberDir":numberDir.length});
      isCheckPoint = true;
    }
    else
      posPath.push({"I":debutPos.I + 1,"J":debutPos.J,"Moves":moveIter,"numberDir":numberDir.length});
  }
  else
    return false;

  //console.log(currentPos);
  //console.log(posPath);

  // based on the last and current position go the opposite way! 
  //if not possible change direction // New direction different from lastPos! 
  //while (currentPos != endPos)
  while (currentPos.I != endPos.I || currentPos.J != endPos.J)
  {

    // Check if the cursor can move to a new position
    if ( (currentPos.I+currentPos.I-lastPos.I >= 0 && currentPos.I+currentPos.I-lastPos.I <= maxI) && (currentPos.J+currentPos.J-lastPos.J >= 0 && currentPos.J+currentPos.J-lastPos.J <= maxJ) )
    {
      if (maze[currentPos.I+currentPos.I-lastPos.I][currentPos.J+currentPos.J-lastPos.J] == 0)
      {
        // make the move
        waitlastPos = currentPos;
        currentPos = {"I":currentPos.I+currentPos.I-lastPos.I,"J":currentPos.J+currentPos.J-lastPos.J};
        lastPos = waitlastPos;

        // Check if ischeckpoint is true
        if (isCheckPoint == true)
        {
          numberDir.forEach(function(element){
            if (element.I != currentPos.I || element.J != currentPos.J)  
              registerCheckPoint.push(element);
          });
          isCheckPoint = false;
        }


        moveIter++;
        checkPointID = posPath.length; // Ulterior ID (Not yet created)
        numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
        if (numberDir.length > 1)
        {
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
          isCheckPoint = true;
        } 
        else
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length}); 

      }
      else if(newPos = checkPossibleDir(maze,currentPos,lastPos)) 
      {
        // If new direction then make the move
        waitlastPos = currentPos;
        currentPos = {"I":newPos.I,"J":newPos.J};
        lastPos = waitlastPos;

        // Check if ischeckpoint is true
        if (isCheckPoint == true)
        {
          numberDir.forEach(function(element){
            if (element.I != currentPos.I || element.J != currentPos.J)  
              registerCheckPoint.push(element);
          });
          isCheckPoint = false;
        }


        moveIter++;
        checkPointID = posPath.length; // Ulterior ID (Not yet created)
        numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
        if (numberDir.length > 1)
        {
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
          isCheckPoint = true;
        }
        else
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length}); 
      }
      else
      {   
        // Come back to the latest check point and go its way!
        latestCheckPoint = registerCheckPoint[registerCheckPoint.length - 1];  

        currentPos = {"I":latestCheckPoint.I,"J":latestCheckPoint.J};
        //console.log(latestCheckPoint.fromCheckPoint);
        lastPos = {"I":posPath[latestCheckPoint.fromCheckPoint].I,"J":posPath[latestCheckPoint.fromCheckPoint].J};
        moveIter = latestCheckPoint.Moves;

        checkPointID = posPath.length; // Ulterior ID (Not yet created)
        numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
        if (numberDir.length > 1)
        {
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
          isCheckPoint = true;
        }
        else
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});

        // Lastly remove the latest checkpoint
        //registerCheckPoint.pop;
        registerCheckPoint.splice(registerCheckPoint.length-1,1);
      }
    }
    else
    {
      if(newPos = checkPossibleDir(maze,currentPos,lastPos))
      {
        // If new direction then make the move
        waitlastPos = currentPos;
        currentPos = {"I":newPos.I,"J":newPos.J};
        lastPos = waitlastPos;

        // Check if ischeckpoint is true
        if (isCheckPoint == true)
        {
          numberDir.forEach(function(element){
            if (element.I != currentPos.I || element.J != currentPos.J)  
              registerCheckPoint.push(element);
          });
          isCheckPoint = false;
        }

        moveIter++;
        checkPointID = posPath.length; // Ulterior ID (Not yet created)
        numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
        if (numberDir.length > 1)
        {
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
          isCheckPoint = true;
        }
        else
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
      }
      else
      {
        // Come back to the latest check point and go its way!
        latestCheckPoint = registerCheckPoint[registerCheckPoint.length - 1];  

        currentPos = {"I":latestCheckPoint.I,"J":latestCheckPoint.J};
        //console.log(latestCheckPoint.fromCheckPoint);
        //console.log(latestCheckPoint);
        lastPos = {"I":posPath[latestCheckPoint.fromCheckPoint].I,"J":posPath[latestCheckPoint.fromCheckPoint].J};
        moveIter = latestCheckPoint.Moves;

        checkPointID = posPath.length; // Ulterior ID (Not yet created)
        numberDir = checkMultipleDir(maze,currentPos,lastPos,moveIter,checkPointID);
        if (numberDir.length > 1)
        {
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});
          isCheckPoint = true;
        }
        else
          posPath.push({"I":currentPos.I,"J":currentPos.J,"Moves":moveIter,"numberDir":numberDir.length});

        // Lastly remove the latest checkpoint
        //registerCheckPoint.pop;
        registerCheckPoint.splice(registerCheckPoint.length-1,1);
      }
    }
    console.log(currentPos);
    //if (currentPos.I == endPos.I && currentPos.J == endPos.J)
    //{
      //console.log(moveIter);
      //break;
    //}
  }

  //checkPossibleDir();
  //console.log(lastPos);
  //console.log(posPath);
  console.log(registerCheckPoint);
  return currentPos;
}





// Function checks the number of path possible from the current positionh
function checkMultipleDir(maze,currentPos,lastPos,numberStep,currentID)
{
  let maxI = maze.length - 1;
  let maxJ = maze[0].length - 1;
  //let numberPath = 0;
  let numberPath = [];
  let x = 1;
  
  // check if going down is ok
  if (currentPos.I+x <= maxI)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I+x][currentPos.J] == 0 && (currentPos.I+x != lastPos.I || currentPos.J != lastPos.J) )
    {
      // If yes add it add a new path 
      //numberPath++; 
      numberPath.push({"I":currentPos.I+x,"J":currentPos.J,"Moves":numberStep+1,"fromCheckPoint":currentID});
    }
  }

  // check if going right is ok
  if (currentPos.J+x <= maxJ)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I][currentPos.J+x] == 0 && (currentPos.I != lastPos.I || currentPos.J + x != lastPos.J) )
    {
      // If yes add it add a new path
      //numberPath++;
      numberPath.push({"I":currentPos.I,"J":currentPos.J+x,"Moves":numberStep+1,"fromCheckPoint":currentID});
    } 
  }

  // check if going up is ok
  if (currentPos.I-x >= 0)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I-x][currentPos.J] == 0 && (currentPos.I-x != lastPos.I || currentPos.J != lastPos.J) )
    {
      // If yes add it add a new path
      //numberPath++;
      numberPath.push({"I":currentPos.I-x,"J":currentPos.J,"Moves":numberStep+1,"fromCheckPoint":currentID});
    }
  }

  // check if going left is ok
  if (currentPos.J-x >= 0)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I][currentPos.J-x] == 0 && (currentPos.I != lastPos.I || currentPos.J - x != lastPos.J) )
    {
      // If yes add it add a new path
      //numberPath++;
      numberPath.push({"I":currentPos.I,"J":currentPos.J-x,"Moves":numberStep+1,"fromCheckPoint":currentID});
    }
  }

    return numberPath; 
}





// Function checks the possible other directions from a stopped path
function checkPossibleDir(maze,currentPos,lastPos)
{
  // Check for new position around current that isn't equal to last Position
  let x = 1;
  let newPos = {};

  let maxI = maze.length - 1;
  let maxJ = maze[0].length - 1;

  // check if going down is ok
  if (currentPos.I+x <= maxI)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I+x][currentPos.J] == 0 && (currentPos.I+x != lastPos.I || currentPos.J != lastPos.J) )
    {
      newPos = {"I":currentPos.I+x,"J":currentPos.J};
      return newPos;
    }
  }


  // check if going right is ok
  if (currentPos.J+x <= maxJ)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I][currentPos.J+x] == 0 && (currentPos.I != lastPos.I || currentPos.J + x != lastPos.J) )
    {
      newPos = {"I":currentPos.I,"J":currentPos.J+x};
      return newPos;
    }
  }

  // check if going up is ok
  if (currentPos.I-x >= 0)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I-x][currentPos.J] == 0 && (currentPos.I-x != lastPos.I || currentPos.J != lastPos.J) )
    {
      newPos = {"I":currentPos.I-x,"J":currentPos.J};
      return newPos;
    }
  }


  // check if going left is ok
  if (currentPos.J-x >= 0)
  {
    // Now check if this position is different from last pos
    if (maze[currentPos.I][currentPos.J-x] == 0 && (currentPos.I != lastPos.I || currentPos.J - x != lastPos.J) )
    {
      newPos = {"I":currentPos.I,"J":currentPos.J-x};
      return newPos;
    }
  }


  return false;

}





// Build the main function with the maze
function main()
{

  // final position  on this maze is -1
  var maze = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
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
