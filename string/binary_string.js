'use strict';
// Build a function that finds the numbers of substring starting and ending with a 1
function findBinarySubstring(binaryString)
{

  let i;
  let j;
  let stringIter = 0;
  let testString = "";

  // First check if the character scanned is a 1
  // Stop the scan before the last character to chack if there can be a "11" substring remaining in the end
  for (let i=0;i<=binaryString.length - 2;i++)
  {
    if (binaryString.substr(i,1) == "1")
    {
      // If the char is a "1" check the number of substring ending with 1 from this char to the end of the binary string length
      for (j=2;j<=binaryString.length -i;j++)
      {
        testString = binaryString.substr(i,j);
        // Now test if this string ends with "1" , if yes increment
        if (testString.substr(testString.length -1,1) == "1")
          stringIter++;

      }

    }
  }

  return stringIter;
  //return binaryString;

}


// Buld the main function
function main()
{

  //let binaryString = "01001000 01100101 01101100 01101100 01101111 00100000 01000010 01101001 01101110 01100001 01110010 01111001 00100000 01010111 01101111 01110010 01101100 01100100";
  //let binaryString = "010010000110010101101100011011000110111100100000010000100110100101101110011000010111001001111001001000000101011101101111011100100110110001100100";
  //let binaryString = "0100100001100";
  //let binaryString = "01001000011";
  let binaryString = "01001000011001111110111";

  console.log(findBinarySubstring(binaryString));


}



// MAIN--------------------------------------------------------------------------------------------

main();
