'use strict';
// Function separates the words from a phrase without spaces
function separateWords(phrase,words)
{

  let testPhrase = phrase;
  let wordIter = 1;
  let checkPoint = 0;
  let wordRegister = [];

  // First sort the list of words from largest to smallest
  words.sort(function(a,b){
    return b.length - a.length;
  });

  // Now go through the phrase char by char and based on the letters check if the word is not already in the group of words
  while (wordIter <= testPhrase.length)
  {

    // Check the very first character of that phrase and look for a corresponding word starting with that letter
    firstLetter = testPhrase.substr(0,wordIter);

    wordIter++;
  }


  return words;

}


// Build the function main
function main()
{

  var phrase = "thequickbrownfoxjumpoverlazydog";
  var words = ["the", "quick", "brown", "fox", "jump", "over", "lazy", "dog"];

  var phrase = "theneedforspeed";
  var words = ["the","then","need","for","speed"];

  console.log(separateWords(phrase,words));


}


// MAIN--------------------------------------------------------------------------------

main();
