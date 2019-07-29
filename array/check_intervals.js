'use strict';
// Build function find in the position of number inside of intervals
function checkIntervals(intervals,k)
{

  // Construct the array of objects containing all the intervals numbers
  let posInterval = [];
  let minInterval ;
  let maxInterval;
  let i;
  let intIter = 1;

  // Register the interval numbers as an object into the posInterval array;
  intervals.forEach(function(element){
    // Get through ecach integarer element of that interval and record it as an object
    minInterval = element[0];
    maxInterval = element[1];

    // Assuming there can't be any duplicates we start the new interval from the higest number of the last interval + 1 if theyy overlap!
    if (intIter > 1 && minInterval <= posInterval[posInterval.length - 1].Number)
      minInterval = posInterval[posInterval.length - 1].Number + 1;

    for(i=minInterval;i<=maxInterval;i++)
    {
      posInterval.push({"Interval":intIter,"Number":i});
    }
    intIter++ ;
  });

  // Now get the kth number from these intervals
  return posInterval[k-1].Number;

  //return posInterval;
}



// Build main function
function main()
{

  var intervals = [[5,10],[15,20],[25,40],[30,45],[50,100]];
  var k = 15;

  console.log(checkIntervals(intervals,k));


}


// MAIN----------------------------------------------------------------------------

main();
