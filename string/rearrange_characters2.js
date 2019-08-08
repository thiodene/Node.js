'use strict';
// Cretate a function that counts the possibility of non-repetition of characters in a string
function noRepeatCharacter(thisString)
{

  let charRegister = [];
  // Register all the different characters from the string
  for(let i=0;i<=thisString.length - 1;i++)
  {
    if (charRegister.indexOf(thisString.substr(i,1)) == -1)
      charRegister.push(thisString.substr(i,1));

  }

  let charCount = [];
  // Now register each occurernces of the letters
  charRegister.forEach(function(element){
    charCount.push({"Element":element,"Count":thisString.split(element).length - 1});

  });

  //return charCount;
  //return charRegister;

  let countBiggest = 0;
  let countOthers = 0;
  let charIter = 0;
  // If the most frequent character has less than 2 more occurences than all the others, it's a no repeat
  charCount.forEach(function(element){
    if (charIter == 0)
      countBiggest = element.Count;
    else
      countOthers += element.Count;
    charIter++;
  });

  // Conclude it all and return answer
  if (countOthers > 0)
  {
    // Now get to the conclusion of it all
    if (countBiggest <= countOthers + 1)
    {
      return "Possible to not repeat";
    }
    else
      return "Not Possible" ; //"Repeat";
  }
  else
    return "Not Possible"; //"Repeat";


}

// Build the main function
function main()
{


  var thisString = "abcd";
  //var thisString = "aaabc";
  //var thisString = "aaabb";
  //var thisString = "ab";
  //var thisString = "aa";
  //var thisString = "eaaabc";
  //var thisString = "aaaaabc";

  console.log(noRepeatCharacter(thisString));


}


// MAIN-----------------------------------------------------------------------------------------------------------

main();
