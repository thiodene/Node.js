'use strict';
// This fonction calculates the anagrams of a string and find all the occurences into a larger string
function findAnagrams(fullString, subString)
{

  // Sepearate the substring into single characters in an array
  let subArray = [];
  let subCombinations;
  let subOccurr = [] ;
  let combi;
  for (let i = 0;i<=subString.length - 1;i++)
  {
    subArray.push(subString.substr(i,1));

  }

  // Get the differenct combvinations from the Heap algorithm
  subCombinations = permute(subArray);

  // Construct the anagram strings
  for (let j=0;j<=subCombinations.length - 1;j++)
  {
    combi = "";
    subCombinations[j].forEach(function(element){
      combi += element;
    });
    subOccurr.push(combi);
  }

  console.log(fullString.indexOf(subOccurr[0]));

  let positions = [];
  let m; let n;
  // Now register all positions of the anagram
  for (m=0;m<=subOccurr.length - 1;m++)
  {
    for (n=0;n<=fullString.length - subOccurr[m].length;n++)
    {
      if (fullString.substr(n,subOccurr[m].length) == subOccurr[m])
        positions.push(n);
    }
  }

  return positions;
  //return subOccurr;
  //return subCombinations;
  //return subArray;
  //return subString;

}


// Heap algorithm claculating all the different combinations of a series of characters
function permute(permutation)
{
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length)
  {
    if (c[i] < i)
    {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    }
    else
    {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

//console.log(permute([1, 2, 3]));



// Build the main function
function main()
{

  var fullString = "ABCDBACDAB";
  //var subString = "AB";
  var subString = "ABC";

  console.log(findAnagrams(fullString, subString));

  // Time complexity for Heap algorithm:
  // The following very efficient algorithm uses Heap's method to generate all permutations of N elements
  // with runtime complexity in O(N!):

}




// MAIN------------------------------------------------------------------------------------------------------------------

main();
