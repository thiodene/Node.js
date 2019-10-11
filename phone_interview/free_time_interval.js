'use strict';
// Merge intervals to find common free time for group of friends
function findFreeTime(schedule)
{

  var num_interval = [];
  let full_day = ["7:00","18:00"];
  let fullday_num = [420,1080];
  let hour_num;
  let minute_num;
  let start_str;
  let end_str;
  let start_num;
  let end_num;
  // Transform the string time values to numeric
  schedule.forEach(function(element){
    start_str = element[0].split(":");
    hour_num = Number(start_str[0]) * 60;
    minute_num = Number(start_str[1]);
    start_num = hour_num + minute_num;

    end_str = element[1].split(":");
    hour_num = Number(end_str[0]) * 60;
    minute_num = Number(end_str[1]);
    end_num = hour_num + minute_num;

    num_interval.push([start_num,end_num]);
  });

  // Now sort the time slots with respect to the beginning time
  num_interval.sort(function(a,b){
    return a[0] - b[0];
  });

  let new_interval = [];
  let new_start;
  let new_end;
  // Remove any beiginning time before 7am and end time after 6pm
  num_interval.forEach(function(e){
    if (e[0] < fullday_num[0])
      new_start = fullday_num[0];
    else
      new_start = e[0];

    if (e[1] > fullday_num[1])
      new_end = fullday_num[1];
    else
      new_end = e[1];

    new_interval.push([new_start,new_end]);
  });

  console.log(new_interval);

  let merged_interval = [];
  let merged;
  // Now try merging with the value ahead and not the value back!
  for (let i = 0; i<=new_interval.length - 1; i++)
  {
    for (let j = 0;j<=new_interval.length - 1; j++)
    {
      // try merging with the value ahead!
      if (j > i)
      {
        if (merged = mergeInterval(new_interval[i],new_interval[j]))
        {
          merged_interval.push({"Merged":merged,"Interval1":i,"Interval2":j});
        }
      }
    }

  }

  let unavail_interval = [];
  // now that we have the merged values reconstruct the full interval with non-merged values and merged ones
  for (let n=0;n<=new_interval.length - 1;n++)
  {
    if (!isMerged(merged_interval,n))
      unavail_interval.push(new_interval[n]);
  }
  // finishe with merged values
  merged_interval.forEach(function(el){
    unavail_interval.push(el.Merged);
  });

  console.log(merged_interval);

  // Now sort the time slots with respect to the beginning time
  unavail_interval.sort(function(a,b){
    return a[0] - b[0];
  });


  // Now construct the Availability Interval from the unavailable interval
  let available_interval = [];
  for (let m = 0;m<=unavail_interval.length - 1;m++)
  {
    if (m == 0)
    {
      if (unavail_interval[m][0] == fullday_num[0])
        available_interval.push([unavail_interval[m][1],0]);
      else
        available_interval.push([fullday_num[0],unavail_interval[m][0]]);
    }
    else if (m == unavail_interval.length - 1)
    {
      if (unavail_interval[m][1] == fullday_num[1])
       available_interval[available_interval.length - 1][1] = unavail_interval[m][0]  ;
      else
       available_interval.push([unavail_interval[m][1],fullday_num[1]]);
    }
    else
    {
      console.log("else");
      if (available_interval[available_interval.length - 1][1] == 0)
      {
        available_interval[available_interval.length - 1][1] = unavail_interval[m][0]  ;
        available_interval.push([unavail_interval[m][1],0]);
      }
      else
        available_interval.push([unavail_interval[m][1],0]);
    }
  }

  console.log(unavail_interval);

  return available_interval;
  //return unavail_interval;
  //return merged_interval;
  //return new_interval;
  //return num_interval;

}


// Function checking if index has been merged
function isMerged(merged_interval,index)
{
  let merged = false;
  let merged_list = [];

  // Filter the values that contain the index
  merged_list = merged_interval.filter(function(element){
    return element.Interval1 == index || element.Interval2 == index;
  });

  if (merged_list.length > 0)
    merged = true;

  return merged;
}


// Function to check if time slot is inside an interval of time
function mergeInterval(interval1,interval2)
{

  let newInterval = [];
  // Check the overlap of intervals
  if (interval1[0] >= interval2[0] && interval1[1] <= interval2[1])
  {
    return newInterval = [interval2[0],interval2[1]];
  }

  if(interval2[0] >= interval1[0] && interval2[1] <= interval1[1])
  {
    return newInterval = [interval1[0],interval1[1]];
  }

  if (interval1[0] <= interval2[0] && interval1[1] >= interval2[0])
  {
    return newInterval = [interval1[0],interval2[1]];
  }

  if (interval2[0] >= interval1[0] && interval2[0] <= interval1[1])
  {
    return newInterval = [interval1[0],interval2[1]];
  }

  return false;
}

// Function main to build
function main()
{


  //var unavailability = [["16:00","16:30"],["6:00","7:30"],["8:00","9:00"],["8:00","9:20"],["17:30","19:20"]];

  var unavailability = [["12:00","17:30"],["8:00","10:00"], ["10:00","11:30"]];


  console.log(findFreeTime(unavailability));


  // Time complexities

  // Array Merging Algorithm
  // Array -> Double for loop O(n^2)

  // Interval Algorithm
  // Array -> Insertion O(n)

  // Space Complexity
  // Array -> Insertion O(n)


}

// MAIN---------------------------------------------------------

main();
