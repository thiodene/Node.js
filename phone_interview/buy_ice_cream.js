'use strict';
// This function calculates if there is enough change for each customers to buy ice cream
// Once ice cream costs $5
function makeChangeForCustomers(bills)
{

  // Initial change
  let change = [];
  let icecream_price = 5;
  let testChangeID;
  let enoughChange = true;

  for (let i=0;i<=bills.length - 1;i++)
  {
    // Easy case if bills equals 5 just sell and cash the $5 bill
    if (bills[i] == 5)
      change.push(5);
    else if (bills[i] == 10)
    {
      // If enough change for that bill then it's good
      // Look for a $5 bill
      if (testChangeID = checkForBills([5], change))
      {
        // If there a $5 bill remove it and add the new $10 bill
        change.splice(testChangeID[0],1);
        change.push(10);
      }
      else
        enoughChange = false;
    }
    else // Considers the last bill to be 20
    {
      // Look for 3 $5 bills or look for 1 $10 and 1 $5
      if (testChangeID = checkForBills([5,5,5],change))
      {
        testChangeID.forEach(function(e){
          change.splice(e,1);
        });
        change.push(20);
      }
      else if(testChangeID = checkForBills([10,5],change)) // Look for a $10 and a $5
      {
        testChangeID.forEach(function(e){
          change.splice(e,1);
        });
        change.push(20);
      }
      else
        enoughChange = false;

    }
  }

  console.log(change);
  return enoughChange;

}


// This function finds the bills iD and return if any
function checkForBills(neededChange, change)
{
  let changeIDs = [];
  let testID ;
  let gotChange = true;
  let testChange = [];
  change.forEach(function(element){
    testChange.push(element);
  });

  console.log(testChange);

  // Now look for the needed change and register the IDs if any
  for (let m = 0;m<=neededChange.length - 1;m++)
  {
    if (testID = testChange.indexOf(neededChange[m]) != -1)
    {
      changeIDs.push(testID);
    }
    else
      gotChange = false;

  }

  // Return the list of change IDs if there are all available
  if (gotChange)
    return changeIDs;
  else
    return false;

}


// Build the main function
function main()
{

  var bills = [5,5,5,10,20];
  //var bills = [5,5,10];
  //var bills = [10,10];

  console.log(makeChangeForCustomers(bills));

  // Time complexity of the algorithm
  // One main for loop so -> O(n)

  // Space complexity
  // Arryay Insertion and Loop
  // O(n)

}


// MAIN----------------------------------------------------------------------------------------

main();
