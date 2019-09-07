'use strict';
// Function calculating the cell state
function cellState(cells,rounds)
{
  let currentCell = [];
  //currentCell = cells;
  let transCell = [];

  cells.forEach(function(element){
    currentCell.push(element);
    //transCell.push(element);
  });

  let j;
  let k;
  console.log(transCell);

  for(let i=1;i<=rounds;i++)
  {

    // Go through each cell state and change the currentCell accordingly
    for(j=0;j<=currentCell.length - 1;j++)
    {
      //console.log(currentCell[j]);
      console.log(transCell);
      if (j == 0)
      {
        if (currentCell[j+1] == 1)
        {
          transCell.push(1);
          console.log("case 1");
          console.log(currentCell[j+1]);
        }
        else
        {
          transCell.push(0);
          console.log("case 2");
          console.log(currentCell[j+1]);
        }
      }
      else if (j == currentCell.length - 1)
      {
        if (currentCell[j-1] == 1)
        {
          transCell.push(1);
          console.log("case 3");
          console.log(currentCell[j-1]);
        }
        else
        {
          transCell.push(0);
          console.log("case 4");
          console.log(currentCell[j-1]);
        }
      }
      else
      {
        if (currentCell[j-1] != currentCell[j+1])
        {
          transCell.push(1);
          console.log("case 5");
          console.log(currentCell[j-1]);
          console.log(currentCell[j+1]);
        }
        else
        {
          transCell.push(0);
          console.log("case 6");
          console.log(currentCell[j-1]);
          console.log(currentCell[j+1]);
        }
      }
      //console.log(transCell[j]);
    }

    console.log(transCell);
    // now give the values of transCell to currentCell;
    currentCell = [];
    transCell.forEach(function(el){
      currentCell.push(el);
    });
    transCell = [];
    console.log(currentCell);
  }


  return currentCell;
}



// Build the main function
function main()
{

  //var cells = [1, 0, 0, 0, 0, 1, 0, 0];
  //var rounds = 1;

  var cells = [1, 1, 1, 0, 1, 1, 1, 1];
  var rounds = 2;

  console.log(cellState(cells,rounds));
}




// MAIN-----------------------------------------------------

main();
