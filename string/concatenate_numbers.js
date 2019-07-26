'use strict';
// this function concatenates a series of numbers and calculate their max value
function concatNumbers(numberList)
{

  // frist transform numberList into stringList
  let stringList = [];
  let stringObject = {};
  //build stringList from numberList
  numberList.forEach(function(element){
    stringList.push(String(element));
  });

  while (stringList.length > 1)
  {

    // Return the biggest
    stringObject = returnBiggest(stringList);

    // Remove the 2 string numbers that were concatenated
    stringList.splice(stringObject.posOne,1);
    stringList.splice(stringObject.posTwo,1);


    // Push the new concatenated number (string)
    stringList.push(stringObject.Total);
  }

  //return Number(stringList[0]);
  //return stringObject;
  return stringList;

}function returnBiggest(stringArray)
{

  let arrayBiggest = [{"Total":"","posOne":0,"posTwo":0}];
  let stringTotal = "";
  let revstringTotal = "";
  // compare thwo record of the array and return the biggest one
  for (let i=0;i<=stringArray.length - 1; i++)
  {
    for (let j=0;j<=stringArray.length - 1;j++)
    {
      if (i != j)
      {
        stringTotal = stringArray[i] + stringArray[j];
        revstringTotal = stringArray[j] + stringArray[i];
        if (stringTotal > arrayBiggest[arrayBiggest.length - 1].Total)
        {
          if (i > j)
            arrayBiggest.push({"Total":stringTotal,"posOne":i,"posTwo":j});
          else
            arrayBiggest.push({"Total":stringTotal,"posOne":j,"posTwo":i});

        }

        if (revstringTotal > arrayBiggest[arrayBiggest.length - 1].Total)
        {
          if (i > j)
            arrayBiggest.push({"Total":revstringTotal,"posOne":i,"posTwo":j});
          else
            arrayBiggest.push({"Total":revstringTotal,"posOne":j,"posTwo":i});
        }

      }

    }

  }

  return arrayBiggest[arrayBiggest.length - 1];

}


// Build the Main function
function main()
{

  //var numberList = [9,93,24,6];
  //var numberList = [1,34,3,98,9,76,45,4];
  //var numberList = [54,546,548,60];
  //var numberList = [1,4,18,96];
  var numberList = [54,546,6,548,60];

  console.log(concatNumbers(numberList));

}



// MAIN-------------------------------------------------------------

main();


