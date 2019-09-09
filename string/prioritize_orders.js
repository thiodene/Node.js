'use strict';
// Function prioritize the orders of amazons Prime
function prioritizeOrders(numOrders,orderList)
{

  // Clean up and separate the orders into a object
  let orderArray = [];
  let orderObjArray = [];

  // Remove each brackets from all orders
  let newOrderList = "";
  newOrderList = orderList.trim();
  newOrderList = newOrderList.replace("[", "");
  newOrderList = newOrderList.substr(0,newOrderList.length - 1);

  // Remove in between brackests
  orderArray = newOrderList.split("]");
  //Now remove the second parenthesis and trim for each element
  let newOrderArray = [];
  orderArray.forEach(function(element){
    newOrderArray.push(element.replace("[","").trim());
  });


  // Now separate the first symbol from all the others and keep the order
  let testString = "";
  newOrderArray.forEach(function(el){
    testString = el.replace(" ",".");
    orderObjArray.push({"Number":testString.split(".")[0],"Details":testString.split(".")[1]});

  });


  // Now sepearate the number orders from the non numberic ones
  let orderNumArray = [];
  let orderAlphaArray = [];

  orderObjArray.forEach(function(e){
    //console.log(e);
    if (isNaN(Number(e.Details.split(" ")[0])))
    {
      //console.log(e);
      orderAlphaArray.push(e);
    }
    else
      orderNumArray.push(e);
  });

  // First sort the Ordrer numbers
  orderAlphaArray.sort(function(a,b){
    return a.Number.localeCompare(b.Number);
  });


  // Sort the Alpha array
  orderAlphaArray.sort(function(a,b){
    return a.Details.localeCompare(b.Details);
  });

  // Add both arrays together
  let result = "";

  orderAlphaArray.forEach(function(ele){
    result += "[" + ele.Number + " " + ele.Details + "]";
  });

  orderNumArray.forEach(function(elem){
    result += "[" + elem.Number + " " + elem.Details + "]";
  });

  return result;
  //return orderAlphaArray;
  //return orderObjArray;
  //return newOrderArray;
  //return newOrderList;
}


// Build the main function
function main()
{

  var numOrders = 6;
  var orderList = ""
  + "[Zid 93 12]"
  + "[fp kindle book]"
  + "[IOa echo show]"
  + "[17g 12 256]"
  +"[abl kindle book]"
  +"[125 echo dot second generation]"
"";

  console.log(prioritizeOrders(numOrders,orderList));


}



// MAIN-------------------------------------------------------------------------------

main();
