// Check if the move is inside the limits of the lot
function checkMoveLimits(lot,myPos,direction)
{
  let checkLimit = true;

  if (myPos.I + direction.I < 0)
    checkLimit = false;

  if (myPos.I + direction.I > lot.length - 1)
    checkLimit = false;

  if (myPos.J + direction.J < 0)
    checkLimit = false;

  if (myPos.J + direction.J > lot[0].length - 1)
    checkLimit = false;
  console.log(checkLimit);
  return checkLimit;

}
