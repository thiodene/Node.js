'use strict';
// Build the divisible function for numbers between 2 and 9
function findDivisible(number,nth)
{

  // Search for Divisible and included digit
  let divisIter = 0;
  let divisFound = false;
  let result = 0;
  let countN = 0;

  while (divisFound != true)
  {

    if (divisIter % number == 0 && String(divisIter).indexOf(String(number)) != -1)
    {
      if (countN < nth -1)
        countN++;
      else
      {
        result = divisIter;
        divisFound = true;
        break;
      }
    }

    divisIter++;
  }


 return result;

}

// Build the main function
function main()
{

  var number = 7;
  var nth = 3;


  console.log(findDivisible(number,nth));

}




// MAIN-----------------------------------------------------

main();
