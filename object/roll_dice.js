'use strict';
// Build the function to count thr dice flips of each dice
function rollDice(dices)
{
  // Register the opposite sides of each dice sides
  var diceOpposite = [];
  diceOpposite.push({"side":"1","value":6});
  diceOpposite.push({"side":"2","value":5});
  diceOpposite.push({"side":"3","value":4});
  diceOpposite.push({"side":"4","value":3});
  diceOpposite.push({"side":"5","value":2});
  diceOpposite.push({"side":"6","value":1});

  let minMoves = 0;
  let currentMoves = 0;
  let opp ;
  let i;
  let j;

  // Now go through each dice front value  and calculate the correspoinding moves to get the other dices identical values
  for(let i = 0; i<=dices.length - 1;i++)
  {
    currentMoves = 0;
    // first get the opposite value of that dice front value
    diceOpposite.forEach(function(element){
      if (element.side == dices[i])
        opp = element.value;
    });
    // Go through the rest of the dices values and calculate their flip sides to be equal to the front side of the current dice being checked
    for (j=0;j<=dices.length-1;j++){
      if (j != i)
      {
        // If the dices being checked have different values calculate the number of flips to make them equal!
        if (dices[j] != dices[i] && dices[j] != opp)
        {
          // Just need to flip that dices once
          currentMoves += 1;
          //console.log(dices[i]);
          //console.log(dices[j]);
        }
        else if (dices[i] !=dices[j] && dices[j] == opp)
        {
          currentMoves += 2;
        }
      }

    }

    if (currentMoves < minMoves || minMoves == 0)
      minMoves = currentMoves;


  }
  return minMoves;
}


// Build the main function based on all details

function main()
{
  //var dices = [1,2,3];
  //var dices = [1,1,6];
  //var dices = [1,6,2,3];
  //var dices = [1,2];
  //var dices = [1,1];
  var dices = [6,6,6,1];

  console.log(rollDice(dices));

}


// Execute the main function

main();
