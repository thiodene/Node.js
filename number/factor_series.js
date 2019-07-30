'use strict';
// Build the function to find the nth number that can be divided by 2,3,5
function factorSeries(nth)
{

  let numberIter = 2;
  let n = 0;
  // Go through iterations until finding the nth divisible number
  while (n < nth)
  {

    if (numberIter % 2 == 0 || numberIter % 3 == 0 || numberIter % 5 == 0)
    {
      n++;
    }

    if (n == nth)
      break;

    numberIter++;
  }

  return numberIter;
}



// Bulild the main function
function main()
{

  var nth = 10;
  console.log(factorSeries(nth));

}


// MAIN------------------------------------------------------------------------------------

main();
