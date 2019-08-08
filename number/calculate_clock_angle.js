'use strict';
// calculate the angle between the hour arrow and the minute arrow
function calcClockAngle(hour,minute)
{

  // Start with the max value possible for Hour, Minute and Angle
  let max_minute = 60;
  let max_hour = 12;
  let max_angle = 360;

  // Define the initial angle to 0
  let angle = 0;

  // Calculate the angle between the 2 clock arrows
  angle = Math.abs((hour/max_hour) * 360 - (minute/max_minute) * 360);


  return angle;


}


// Build the main function
function main()
{

  var hour = 0;
  var minute = 30;


  console.log(calcClockAngle(hour,minute));

}



// MAIN---------------------------------------------------------------------------

main();
