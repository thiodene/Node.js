'use strict';
// Build the itinerary of shiipping products based on total distance and forward and backward routes
function shippingRoute(maxTravelDist,forwardRouteList,returnRouteList)
{

  let routes = [];

  // Make a list of all the route possible with the total distance
  for (let i=0;i<=forwardRouteList.length - 1;i++)
  {
    for (let j=0;j<=returnRouteList.length - 1;j++)
    {
      // Register all the route possibilities and the total distance
      routes.push({"ForwardID":forwardRouteList[i][0],"ReturnID":returnRouteList[j][0],"Distance":forwardRouteList[i][1]+returnRouteList[j][1]});
    }
  }

  // Now get the closest distance to the distance to travel that do not exceed it
  let rightRoutes = routes.filter(function(element){
    return element.Distance <= maxTravelDist;
  });

  // Now Sort the result and get the best ones
  rightRoutes.sort(function(a,b){
    return b.Distance - a.Distance;
  });

  // Get the highest Distance from there and filter the ones that equals that result
  let highestDistance = rightRoutes[0].Distance;
  //console.log(highestDistance);
  // Now filter the results equals to this highest  nad closest distance
  rightRoutes = rightRoutes.filter(function(element){
    return element.Distance == highestDistance;
  });
  //console.log(rightRoutes);
  // Now build the final result
  let result = [];
  rightRoutes.forEach(function(e){
    result.push([e.ForwardID,e.ReturnID]);
  });

  return result;
  //return rightRoutes;
  //return routes;

}



// Build the main function
function main()
{


  //var maxTravelDist = 7000;
  //var forwardRouteList = [[1,2000],[2,4000],[3,6000]];
  //var returnRouteList = [[1,2000]];


  var maxTravelDist = 10000;
  var forwardRouteList = [[1, 3000], [2, 5000], [3, 7000], [4, 10000]];
  var returnRouteList = [[1, 2000], [2, 3000], [3, 4000], [4, 5000]];


  console.log(shippingRoute(maxTravelDist,forwardRouteList,returnRouteList));


}


// MAIN------------------------------------------------------------------

main();
