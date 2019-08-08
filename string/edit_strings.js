'use strict';
// Build a function that edits a first string to make it requal to the 2nd string
function editStrings(string1,string2)
{

  // Make a loop removing the content of string2 from the string1 characters and check the result in the end
  let testString1 = string1;
  let testString2 = string2;

  let charString1 = [];
  for(let i=0;i<=string1.length - 1;i++)
  {
    charString1.push(string1.substr(i,1));
  }

  //return charString1;


  let remainString1 = [];
  let remainString2 = [];
  let size2;
  // Remove all the common characters from String2
  charString1.forEach(function(element){
    size2 = testString2.length;
    testString2 = testString2.replace(element,"");
    if (size2 == testString2.length)
      remainString1.push(element);

  });

  if(testString2.length > 0)
  {
    for (let j=0;j<=testString2.length - 1;j++)
    {
      remainString2.push(testString2.substr(j,1));
    }

  }

  //return remainString1;

  //console.log(remainString1);
  //console.log(remainString2);


  let m;
  let n;
  let lengther = 0;
  // Try replacing first
  if (remainString1.length > 0 && remainString2.length > 0)
  {
    if (remainString1.length >= remainString2.length)
    {
      lengther = remainString2.length;
      for(m=0;m<=lengther - 1;m++)
      {
        console.log("Replace " + remainString1[m] + " by " + remainString2[m] + ";" );
        remainString1.splice(m,1);
        remainString2.splice(m,1);
      }

    }
    else
    {
      lengther = remainString1.length;
      for(n=0;n<=lengther - 1;n++)
      {
        console.log("Replace " + remainString1[n] + " by " + remainString2[n] + ";" );
        remainString1.splice(n,1);
        remainString2.splice(n,1);
      }

    }

  }

  // Get eventual remove
  if (remainString1 .length > 0)
  {
    for(m=0;m<=remainString1.length - 1;m++)
    {
      console.log("Remove " + remainString1[m] + ";");
    }
  }

  // Get eventual Insert
  if (remainString2.length > 0)
  {
    for(n=0;n<=remainString2.length - 1;n++)
    {
      console.log("Insert " + remainString2[n] + ";");
    }

  }


 return remainString1;

}


// Build the main function
function main()
{

  //var string1 = "geek";
  //var string2 = "gesek";

  var string1 = "cat";
  var string2 = "cut";

  //var string1 = "sunday";
  //var string2 = "saturday";


  console.log(editStrings(string1,string2));

}


// MAIN-----------------------------------------------------------------------------

main();
