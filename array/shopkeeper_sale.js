'use strict';
// This function claculates the sales reductions for a list of products
function shopKeeperSale(products)
{

  let startCheckPoint;
  let endCheckPoint;
  let registerInterval = [];
  let registerIntervalIDs = [];
  let registerSales = [];
  let m;

  // First go through each price to be compared from the very first to the one before the last
  for (let j=0;j<=products.length - 2;j++)
  {
    // Start their checkpoints
    startCheckPoint = {"ID":j,"Price":products[j]};
    endCheckPoint = {"ID":j,"Price":products[j]};

    // Now from that product price compare it to the ones following it until the end of the product list
    for (let i = j;i<=products.length - 1;i++)
    {
      // If that product has already been registered in a interval skip
      if (registerIntervalIDs.indexOf(j) == -1)
      {
        //console.log(i);
        // Look for new sale price after the start checkpoint
        if (i > startCheckPoint.ID)
        {
          if (products[i] <= startCheckPoint.Price)
          {
            // Register the new Interval
            registerInterval.push({"ID1":startCheckPoint.ID,"ID2":i});
            for(m=startCheckPoint.ID;m<=i;m++)
            {
              registerIntervalIDs.push(m);
              if (m != i)
                registerSales.push({"ID":m,"Sale":products[m] - products[i]});
              else
                registerSales.push({"ID":m,"Sale":products[i]});
            }
            //registerIntervalIDs.push(startCheckPoint.ID);
            //registerIntervalIDs.push(i);

            //register the new end checkpoint and give a new value to start checkpoint
            endCheckPoint.ID = i;
            endCheckPoint.Price = products[i];
            //break;
            startCheckPoint.ID = i+1;
            startCheckPoint.Price = products[i+1];
          }
        }

      }

    }
  }

  // Calculate the Minimim Cost of the products based on the calculated Sales
  let Result = 0;
  let isOnSale = {} ;
  for (let k=0;k<=products.length - 1;k++)
  {
    if (isOnSale = findSale(k,registerSales) )
    {
      //console.log(isOnSale);
      Result += isOnSale.Value;
    }
    else
    {
      //console.log(products[k]);
      Result += products[k];
    }
  }


  //console.log(registerSales);
  //console.log(registerInterval);

  return Result;
}

function findSale(id,registerSales)
{
  let productSale = {};
  let onSale = false;
  console.log(id);
  registerSales.forEach(function(element){
    console.log(element.ID);
    if (element.ID == id)
    {
      onSale = true;
      productSale = {"Value":element.Sale};
    }
  });
  //console.log("false");
  if (onSale)
    return productSale;
  else
    return false;
}

// Function main building
function main()
{
  var products = [2, 3, 1, 2, 4, 2];
  //var products = [5,1,3,4,6,2];
  //var products = [5,1,3,4,6,7];
  //var products = [1,3,3,2,5];

  console.log(shopKeeperSale(products));

}



// MAIN-------------------------------------------------------------------------
main();
