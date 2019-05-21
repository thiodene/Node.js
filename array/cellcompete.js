function cellCompete(states,days)
{

  var new_states = [0,0,0,0,0,0,0,0];
  var between_states = states;

  for(var j=1; j<=days; j++){
    // ReInitialize new_states each new iteration!
    new_states = [0,0,0,0,0,0,0,0];
    for(var i=0; i<=states.length - 1; i++){
      if (i === 0 ) {
        if(between_states[i+1] == 1)
          new_states[i] = 1;
        else
          new_states[i] = 0;
      }
      else if (i == states.length - 1){
        if(between_states[i-1] == 1)
          new_states[i] = 1;
        else
          new_states[i] = 0;
      }
      else
      {
        if(between_states[i-1] == between_states[i+1])
          new_states[i] = 0;
        else if (between_states[i-1] != between_states[i+1])
          new_states[i] = 1;


      }
    }
    between_states = new_states ;
  }
  return new_states ;
}

function main() {
  const days = 2 ;
  const states = [1,1,1,0,1,1,1,1] ;

  console.log(cellCompete(states,days));
}

//--------------------------------------------------------------------------
main() ;
