'use strict';
// Function to remove alternate duplicates spaces included
function removeAltDuplicate(myString)
{

  let imageString = myString;
  let charList = [];
  let arrSplit = [];
  let j;
  let newString = '';

  // Register each characters in an array
  for (let i=0; i<= myString.length - 1; i++)
  {
    if (charList.indexOf(myString.substr(i,1)) == -1)
      charList.push(myString.substr(i,1)) ;
  }

  // Now go through the string Image and remove all occurences in even positions
  // Use split to remove all occurences and add them back in odd fashion
  charList.forEach(function(element){

    arrSplit = imageString.split(element);
    newString = '' ;
    for(j=0; j<=arrSplit.length - 1; j++)
    {
      if (j%2 == 0)
        newString += arrSplit[j] ;
      else
        newString += element + arrSplit[j];

    }
    imageString = newString;
  });


  //return charList;
  return imageString ;
}



// EBuild the main function
function main()
{

  var myString = "you got beautiful eyes";

  //removeAltDuplicate(myString);
  console.log(removeAltDuplicate(myString));

}


//-------------------------------------MAIN

main();
