'use strict';
// build the recursive function
function recursive(requestList, moversList)
{
  if (requestList.length > 0)
  {
    let mover = false;
    //console.log(moversList[0]);
    //numArray.shift();
    //let mover = requestList.filter(function(data){ return data.from_building == moversList[moversList.length - 1].to_building});

    for (let key in requestList){
      if(requestList[key].from_building == moversList[moverslist.length - 1])
        mover = true;
    }

    //return mover;

    if (mover)
    {
      moversList.push(mover[0]);
      //return moversList ;
      recursive(requestList,moversList);
    }
  }
}



// set up main function
function main()
{

  //var numArray = ['8', '17', '25', '42', '67'];

  var requestList = [];
  requestList.push({"employee_name":"Alex", "from_building":1, "to_building":2});
  requestList.push({"employee_name":"Ben", "from_building":2, "to_building":1});
  requestList.push({"employee_name":"Chris", "from_building":1, "to_building":2});
  requestList.push({"employee_name":"David", "from_building":2, "to_building":3});
  requestList.push({"employee_name":"Ellen", "from_building":3, "to_building":1});
  requestList.push({"employee_name":"Frank", "from_building":4, "to_building":5});

  console.log([requestList[0]]);

  console.log(recursive(requestList,[requestList[0]]));

}



// MAIN---------------------------------------------------------------------

main();
