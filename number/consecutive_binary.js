'use strict';
// Function to count the consecutive binary numbers with no successive 1 as a string
function countConsecutive(strLength)
{

  //let binaryNumber = decNumber.toString(2) ;
  let binaryDigit = "1";
  let binaryMaxNumber = "";
  let decMaxNumber = 0 ;
  let noConsecutiveIter = 0;
  let binaryNumberStr = "";

  // build the string with the maximum binary number
  for (let i=0; i<=strLength - 1;i++)
  {
    binaryMaxNumber += binaryDigit ;
  }

  // Now get the decimal number based on that binary string
  decMaxNumber = parseInt(binaryMaxNumber, 2);

  // Now loop from zero to that number and check iff 1 repeats itself in the binary string
  for (let j=0; j<=decMaxNumber;j++)
  {
    // Check if consecutive 1 in the binary string
    binaryNumberStr = j.toString(2);
    if (binaryNumberStr.indexOf("11") == -1)
    {
      console.log(binaryNumberStr);
      noConsecutiveIter++;
    }
  }

  //return decMaxNumber;
  return noConsecutiveIter;

}



// Build the main function
function main()
{

  var strLength = 5;

  console.log(countConsecutive(strLength));


}





// MAIN--------------------------------------------------------------------------------

main();
