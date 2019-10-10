'use strict';
// This function look for a series of words inside of a matrix going any directions
function wordSearch(wordList,wordMatrix)
{

  // Just for the first word try to look for its existence in the Matrix
  let word = wordList[2].toUpperCase();

  let i;
  let j;
  let testWord;
  // Register the 4 directions
  let direction = {};
  let progress = false;
  let myPos;
  let charPos = 0;
  let wordRegister = [];

  for (i = 0;i <=wordMatrix.length - 1;i++)
  {
    for (j = 0; j<=wordMatrix[0].length - 1; j++)
    {
      // Look for the first char that corresponds to the word
      if (wordMatrix[i][j] == word.substr(charPos,1))
      {
        console.log(wordMatrix[i][j]);
        testWord = wordMatrix[i][j];
        myPos = {"I":i,"J":j};
        charPos++;
        // Around the 4 directions, check if you find the next character of the word
        while(testWord.length <= word.length)
        {
          progress = false;
          // Direction +I
          direction = {"I":1,"J":0};
          if (checkPosLimits(wordMatrix,{"I":myPos.I+direction.I,"J":myPos.J+direction.J}))
          {
            console.log("+I1");
            if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == word.substr(charPos,1))
            {
              console.log("+I2");
              myPos.I = myPos.I+direction.I;
              myPos.J = myPos.J+direction.J;
              testWord += wordMatrix[myPos.I][myPos.J] ;
              progress = true;
              charPos++;
            }
          }

          // Direction +J
          direction = {"I":0,"J":1};
          if (checkPosLimits(wordMatrix,{"I":myPos.I+direction.I,"J":myPos.J+direction.J}) && !progress)
          {
            console.log("+J1");
            if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == word.substr(charPos,1))
            {
              console.log("+J2");
              myPos.I = myPos.I+direction.I;
              myPos.J = myPos.J+direction.J;
              testWord += wordMatrix[myPos.I][myPos.J] ;
              progress = true;
              charPos++;
            }
          }

          // Direction -I
          direction = {"I":-1,"J":0};
          if (checkPosLimits(wordMatrix,{"I":myPos.I+direction.I,"J":myPos.J+direction.J}) && !progress)
          {
            console.log("-I1");
            if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == word.substr(charPos,1))
            {
              console.log("-I2");
              myPos.I = myPos.I+direction.I;
              myPos.J = myPos.J+direction.J;
              testWord += wordMatrix[myPos.I][myPos.J] ;
              progress = true;
              charPos++;
            }
          }


          // Direction -J
          direction = {"I":0,"J":-1};
          if (checkPosLimits(wordMatrix,{"I":myPos.I+direction.I,"J":myPos.J+direction.J}) && !progress)
          {
            console.log("-J1");
            if (wordMatrix[myPos.I+direction.I][myPos.J+direction.J] == word.substr(charPos,1))
            {
              console.log("-J2");
              myPos.I = myPos.I+direction.I;
              myPos.J = myPos.J+direction.J;
              testWord += wordMatrix[myPos.I][myPos.J] ;
              progress = true;
              charPos++;
            }
          }

          // If no progress in the word just get out
          if (!progress)
            break;

          if (progress && charPos == word.length)
            wordRegister.push(word);

        }
      }

    }

  }

  return wordRegister;
  //return testWord;
  //return wordList;
}

// Check if the move is inside the limits of the lot
function checkPosLimits(matrix,newPos)
{
  let withinLimits = true;

  // Check on I
  if (newPos.I < 0)
    withinLimits = false;

  if (newPos.I > matrix.length - 1)
    withinLimits = false;

  // Check on J
  if (newPos.J < 0)
    withinLimits = false;

  if (newPos.J > matrix[0].length - 1)
    withinLimits = false;

  console.log(withinLimits);
  return withinLimits;

}


// Function main

function main()
{

  var wordList = ["confident","apple","aonecode","elegant","graceful","delightful"];
  var wordMatrix = [["T","R","G","L","U"],
                    ["P","A","C","E","F"],
                    ["P","O","N","O","D"],
                    ["L","E","E","C","E"],
                    ["E","G","A","N","T"]];


  console.log(wordSearch(wordList,wordMatrix));

}


// MAIN---------------------------------------------------------------------------------------------

main();
