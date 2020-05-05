function isPalindrome(palinString)
{
  let verification = true;

  for(let i=0;i<=palinString.length - 1; i++)
  {
    if (palinString.substr(i,1) != palinString.substr(palinString.length -1 - i, 1))
      verification = false; 

  } 

  return verification;
}
