'use strict';
// This fu nction calculates the all the possible configurations of a string of characters
function noRepeatCharacter(thisString)
{

  // First register all the dfifferent characters in one array
  let charRegister = [];
  let thisChar = "";
  let m;
  let n;
  for (let i=0;i<=thisString.length - 1;i++)
  {
     thisChar = thisString.substr(i,1);
     //if (charRegister.indexOf(thisChar) == -1)
     charRegister.push(thisChar);
  }

  let sizeIter = 1;
  let charBuild = [];
  charRegister.forEach(function(element){
    charBuild.push({"String":element,"Length":element.length});
  });

  //charBuild = charRegister;
  //console.log(charBuild);
  let mLimit;
  while (sizeIter < thisString.length)
  {
    mLimit = charBuild.length;
    for(m=0; m<=mLimit - 1; m++)
    {
      for(n=0;n<=charRegister.length - 1;n++)
      {
        charBuild.push({"String":charBuild[m].String + charRegister[n],"Length":charBuild[m].Length + charRegister[n].length});
        //console.log(charBuild[m].String + charRegister[n]);
      }

    }
    sizeIter++;
  }

  // Filter the result and keep only those with same number of characters
  // Remove all string with less that thisString length characters
  let fitBuild = [];
  fitBuild = charBuild.filter(function(element){
    return element.Length == thisString.length;
  });

  let checkBuild = [];
  let norepetition = false;
  // Now just get the string having exactly thew same group of characters as This String
  fitBuild.forEach(function(element){
    if (checkAllElement(element.String,charRegister))
    {
      checkBuild.push(element);
      if (!checkConsecutive(element.String,charRegister))
        norepetition = true;
    }

  });

  return norepetition;
  //return checkBuild;
  //return fitBuild;
  //return charRegister;
  //return charBuild;
}

// This function check if all the elements of a matrix of characters are represented in a string
function checkAllElement(string,elements)
{
  let testString = string;
  let result = false;

  elements.forEach(function(e){
    testString = testString.replace(e,"");
  });
  //console.log(testString);
  if (testString.length == 0)
    result = true;

  return result;
}

  // This function check if there are any consecutive chars in it like "aa" or "cc"
function checkConsecutive(string,elements)
{
  let result = false;

  elements.forEach(function(e){
    if (string.indexOf(e+e) != -1)
      result = true;
  });

  return result;

}


// Buold the main function
function main()
{

  //var thisString = "abcd";
  //var thisString = "aaabc";
  //var thisString = "aaabb";
  //var thisString = "ab";

  var thisString = "eaaabc";
  //var thisString = "aaaaabc";

  console.log(noRepeatCharacter(thisString));
}



// MAIN-----------------------------------------------------------

main();
