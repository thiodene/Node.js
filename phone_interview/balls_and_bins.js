'use strict';
// this function dispactches balls in different bins
function arrangeBalls (balls,bins)
{

  // If no balls or just one bin
  if (balls == 0 || bins == 1)
    return 1;

  // if no bins
  if (bins == 0)
    return 0;

  if (bins > balls)
  {
    return arrangeBalls(balls,balls);
  }
  else
  {
    return arrangeBalls(balls, bins - 1) + arrangeBalls(balls - bins, bins);
  }


}


// Build the main function
function main()
{

  //var m = 3 ; // Balls
  //var n = 2 ; // Bins

  //var m = 3 ; // Balls
  //var n = 0 ; // Bins

  //var m = 1 ; // Balls
  //var n = 2 ; // Bins

  var m = 4 ; // Balls
  var n = 5 ; // Bins


  console.log(arrangeBalls(m,n));

}



// MAIN-------------------------------------------------------------------------

main();
