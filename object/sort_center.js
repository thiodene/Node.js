// Sort Center
'use strict';

function sortCenter(truckSpace,packageSpace){

  let spaceunit = 30;
  let currspace = 0;
  let packagecombination = [];

  // For cycle to find 2 different packagesd that would add up to make te he 90 space with 30 security space between them
  for (let i=0; i<=packageSpace.length - 1; i++)
  {

    for (let j=0; j<= packageSpace.length - 1; j++)
    {

      // i end j have to be different to add them as packages
      if( i != j && i < j)
      {

        // Now verify that the adfdition of the 2 packages + 30 doesn't exceed 90
        if ((packageSpace[i] + packageSpace[j] + 30) <= 90)
        {
          currspace = packageSpace[i] + packageSpace[j] + 30;
          packagecombination.push({"pack1":i,"pack2":j,"total_space":currspace});

        }
      }
    }

  }

  // Now sort the combinations by total_space
  packagecombination.sort(function(a,b){ return b.total_space - a.total_space;});

  var maxspace = packagecombination[0].total_space;
  var bestcombination = packagecombination.filter(function(total){ return total.total_space == maxspace;});
  var bestpackage = [bestcombination[0].pack1,bestcombination[0].pack2];

  return bestpackage;
  //return bestcombination;
  //return packagecombination;

}

// Function MAIN

function main(){

    var truckSpace = 90;
    var packageSpace = [1,10,25,35,60] ;

    console.log(sortCenter(truckSpace,packageSpace));

}





// Execute main-------------------------------------------------------------

main();
