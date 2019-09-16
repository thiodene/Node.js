'use strict';
// This function search for a word included in a Matrix not only linerarly!
function searchWord(wordList,wordMatrix)
{
  let testWord = "";
  let testPositions = [];
  let m; let n;
  let result = [];
  let direction = {};
  let wordIter = 0;
  let myPos = {};
  let buildWord = "";
  let wordValidated;
  let hasMoved;
  // First get the first wsord converted to lowercase
  for (let i=0;i<=wordList.length - 1;i++)
  {
    // COnvert theat word to higher case\
    testWord = wordList[i].toUpperCase();
    console.log(testWord);

    // Loop through all the characters of the wordMatrix
    for (m = 0;m<=wordMatrix.length - 1;m++)
    {

      for (n=0;n<=wordMatrix[0].length - 1;n++)
      {
        // First try to find the first letter and if so go through the rest of the word
        if (wordMatrix[m][n] == testWord.substr(0,1))
        {
          // Now look for possibility to find the whoele word starting from this latter
          buildWord = testWord.substr(0,1);
          wordValidated = true;
          wordIter = 1;
          myPos = {"I":m,"J":n};
          while (wordValidated)
          {
            // Try to complete the word starting with first char
            // Try the 4 different directions
            direction = {"I":1,"J":0};
            hasMoved = false;
            if (checkMoveLimits(wordMatrix,myPos,direction))
            {
              if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == testWord.substr(wordIter,1))
              {
                buildWord += testWord.substr(wordIter,1);
                myPos.I = myPos.I+direction.I;
                myPos.J = myPos.J+direction.J;
                hasMoved = true;
              }
            }
            direction = {"I":0,"J":1};
            if (checkMoveLimits(wordMatrix,myPos,direction) && !hasMoved)
            {
              if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == testWord.substr(wordIter,1))
              {
                buildWord += testWord.substr(wordIter,1);
                myPos.I = myPos.I+direction.I;
                myPos.J = myPos.J+direction.J;
                hasMoved = true;
              }
            }


            direction = {"I":-1,"J":0};
            if (checkMoveLimits(wordMatrix,myPos,direction) && !hasMoved)
            {
              if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == testWord.substr(wordIter,1))
              {
                buildWord += testWord.substr(wordIter,1);
                myPos.I = myPos.I+direction.I;
                myPos.J = myPos.J+direction.J;
                hasMoved = true;
              }
            }


            direction = {"I":0,"J":-1};
            if (checkMoveLimits(wordMatrix,myPos,direction) && !hasMoved)
            {
              if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == testWord.substr(wordIter,1))
              {
                buildWord += testWord.substr(wordIter,1);
                myPos.I = myPos.I+direction.I;
                myPos.J = myPos.J+direction.J;
                hasMoved = true;
              }
            }

            console.log(buildWord);

            if (hasMoved)
              wordIter++;
            // IF Word being constructed reach same size as testWord break and validate
            if (wordIter == testWord.length && testWord == buildWord)
            {
              // If partst that point wordValidated is still true save the word
              if (result.indexOf(testWord) == -1)
                result.push(testWord);
              break;
            }

            // If it doesnt find the right word
            if (!hasMoved)
            {
              wordValidated = false;
              break;
            }
          }
        }
      }

    }

  }
  //return wordMatrix;
  return result;
}

// Build the main function
function main()
{

  var wordList = ["confident","apple","aonecode","elegant","graceful","delightful"];
  var wordMatrix = [["T","R","G","L","U"],
                    ["P","A","C","E","F"],
                    ["P","O","N","O","D"],
                    ["L","E","E","C","E"],
                    ["E","G","A","N","T"]];

  console.log(searchWord(wordList,wordMatrix));
}

function checkRegisteredChar(registerChar,testCharPos)
{
  let isRegistered = false;
  registerChar.forEach(function(element){
    if (element.Char == testCharPos.Char && element.I == testCharPos.I && element.J == testCharPos.J)
      isRegistered = true;
  });

  return isRegistered ;
}

// Check if the move is inside the limits of the lot
function checkMoveLimits(wordMatrix,myPos,direction)
{
  let checkLimit = true;

  if (myPos.I + direction.I < 0)
    checkLimit = false;

  if (myPos.I + direction.I > wordMatrix.length - 1)
    checkLimit = false;

  if (myPos.J + direction.J < 0)
    checkLimit = false;

  if (myPos.J + direction.J > wordMatrix[0].length - 1)
    checkLimit = false;
  //console.log(checkLimit);
  return checkLimit;

}


// MAIN-------------------------------------------------------------

main();
