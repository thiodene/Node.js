'use strict';
// This function calculates the minimum window in which a set of characters ins found
function minimal_window(phrase,chars)
{

  let charCollect = [];
  let m;
  let n;
  let charIter = 0;
  let minimalWindow = phrase.length;
  let checkWindow = 0;
  let subPhrase = "";
  let testPhrase = "";

  // Register each characters of the chars variable
  for (let i=0;i<=chars.length - 1;i++)
  {
    charCollect.push(chars.substr(i,1));
  }


  // create a loop searching for in which length all the charas can be found within
  // search from minimal window to length of the phrase
  for(m=chars.length;m<=phrase.length;m++)
  {
    for(n=0;n<=phrase.length-m;n++)
    {
      subPhrase = phrase.substr(n,m);
      testPhrase = subPhrase;
      charIter = 0;
      charCollect.forEach(function(element)
      {
        if(testPhrase.indexOf(element) != -1)
        {
          charIter++;
          testPhrase = testPhrase.replace(element,"");
        }
      });

      if (charIter == chars.length)
      {
        if (m <= minimalWindow)
        {
          minimalWindow = m;
          console.log(subPhrase);
        }
      }

    }

  }


  //return char_collect;
  return minimalWindow;
}


// Build the main function
function main()
{

  var phrase = "javascript array pop() method removes the last element from an array and returns that element.";
  //var chars = "tr.a";
  //var chars = "tr.aj";
  //var chars = ")( ";
  //var chars = ")(";
  //var chars = "oo";
  var chars = "ppp";
  console.log(minimal_window(phrase,chars));

}



// MAIN-------------------------------------------------------------------------------------------------

main();
