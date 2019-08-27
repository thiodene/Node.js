function route(island){

  //return island.indexOf('O');
  //return island.length;
  // Get the size of array
  var prim = island.length;
  var seco = island[0].length;

  var i;
  var j;
  var posx=[0,0];
  var travel_pos = [0,0];
  var travel_step = 0;
  var travel_history = [[0,0]];

  // Get position of X
  for(i= 0; i <= prim - 1; i++)  {
    for(j=0; j <= seco - 1; j++) {
      if (island[i][j] == 'X')
        posx = [i,j];
    }

  }

  //return posx;
  //console.log(posx);

  // Starting at zero position -> travel through the matrix
  // Try X if not go Y
  while (travel_pos != posx){

    // Try on X then Y
    if(travel_pos[0] < posx[0]){
      if(island[travel_pos[0] + 1][travel_pos[1]] == 'O'|| island[travel_pos[0] + 1][travel_pos[1]] == 'X'){
        travel_pos[0] = travel_pos[0] + 1;
        console.log(travel_pos);
        travel_step++;
      }
      else
      {
        if (island[travel_pos[0]][travel_pos[1] + 1] == 'O' || island[travel_pos[0]][travel_pos[1] + 1] == 'X') {
         travel_pos[1] = travel_pos[1] + 1;
         console.log(travel_pos);
         travel_step++;
        }

      }

      if (travel_pos[0] == posx[0] && travel_pos[1] == posx[1])
        break;

    }

    // Try Y + Y + X if farther on X
    if (travel_pos[1] > posx[1]){

      if(island[travel_pos[0] + 1][travel_pos[1]] == 'O' || island[travel_pos[0] + 1][travel_pos[1]] == 'X'){
        travel_pos[0] = travel_pos[0] + 1;
        console.log(travel_pos);
        travel_step++;
      }

      if (travel_pos[0] == posx[0] && travel_pos[1] === posx[1])
        break;


      if(island[travel_pos[0] + 1][travel_pos[1]] == 'O' || island[travel_pos[0] + 1][travel_pos[1]] == 'X'){
        travel_pos[0] = travel_pos[0] + 1;
        console.log(travel_pos);
        travel_step++;
      }

      if (travel_pos[0] == posx[0] && travel_pos[1] === posx[1])
        break;


      if(island[travel_pos[0]][travel_pos[1] -1] == 'O' || island[travel_pos[0]][travel_pos[1] -1] == 'X'){
        travel_pos[1] = travel_pos[1] - 1;
        console.log(travel_pos);
        travel_step++;
      }

      if (travel_pos[0] == posx[0] && travel_pos[1] === posx[1])
        break;

    }


    //break;

  }

  console.log(travel_step);
  return travel_pos;


}




function main(){

  var island = [['O','O','O','O'],['D','O','D','O'],['O','O','O','O'],['X','D','D','O']];
  //var island = [['O','O','O','O'],['D','O','D','O'],['O','O','O','O'],['D','X','D','O']];

  console.log(route(island));


}



//-------------------------------------------------------------------------------------

main();
