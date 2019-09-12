'use strict';
// Calculate the longest string substring made of only voewls
// By removing 2 substrings only get the largest string made of only vowels
function longestVowels(n,phrases)
{

  let vowels = ["a","e","i","o","u"];
  let registerVowelString = [];
  let i;
  let j;
  let testString = "";
  let longest = 0;

  for(let i = 0;i<=phrases.length - 1;i++)
  {

    console.log(phrases[i]);
    console.log(phrases[i].length);
    registerVowelString = getVowelStrings(phrases[i]);
    console.log(registerVowelString);


    // Only 3 types of strings are important
    // The biggest one at zero position (if any)--------------------------------------------------------------
    let zeroPosLength = 0;
    let zeroPosVowel = registerVowelString.filter(function(element){
      return element.I == 0;
    });
    zeroPosVowel.sort(function(a,b){
      return b.Length - a.Length;
    });
    if (zeroPosVowel.length > 0)
      zeroPosLength = zeroPosVowel[0].Length;

    //console.log(zeroPosLength);

    // The biggest one at end position (if any)--------------------------------------------------------------
    let endPosLength = 0;
    let phraseLength = phrases[i].length;
    //console.log(phraseLength);
    let endPosVowel = registerVowelString.filter(function(element){
      return element.I + element.Length == phraseLength;
    });
    endPosVowel.sort(function(a,b){
      return b.Length - a.Length;
    });
    if (endPosVowel.length > 0)
      endPosLength = endPosVowel[0].Length;

    //console.log(endPosLength);
    
    // The biggest one in between (if any)------------------------------------------------------------------
    let betweenPosLength = 0;
    let betweenPosVowel = registerVowelString.filter(function(element){
      return element.I !=0;
    });
    betweenPosVowel = betweenPosVowel.filter(function(element){
      return element.I + element.Length != phraseLength;
    });
    betweenPosVowel.sort(function(a,b){
      return b.Length - a.Length;
    });
    if (betweenPosVowel.length > 0)
      betweenPosLength = betweenPosVowel[0].Length;

    //console.log(betweenPosLength);

    // Now register the possible Scenarios and pick the pibiggest one
    let scenario = [];
    // zero + middle
    scenario.push({"Case":1,"Total":zeroPosLength + betweenPosLength});
    // Zero + end
    scenario.push({"Case":2,"Total":zeroPosLength + endPosLength});
    // end + Between
    scenario.push({"Case":3,"Total":endPosLength + betweenPosLength});
    // Last case Scenario if end and zero and between are all >0
    if (endPosLength > 0 && zeroPosLength > 0 && betweenPosLength > 0)
      scenario.push({"Case":4,"Total":endPosLength+ zeroPosLength + betweenPosLength});

    scenario.sort(function(a,b){
      return b.Total- a.Total;
    });

    console.log(scenario[0].Total);

  }

  //console.log(phrase1);
  //console.log(phrase1.length);
  //registerVowelString = getVowelStrings(phrase1);







  return n;
  //console.log(registerVowelString);

}



// Get all the voewwel string into an array
function getVowelStrings(phrase)
{
  let vowels = ["a","e","i","o","u"];

  let registerVowel = [];
  let isVowelStatus = false;
  let getLetter = "";
  let currentLength = 0;
  let startPos = 0;
  for (let i=0;i<=phrase.length - 1;i++)
  {
     //Check if that position in the string is a vowel
     if (vowels.indexOf(phrase.substr(i,1)) != -1)
     {
       // If vowels are not currently recording
       if (isVowelStatus)
       {
         currentLength++;
       }
       else
       {
         isVowelStatus = true;
         currentLength++;
         startPos = i;
       }
     }
     else
     {
        if (isVowelStatus)
        {
          // Close the vowel string
          isVowelStatus = false;
          registerVowel.push({"I":startPos,"Length":currentLength});
          currentLength = 0;
        }
     }

  }

  // If end of string and status is ON just close the vowel string
  if (isVowelStatus)
  {
    registerVowel.push({"I":startPos,"Length":currentLength});
    isVowelStatus = false;
  }

  return registerVowel;

}


// Build the function main
function main()
{

  //var n = 3;
  //var phrase1 = "earthproblem";
  //var phrase3 = "earthproblemeeeeeeeeeeeee";
  //var phrase2 = "letsgosomewhere";

  var n = 3;
  var phrases = ["earthproblem","letsgosomewhere","earthproblemeeeeeeeeeeeee"];

  console.log(longestVowels(n, phrases));



}


// MAIN--------------------------------------------------------------------------

main();
