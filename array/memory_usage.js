'use strict';
// This function calculate the tasks to run on a computer toccupying all the memory space not going above
function memory_usage (foregroundTasks,backgroundTasks, K)
{

  let usageList = [];
  let memClosest = [];
  let idClosest = [];

  for (let i=0;i<=foregroundTasks.length - 1;i++)
  {
    for (let j=0;j<=backgroundTasks.length - 1;j++)
    {
      if (foregroundTasks[i] + backgroundTasks[j] <= K)
        usageList.push({"ID1":i,"ID2":j,"Total":foregroundTasks[i] + backgroundTasks[j]});
    }

  }

  // go through all the closest to max memory values and display the closest
  for (let m=K;m>=0;m--)
  {
    // Filter the values that are equal in memory to K
    memClosest = usageList.filter(function(element)
    {
      return element.Total == m;

    });
    if (memClosest.length > 0)
      break;
  }
  List the IDs of the teasks that maximize the memory limit
  memClosest.forEach(function(el){
    idClosest.push([el.ID1,el.ID2]);
  });


  return idClosest;
  //return usageList;
}



// Build the main function
function main()
{

  //var foregroundTasks = [1, 7, 2, 4, 5, 6];
  //var backgroundTasks = [3, 1, 2];
  //var K = 6;

  var foregroundTasks = [1, 7, 2, 4, 5, 6];
  var backgroundTasks = [3, 1, 2];
  var K = 10;

  console.log(memory_usage(foregroundTasks,backgroundTasks,K));
}



// MAIN---------------------------------------------------------------------------------

main();

