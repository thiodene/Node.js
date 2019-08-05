'use strict';
// This function prints all possible combinations of a given number in its alphabetic mapping
function alphaMapping(number)
{

  let stringNumber = String(number);
  let combinations = [];

  let alphaNum = [];

  let indexLetter = [];
  indexLetter.push("");
  indexLetter.push("a");
  indexLetter.push("b");
  indexLetter.push("c");
  indexLetter.push("d");
  indexLetter.push("e");
  indexLetter.push("f");
  indexLetter.push("g");
  indexLetter.push("h");
  indexLetter.push("i");
  indexLetter.push("j");
  indexLetter.push("k");
  indexLetter.push("l");
  indexLetter.push("m");
  indexLetter.push("n");
  indexLetter.push("o");
  indexLetter.push("p");
  indexLetter.push("q");
  indexLetter.push("r");
  indexLetter.push("s");
  indexLetter.push("t");
  indexLetter.push("u");
  indexLetter.push("v");
  indexLetter.push("w");
  indexLetter.push("x");
  indexLetter.push("y");
  indexLetter.push("z");

  // Put all the different combinations 1 character long  in array
  for (let i=0;i<=stringNumber.length -1;i++)
  {
    for(let j=1;j<=2;j++)
    {
      if (!(i == stringNumber.length - 1 && j == 2))
      {
        // Check if that combination doesnt already exist in the array
        if (combinations.indexOf(stringNumber.substr(i,j)) == -1)
        {
          // The numberic value of that combination has to be < = 26
          if (Number(stringNumber.substr(i,j)) <= 26)
          {
            // Check if the first char is a "0"
            if (stringNumber.substr(i,1) != "0")
              combinations.push(stringNumber.substr(i,j));
          }
        }
      }
    }

  }

  // Need at least stringNumber.length rounds to add the letters together
  let n = 0;
  let k;
  let l;
  // Initially give buildCombi the different letters
  let buildCombi = [];
  //buildCombi = combinations;

  // Start building BuildCombi
  combinations.forEach(function(element){
    buildCombi.push({"NumberStr":element,"LetterStr":indexLetter[Number(element)]});
  });

  while (n <= stringNumber.length - 1)
  {
    for(k = 0;k<=buildCombi.length - 1;k++)
    {
      for (l=0;l<=combinations.length - 1;l++)
      {
        // Check if that constructed substring exists, if yes store it
        if (stringNumber.indexOf(buildCombi[k].NumberStr + combinations[l]) != -1)
          buildCombi.push({"NumberStr":buildCombi[k].NumberStr + combinations[l],"LetterStr":buildCombi[k].LetterStr + indexLetter[Number(combinations[l])]});
      }

    }
    n++;
  }


  // Build the final array of letter elements corresponding to the number
  let numberArray = [];
  buildCombi.forEach(function(element){
    if (element.NumberStr == stringNumber && numberArray.indexOf(element.LetterStr) == -1)
      numberArray.push(element.LetterStr);
  });

  return numberArray;
  //return buildCombi;
  //return combinations;
  //return alphaNum;
}


function main()
{

  //var number = 1;
  //var number = 12;
  var number = 121;
  //var number = 1219;
  //var number = 123456;
  //var number = 20234567;
  //var number = 1231234;
  //var number = 1111111110;
  console.log(alphaMapping(number));



}


// MAIN-----------------------------------------------------------------------------------

main();
