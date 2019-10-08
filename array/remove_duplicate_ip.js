'use strict';
// This function check for duplicates of IPS and removes them from a list
function removeDuplicates (ip_array)
{


  let registerIP = [];

  for (let i = 0; i<=ip_array.length - 1;i++)
  {
    if (registerIP.indexOf(ip_array[i]) == -1)
      registerIP.push(ip_array[i]);

  }

  return registerIP;
}


// Build the main function
function main()
{

  var ip_array = ["205.241.242.103","104.36.196.223","151.101.40.116","205.241.242.103","104.196.174.50","52.205.157.189","205.241.242.103","151.101.40.116"];

  console.log(removeDuplicates(ip_array));

  // Insertion or Deletion is O(n) in array
  // Loop for or while is O(n)
}


// MAIN----------------------------------------------------------------------------------

main();
