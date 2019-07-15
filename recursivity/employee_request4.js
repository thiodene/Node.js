'use strict';
// build the recursive function
function recursive(requestList, moversList)
{
  if (requestList.length > 0)
  {
    let mover = -1;
    console.log(moversList[moversList.length - 1].to_building);

    for (let key in requestList){
      if(requestList[key].from_building == moversList[moversList.length - 1].to_building)
      {
        mover = key ;
        console.log("mover:" + mover);
        break;
      }
    }

    if (mover != -1 && requestList[mover].from_building != moversList[0].from_building)
    {
      moversList.push(requestList[mover]);
      recursive(requestList,moversList);
    }
    else
      console.log(moversList);
  }
}



// set up main function
function main()
{

  var requestList = [];
  requestList.push({"employee_name":"Alex", "from_building":1, "to_building":2});
  requestList.push({"employee_name":"Ben", "from_building":2, "to_building":1});
  requestList.push({"employee_name":"Chris", "from_building":1, "to_building":2});
  requestList.push({"employee_name":"David", "from_building":2, "to_building":3});
  requestList.push({"employee_name":"Ellen", "from_building":3, "to_building":1});
  requestList.push({"employee_name":"Frank", "from_building":4, "to_building":5});

  //console.log([requestList[0]]);
  //console.log([requestList[1]]);
  //console.log([requestList[2]]);
  //console.log([requestList[3]]);



  recursive(requestList,[requestList[0]]);

}



// MAIN---------------------------------------------------------------------

main();

