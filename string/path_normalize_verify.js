'use strict';
// Function to normalize a path as absolute
function pathNormalize(pathToNorm)
{
  var path = require('path');
  return path.normalize(pathToNorm);


}


// Main function to be executed
function main()
{

//var pathToNorm = "Users/Refsnes/../Jackson";
//var pathToNorm = "/home/myself/node/wwwroot/static_files/gif/image.gif";
//var pathToNorm = "../Guide/././API/../../../Firefox";
//var pathToNorm = "asdf//asdf//../qwer";
//var pathToNorm = "/asdf//asdf//../qwer/..";
//var pathToNorm = "asdf//asdf//asdf//asdf//asdf//../../../qwer";
var pathToNorm = "/a/b/c/../../file.txt";
console.log(pathNormalize(pathToNorm));

}



// MAIN-----------------------------------------------------------------

main();
