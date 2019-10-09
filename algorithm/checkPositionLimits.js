// Check if the move is inside the limits of the lot
function checkPosLimits(matrix,newPos)
{
  let withinLimits = true;

  // Check on I
  if (newPos.I < 0)
    withinLimits = false;

  if (newPos.I > matrix.length - 1)
    withinLimits = false;

  // Check on J
  if (newPos.J < 0)
    withinLimits = false;

  if (newPos.J > matrix[0].length - 1)
    withinLimits = false;

  console.log(withinLimits);
  return withinLimits;

}

