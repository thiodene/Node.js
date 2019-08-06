'use strict';
// This function calculates the Next bigger integer having exactly the same digits
function nextBigger(number)
{

  let numberString = String(number);
  let testString = "";
  let biggerIter = number + 1;
  let foundBigger = false;
  let numberArray = [];

  // build the number array
  for (let i=0;i<=numberString.length - 1;i++)
  {
    numberArray.push(numberString.substr(i,1));
  }
  console.log(numberArray);

  while (foundBigger == false)
  {

    testString = String(biggerIter);
    // Test the new number to see if all the digits are there
    numberArray.forEach(function(element){
      testString = testString.replace(element,"");

    });

  //console.log(testString);

    if (testString.length == 0)
    {
      foundBigger = true;
      break;

    }
    else
      biggerIter++;
  }


  return biggerIter;


}


// Build the main function
function main()
{

  //var number = 123456;
  //var number = 111119;
  var number = 1234567890;

  console.log(nextBigger(number));


}



// MAIN------------------------------------------------------

main();
