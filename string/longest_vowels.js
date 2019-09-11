'use strict';
// Calculate the longest string substring made of only voewls
// By removing 2 substrings only get the largest string made of only vowels
function longestVowels(n,phrase1,phrase2)
{

  let vowels = ["a","e","i","o","u"];
  let registerVowelString = [];
  let i;
  let j;
  let testString = "";
  let longest = 0;
  // First thing to do is a list of the longest substring in the string
  for (i=0;i<=phrase1.length - 1; i++)
  {
    // First look for a voewl in the phrase
    if (vowels.indexOf(phrase1.substr(i,1)) != -1)
    {

      for (j=1;j<=phrase1.length - i;j++)
      {
        testString = phrase1.substr(i,j);
        // Now remove all voewls from that substring and see if anything remains
        vowels.forEach(function(element){
          testString = testString.replace(new RegExp(element,"gi"),"");
        });

        // Now test if the teststring is empty
        if (testString.length == 0)
          registerVowelString.push({"I":i,"Length":j});
      }
    }
  }

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

  console.log(zeroPosLength);

  // The biggest one at end position (if any)--------------------------------------------------------------
  let endPosLength = 0;
  let phraseLength = phrase1.length;
  //console.log(phraseLength);
  let endPosVowel = registerVowelString.filter(function(element){
    return element.I + element.Length == phraseLength;
  });
  endPosVowel.sort(function(a,b){
    return b.Length - a.Length;
  });
  if (endPosVowel.length > 0)
    endPosLength = endPosVowel[0].Length;

  console.log(endPosLength);

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

  console.log(betweenPosLength);

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


  //console.log(longest);
  return scenario[0].Total;
  //return registerVowelString;
}


// build the main function
function main()
{

  var n = 2;
  var phrase1 = "earthproblem";
  var phrase2 = "letsgosomewhere";

  console.log(longestVowels(n, phrase1, phrase2));

}



// MAIN--------------------------------------------------------------------------

main();
