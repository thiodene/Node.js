'use strict';
// build the recursive function
function recursive(requestList, moversList)
{
  let mover = -1;
  let moversName = [] ;
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

  // Transform the data of movers to just the names
  for (let nkey in moversList){
    moversName.push(moversList[nkey].employee_name);
  }
  //return moversList;
  return moversName;
}

function removeEmployee(array, removevalue)
{

  var filtered = array.filter(function(data){ return data.employee_name != removevalue.employee_name}) ;

  return filtered;

}

function buildEmployeeMove(requestList)
{
  var employeeMoves = [];

  let employee = 0;
  //for (let employee in requestList){
    let employee_to_build = requestList[employee].to_building;
    // Filter empoloyees that have move_building equals to this employee to_building
    let movList = requestList.filter(function(data){ return data.from_building == requestList[employee].to_building; });

    // if potential movers
    if (movList.length > 0){

      if (movList.length > 1){
        // Remove each employee mover from the requestList before doing the recursive
        for (let key in movList){
          console.log(movList[key]);
          for (let nkey in requestList){
            if (movList[key] === requestList[nkey]){
              //employeeMoves.push(recursive(requestList,[requestList[employee]]));
              employeeMoves.push(recursive(removeEmployee(requestList,movList[key]),[requestList[employee]]));
            }

          }

        }

      }
      else
      {
        employeeMoves.push(recursive(requestList,[requestList[employee]]));
      }
    }
  //}
  // Take all the "from_building" corresponding to this employee "to_building"
  //employeeMoves.push(recursive(requestList,[requestList[employee]]));



  return employeeMoves;

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

  var requestListNew = [];
  requestListNew.push({"employee_name":"Adam", "from_building":1, "to_building":2});
  requestListNew.push({"employee_name":"Brian", "from_building":2, "to_building":1});
  requestListNew.push({"employee_name":"Carl", "from_building":4, "to_building":5});
  requestListNew.push({"employee_name":"Dan", "from_building":5, "to_building":1});
  requestListNew.push({"employee_name":"Eric", "from_building":2, "to_building":3});
  requestListNew.push({"employee_name":"Fred", "from_building":3, "to_building":4});


  //console.log([requestList[0]]);
  //console.log([requestList[1]]);
  //console.log([requestList[2]]);
  //console.log([requestList[3]]);



  //recursive(requestList,[requestList[5]]);

  console.log(buildEmployeeMove(requestListNew));

}



// MAIN---------------------------------------------------------------------

main();
