'use strict';
// Build a function that separates words from a string based on dictionary group of words
function separateWords(myString,wordArray)
{

  let wordRegister = [];
  let testString = "";
  let foundItem = false;


  // Sort each word with repsect to their size (length)
  wordArray.sort(function(a,b)
  {
    return b.length - a.length;

  });

  console.log(wordArray);

  // Now look for the position of each word in the string and remove it as it goes
  // Go character by character, use the first character and the corresponding words
  while (myString.length > 0)
  {
    foundItem = false;
    // Look for all the words that start with that letter from the longest to the shortest
    //if they are in the beginning of myString remove them and go on
    wordArray.forEach(function(element){
      if(myString.substr(0,element.length) == element && !foundItem)
      {
        myString = myString.replace(element,"");
        wordRegister.push(element);
        foundItem = true;
      }

    });


  }

  return wordRegister;
  //return wordArray;

}


function main()
{

  var myString = "shoppingwithflipkartiseasy";
  var wordArray = [ "shop", "hopping","shopping", "with", "flip", "kart", "flipkart", "is", "easy"];

  console.log(separateWords(myString,wordArray));

}


// MAIN -----------------------------------------------------------------------------------------------------

main();
