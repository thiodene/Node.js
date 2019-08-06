'use strict';
// This function removes extra characters to make 2 string anagrams
function makeAnagram (string1,string2)
{

  let size1 = string1.length;
  let size2 = string2.length;
  let testString = "";
  let restString = "";
  let testArray = [];
  let testSize = 0;


  // Based on the bigger sized string register the character of the smaller one
  if (size1 >= size2)
  {
    testString = string1;
    for (let i=0;i<=string2.length - 1;i++)
    {
      testArray.push(string2.substr(i,1));

    }
  }
  else
  {
    testString = string2;
    for (let j=0;j<=string1.length - 1;j++)
    {
      testArray.push(string1.substr(j,1));
    }
  }



  // Now make a foreach removing every char of the smaller string in the bigger string and count the size of the rest!
  testArray.forEach(function(element){

    testSize = testString.length;
    testString = testString.replace(element,"");
    if (testString.length == testSize)
    {
      restString += element;

    }
  });

  // Now return the sum of all the characters to remove to make the 2 strings anagrams
  return testString.length + restString.length;

}




// build the main function
function main()
{


  //var string2 = "bcadeh";
  //var string1 = "hea";

  var string1 = "bcaex";
  var string2 = "abcdf";

  //var string1 = "cddgk";
  //var string2 = "gcd";

  console.log(makeAnagram(string1,string2));

}



// MAIN-------------------------------------------------

main();

