'use strict' ;

// Function
function sortLogfile(logFileSize, logLines)
{

  // Get all the arrays in the same order as in the log file
  // Clean up the spacing of the Log File
  let newLogLines = logLines  ;
  let newArrayLogLines = [];

  let numArrayLogLines = [];
  let charArrayLogLines = [];
  let arrResult = [];

  let record = '';
  let arrRecord = [];
  newLogLines = newLogLines.replace(/\s\s+/g, ' ');
  newLogLines = newLogLines.trim();

  // Now replace all "] [" with ","
  //newLogLines = newLogLines.replace("] [",",");
  newLogLines = newLogLines.replace(/\] \[/g, ",");

  // Replace front and back "["
  newLogLines = newLogLines.replace("[","");
  newLogLines = newLogLines.replace("]","");

  // Explode the records by ","
  let arrLogLines = newLogLines.split(",");

  for (let key in arrLogLines)
  {

    // Split Element by space to check them individually
    // Array of objects where the first record is a key rest is value
    //replace the first space by :
    record = arrLogLines[key].replace(" ",":");

    // now split with : and create the object
    arrRecord = record.split(":");

    // Now push this record into the array
    newArrayLogLines.push({"Key":arrRecord[0],"Value":arrRecord[1]});

    // Go through the same records and separate the numeric ones to the alpha ones
    if (isNaN(Number(arrRecord[1].split(" ")[0])))
      charArrayLogLines.push({"Key":arrRecord[0], "Value":arrRecord[1]});
    else
      numArrayLogLines.push({"Key":arrRecord[0], "Value":arrRecord[1]});
  }

    // Now sort the Alpha and numeric arrays of objects
  //numArrayLogLines.sort(function(a,b){ return a.Value - b.Value; });
  numArrayLogLines.sort(function(a,b){ return a.Value.localeCompare(b.Value); });

  charArrayLogLines.sort(function(a,b){ return a.Value.localeCompare(b.Value); });
  // Add the character data
  for (let charkey in charArrayLogLines){
    arrResult.push(charArrayLogLines[charkey].Key + " " + charArrayLogLines[charkey].Value) ;
  }
  // Add the numeric data
  for (let numkey in numArrayLogLines){
    arrResult.push(numArrayLogLines[numkey].Key + " " + numArrayLogLines[numkey].Value) ;
  }


  //return newLogLines;
  //return newArrayLogLines;
  //return numArrayLogLines;
  //return charArrayLogLines;

  return arrResult;
}


//  Main function

function main(){


  var logFileSize = 5;
  var logLines = " "
  + "\r\n[a1 9 2 3 1]"
  + "\r\n[g1 act car] [zo4 4 7]"
  + "\r\n[ab1 off key dog]"
  + "\r\n[a8 act zoo]"
  ;


  //console.log(logLines) ;
  console.log(sortLogfile(logFileSize, logLines));
}



// Execute main

main();

