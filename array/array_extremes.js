'use strict';
// Function compare the array
function arrayCompare(myArray)
{

  // Loop from the beginning and end of the array and compare keys and values
  let result = 0;
  outer_loop:
  for(let i = 0; i<=myArray.length - 1; i++)
  {

    for (let j=myArray.length - 1; j>=0; j--)
    {

      if (myArray[j] > myArray[i] && j > i){
        result = myArray[j]-myArray[i];
        console.log(i);
        console.log(j);
        break outer_loop;
      }

    }

  }

  return  result;


}



// Build main function
function main()
{

  let myArray = [60,35,25,10,1,9,2,3,1];

  //arrayCompare(myArray);
  console.log(arrayCompare(myArray)) ;

}



// ------------------------------------------

main();
