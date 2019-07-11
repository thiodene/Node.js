'use strict';
// Employee Buildings
function moveEmployee(requestList){

  let to_build = 0;
  let from_build = 0;
  let name = "";
  let requestMoversFrom = [];
  let permutation = [];
  var checkNextEmployee = function(name,origin){
    let nameList = [];
    if(requestList){
      nameList.push(name);
    }
    return nameList;
  }

  // Get each to_building and check another employee's from_building
  for(let key in requestList){
    // Get the name and the to_building
    name = requestList[key].employee_name ;
    to_build = requestList[key].to_building ;
    from_build = requestList[key].from_building ;

    // Look for the next employee willing to move from that spot
    requestMoversFrom = requestList.filter(function(staff){ return staff.from_building == to_build; });
    console.log(requestMoversFrom);

    for (let newkey in requestMoversFrom){

      permutation.push(checkNextEmployee(requestMoversFrom[newkey].employee_name,requestMoversFrom[newkey].from_building));
      console.log(requestMoversFrom[newkey].employee_name);
    }

  }
  return permutation;
  //return requestList;
  //return requestMoversFrom;
}


// Main function

function main(){

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
  requestListNew.push({"employee_name":"Fred", "from_building":3, "to_building":3});


  console.log(moveEmployee(requestList));
  //console.log(moveEmployee(requestListNew));
}




// Execute main--------------------------------------------------------------

main();
