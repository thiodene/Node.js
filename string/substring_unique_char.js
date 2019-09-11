'use strict';
// This function finds the substring of unique characters inside of a string
function findSubStrings(inputStr, num)
{

  let subList = [];
  let testString = "";
  for (let i=0;i<=inputStr.length - num; i++)
  {
    testString = inputStr.substr(i,num);
    if (testUnique(testString))
      if (subList.indexOf(testString) == -1)
        subList.push(testString);

  }

  return subList;
}


// Function testing if a string has unique set of characters
function testUnique(string)
{
  let charList = [];
  let isUnique = true;
  let testChar = "";
  for (let m = 0;m<=string.length - 1;m++)
  {
    testChar = string.substr(m,1);
    //charList.push(testChar);
    if (charList.indexOf(testChar) != -1)
      isUnique = false;
    charList.push(testChar);
  }


  return isUnique;
}


// Build the main function
function main()
{

  var inputStr = "awaglknagawunagwkwagl";
  var num = 4;


  console.log(findSubStrings(inputStr,num));

}




// MAIN--------------------------------------------------------

main();
