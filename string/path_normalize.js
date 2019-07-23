'use strict';
// Function to normalize a path as absolute
function pathNormalize(pathToNorm)
{
  let cleanPath = "";
  let newPath = "";
  let upperIter = 0;

  // First remove white spaces and trim
  cleanPath = pathToNorm.replace(/\s\s+/g, ' ');
  cleanPath = pathToNorm.trim();

  // First clean up the string of possible double slash and
  cleanPath = pathToNorm.replace(/\/\//g, "/");

  // Now get all the different folders by splitting with /
  let folderArr = cleanPath.split("/");
  let folderArrNew = [];


  for(let i=folderArr.length -1;i>=0;i--)
  {
    // Check if it's a ".."
    if (folderArr[i] == "..")
      upperIter++;
    else
    {
      if (folderArr[i] != ".")
      {
        if (upperIter > 0)
        {
          upperIter--;
        }
        else
        {
          folderArrNew.push(folderArr[i]);

        }

      }
    }

  }
  
  // If there are any ".." remaining add them at the beginning of the folder
  for (let k=0;k<=upperIter - 1;k++)
  {
    newPath += "../";
  }
  //Now return the inverted array path completed as a string separated by /
  for (let j=folderArrNew.length - 1; j>=0;j--)
  {
    if (j!=0)
      newPath += folderArrNew[j] + "/";
    else
      newPath += folderArrNew[j];
  }

  //return cleanPath;

  //return folderArrNew;

  return newPath;

  //var path = require('path');
  //return path.normalize(pathToNorm);


}


// Main function to be executed
function main()
{

//var pathToNorm = "Users/Refsnes/../Jackson";
//var pathToNorm = "/home/myself/node/wwwroot/static_files/gif/image.gif";
//var pathToNorm = "../Guide/././API/../../../Firefox";
//var pathToNorm = "asdf//asdf//../qwer";
var pathToNorm = "/asdf//asdf//../qwer/..";
//var pathToNorm = "asdf//asdf//asdf//asdf//asdf//../../../qwer";
//var pathToNorm = "/a/b/c/../../file.txt";
console.log(pathNormalize(pathToNorm));

}



// MAIN-----------------------------------------------------------------

main();

