'use strict';
// Build a function that finds all the permutations of a substring into a larger string
function subPermutation(fullString,subString)
{

  let subLength = subString.length ;
  let subArray = [];
  let checkString = '';
  let checkPosition ;
  let checkResult = false;
  // Store each characters of the substring into an array of object of characters
  for(let k = 0; k<= subString.length - 1; k++)
  {
    subArray.push({"Char":subString.substr(k,1),"Position":k});
  }

  for (let i = 0;i<=fullString.length - subLength;i++)
  {
    // Do a substr of that subString from the full length string and eliminate every character from the origiannal substring
    // If the full elimination = 0 that means that the substring is there any char permutation
    checkString = fullString.substr(i,subLength);


    subArray.forEach(function(element){
      console.log(element.Char);
      checkPosition = checkString.indexOf(element.Char);
      if(checkPosition != -1)
      {
        // Replace only removes one character from a string!
        checkString = checkString.replace(element.Char,"");
      }
    });

    console.log(checkString);
    if (checkString.length == 0)
      checkResult = true;

  }

  //return subArray;
  return checkResult;
}


// Build the main function
function main()
{

  var subString = "l oop ";

  var fullString = "lo  opole";


  console.log(subPermutation(fullString,subString)) ;


}



// MAIN----------------------------------------------------------------------------------

main();

