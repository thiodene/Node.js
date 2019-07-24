'use strict';
// Calculate the stock profit maximum  fromt one set of days
function calcMaxProfit(daysValue)
{

  let maxProfit = 0;
  let saleStat = [];

  for (let i=0;i<=daysValue.length - 1;i++)
  {

    for (let j=0; j<=daysValue.length - 1; j++)
    {

      // make sure that j > i as the days to sell come after the days to buy
      if (j > i)
      {
        if (daysValue[j] > daysValue[i])
        {
          if (daysValue[j] - daysValue[i] > maxProfit)
            saleStat.push({"dayBuy":i,"daySell":j,"Value": daysValue[j] - daysValue[i]});
            // Give the new value to max profit
            maxProfit = daysValue[j] - daysValue[i];
        }

      }

    }

  }

  //Now format the result
  let result = "Buy on day " + saleStat[saleStat.length - 1].dayBuy + " and sell on day " + saleStat[saleStat.length -1].daySell + " profit will be " + saleStat[saleStat.length -1].Value ;

  //return saleStat;
  return result;


}



// Build the main function and add details
function main()
{

  var days = [100, 180, 260, 310, 40, 535, 695];

  console.log(calcMaxProfit(days));

}


// MAIN-------------------------------------------------------------

main();
