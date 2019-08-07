'use strict';
// Function separates the words from a phrase without spaces
function separateWords(phrase,words)
{

  let testPhrase = phrase;
  let wordIter = 0;
  let checkPoint = 0;
  let wordRegister = [];
  let wordList;
  let wordFromLetter = "";

  // First sort the list of words from largest to smallest
  words.sort(function(a,b){
    return b.length - a.length;
  });

  // Now go through the phrase char by char and based on the letters check if the word is not already in the group of words
  while (wordIter <= testPhrase.length - 1)
  {

    // Check the very first character of that phrase and look for a corresponding word starting with that letter
    wordFromLetter = findWord(words,phrase.substr(wordIter,1));

    // If found words starting with that letter test them to see if they fit the position starting at wordIter
    if (wordFromLetter.length >0)
    {

      wordFromLetter.forEach(function(element){
        if (phrase.indexOf(element) == wordIter){
          wordRegister.push({"word":element,"fromPosition":wordIter});
        }
      });


    }
    wordIter++;
  }

  // Buidld a new matrix with only the zero elements and build the word from them
  let wordFull = wordRegister.filter(function(element){
    return element.fromPosition == 0;
  });


  // Do a while loop adding element and remvoving the ones that cannot be paired goiung forward
  while (wordRegister.length > 1)
  {
    for(m=0;m<=wordRegister.length - 1;m++)
    {


    }

  }

  
  
  // Do a while loop adding element and remvoving the ones that cannot be paired goiung forward
  while (wordRegister.length > 1)
  {
    for(m=0;m<=wordRegister.length - 1;m++)
    {


    }

  }

  //wordList = findWord(words,phrase.substr(0,1));

  return wordRegister;
  //return wordList;
  //return words;

}


 // Find words beginning from a letter and return
function findWord(words,letter)
{
  let selection = [];
  selection = words.filter(function(element){
    return element.substr(0,1) == letter;
  });

  return selection;

}

// Build the function main
function main()
{

  //var phrase = "thequickbrownfoxjumpoverlazydog";
  var words = ["the", "quick", "brown", "fox", "jump", "over", "lazy", "dog", "theme", "then", "need", "for", "speed"];

  var phrase = "theneedforspeed";
  //var words = ["the","then","need","for","speed"];

  console.log(separateWords(phrase,words));


}


// MAIN--------------------------------------------------------------------------------

main();

