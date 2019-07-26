'use strict';
// Build function to find the largest palindrome
function findPalindrome(multiString)
{

  let subString = "";
  let stringArray = [{"String":"","Length":0}];

  let k;
  let l;
  // Go through each possible substring of the multiString and test their palindrome qualities
  for (k=0;k<=multiString.length-1;k++)
  {
    for (l=1;l<=multiString.length -k;l++)
    {
      subString = multiString.substr(k,l);
      // Test if the substring is a palindrome
      if (isPalindrome(subString))
      {
        if (subString.length > stringArray[stringArray.length - 1].Length)
          stringArray.push({"String":subString,"Length":subString.length});
      }

    }

  }


  //return subString;
  return stringArray;
}


function isPalindrome(palinString)
{
  let verification = true;

  for(let i=0;i<=palinString.length - 1; i++)
  {
    if (palinString.substr(i,1) != palinString.substr(palinString.length -1 - i, 1))
      verification = false;

  }

  return verification;
}

// Build the main function
function main()
{

  //var multiString = "abcxyzyxabcdaaa";
  //var multiString = "lollolkidding";
  //var multiString = "acbaabca";
  var multiString = "acbaabad";
  console.log(findPalindrome(multiString));


}



// MAIN-------------------------------------------------------------

main();
