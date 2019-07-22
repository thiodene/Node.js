'use strict';
// Function Search for word inside of matrix of characters
function countWords(charMatrix,word){
  let result = "";
  let ucword = word.toUpperCase();
  //console.log(ucword);
  let wordOccur = 0;
  let i;
  let j;
  let dirOne;
  let wordOne;
  let dirTwo;
  let wordTwo;
  let dirThree;
  let wordThree;
  let dirFour;
  let wordFour;
  let dirFive;
  let wordFive;
  let dirSix;
  let wordSix;
  let dirSeven;
  let wordSeven;
  let dirEight;
  let wordEight;

  // Determine the word size before looking for it in the Matrix
  let wordSize = word.length;

  // Determine the dimensions of the Matrix
  let iMax = charMatrix.length;
  let jMax = charMatrix[0].length;

    // Go through the matrix char per char and check the presence of that word in it
  for (let i=0; i<=charMatrix.length - 1;i++)
  {

    for (let j=0; j<=charMatrix[0].length - 1; j++)
    {

      // First check if the first letter is the same as the word
      if (ucword.substr(0,1) == charMatrix[i][j])
      {

        //console.log(charMatrix[i][j]);

        // if yes put the word together in all direction and compare to full word
        // First start with the 4 main directions
        if (j<=jMax-wordSize)
        {
          dirOne = 0;
          wordOne = "";
          while (dirOne <= wordSize-1){
            wordOne += charMatrix[i][j+dirOne];
            dirOne++;
          }
          //console.log(wordOne);
          if (wordOne == ucword)
            wordOccur++;
        }


        if (j>= wordSize-1)
        {
          dirTwo = 0;
          wordTwo = "";
          while (dirTwo >= 1-wordSize){
            wordTwo += charMatrix[i][j+dirTwo];
            dirTwo--;
          }
          //console.log(wordTwo);
          if (wordTwo == ucword)
            wordOccur++;
        }

        if (i<=iMax-wordSize)
        {
          dirThree = 0;
          wordThree = "";
          while (dirThree <= wordSize-1){
            wordThree += charMatrix[i+dirThree][j];
            dirThree++;
          }
          console.log(wordThree);
          if (wordThree == ucword)
            wordOccur++;
        }

        if (i>= wordSize-1)
        {

          dirFour = 0;
          wordFour = "";
          while (dirFour >= 1-wordSize){
            wordFour += charMatrix[i+dirFour][j];
            dirFour--;
          }
          if (wordFour == ucword)
            wordOccur++;


        }
        // Then finish with the 4 oblique directions
        if (j<=jMax-wordSize && i<=iMax-wordSize)
        {
          dirSeven = 0;
          wordSeven = "";
          while (dirSeven <= wordSize-1){
            wordSeven += charMatrix[i+dirSeven][j+dirSeven];
            dirSeven++;
          }
          //console.log(wordSeven);
          if (wordSeven == ucword)
            wordOccur++;
        }

        if (j<=jMax-wordSize && i>= wordSize-1)
        {
          dirFive = 0;
          wordFive = "";
          while (dirFive <= wordSize-1){
            wordFive += charMatrix[i-dirFive][j+dirFive];
            dirFive++;
          }
          //console.log(wordFive);
          if (wordFive == ucword)
            wordOccur++;
        }


        if (j>= wordSize-1 && i<=iMax-wordSize)
        {

          dirSix = 0;
          wordSix = "";
          while (dirSix <= wordSize-1){
            wordSix += charMatrix[i+dirSix][j-dirSix];
            dirSix++;
          }
          if (wordSix == ucword)
            wordOccur++;


        }



        if (j>= wordSize-1 && i>= wordSize-1)
        {
          dirEight = 0;
          wordEight = "";
          while (dirEight >= 1-wordSize){
            wordEight += charMatrix[i+dirEight][j+dirEight];
            dirEight--;
          }
          //console.log(wordEight);
          if (wordEight == ucword)
            wordOccur++;
        }





      }

    }

  }

  //result = charMatrix[i][j];
  //return result;
  return wordOccur;
}



// Functiona main and all the details inside
function main()
{

  var charMatrix = [] ;
  //var word = "small";
  //var word = "llams";
  //var word = "jim";
  //var word = "teen";
  //var word = "molecule";
  var word = "iota";
  var word = "pie";

  charMatrix.push(["T","H","S","M","A","L","L","T","R","P","T","L","A"]);
  charMatrix.push(["E","A","P","C","R","S","R","P","S","P","B","L","S"]);
  charMatrix.push(["E","L","I","C","F","T","O","S","P","A","R","Q","H"]);
  charMatrix.push(["N","I","H","D","E","T","S","E","R","I","U","V","C"]);
  charMatrix.push(["N","B","C","D","W","U","S","J","J","I","Y","B","D"]);
  charMatrix.push(["Y","M","A","E","S","Y","C","E","N","O","T","N","Y"]);
  charMatrix.push(["P","I","E","T","G","N","L","N","G","T","D","S","J"]);
  charMatrix.push(["P","S","C","U","D","U","E","G","C","A","A","G","G"]);
  charMatrix.push(["O","T","G","G","C","B","W","U","W","J","E","J","S"]);
  charMatrix.push(["I","Q","L","E","A","V","Q","A","Q","N","T","T","D"]);
  charMatrix.push(["N","D","L","S","D","C","A","H","T","M","R","E","R"]);
  charMatrix.push(["T","O","C","T","G","H","J","H","D","O","E","T","Y"]);
  charMatrix.push(["M","G","M","N","E","E","T","Y","Y","U","I","O","P"]);

  //console.log(charMatrix);

  console.log(countWords(charMatrix,word));
}



// MAIN -----------------------------------------------------------------------

main();


