'use strict';
// This function calculates the prime sum of a given N number
function primeSum (n)
{

  let primeArr = [];
  let isPrime = true;

  //if (n > 1)
  //  primeArr.push(1);

  for (let i = 2; i<=n;i++)
  {
    isPrime = true;
    for (let j=i-1;j>=1;j--)
    {
      if (i % j == 0 && j != 1)
        isPrime = false;
    }
    if (isPrime)
      primeArr.push(i);
  }

  // Create the sum of primes
  const arrSum = primeArr.reduce((a,b) => a + b, 0);
  return arrSum;
  //return primeArr;

}

// Eratosthenes algorithm finds the prime numbers without having to go through each number
function eratosthenes(n)
{
  // Eratosthenes algorithm to find all primes under n
  var array = [], upperLimit = Math.sqrt(n), output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if(array[i]) {
      output.push(i);
    }
  }

  return output;
};




// Build the main function
function main()
{

  var n = 9;

  console.log(primeSum(n));
  console.log(eratosthenes(n));

  // Time and Space complexity of the primeSum
  // Double for loop goes through each value
  // Time ciomplexity O(n^2)
  // Space complexity O(n^2)

  // Time and space complexity of the sieve of eratosthenes algorithm
  // Removes all the unnecessary values when going through every numbers
  // Time complexity O(nloglog(n)) time
  // Space complexity takes O(N)

}


// MAIN-------------------------------------------------------------------------

main();
