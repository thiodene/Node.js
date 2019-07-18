'use strict' ;

// Function
function sortLogfile(logFileSize, logLines)
{

  // Get all the arrays in the same order as in the log file
  // Clean up the spacing of the Log File
  let newLogLines = logLines  ;
  newLogLines = newLogLines.replace(/\s\s+/g, ' ');
  newLogLines = newLogLines.trim();

  // Now replace all "] [" with ","
  //newLogLines = newLogLines.replace("] [",",");
  newLogLines = newLogLines.replace(/\] \[/g, ",");

  // Replace front and back "["
  newLogLines = newLogLines.replace("[","");
  newLogLines = newLogLines.replace("]","");

  // Explode the records by ","
  let arrLoglines = newLogLines.split(",");

  for (let key in arrLogLines)
  {

    // Split Element by space to check them individually
    newArrayLogLines


  }


  return newLogLines;
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
