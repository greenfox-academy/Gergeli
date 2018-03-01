'use strict'

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function somOfDigits(n: number) {
  let a: number = Math.floor(n);
  let b: number = a % 10;
  if(n < 1){
    return 0;
  }else{
    b += somOfDigits((n /10));
  }
  return b;
}

console.log(somOfDigits(9353));