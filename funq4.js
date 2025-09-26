// Create a function that returns the sum of the numbers from 1 to n
function add(n){
    return( n*(n +1)) /2;
}

console.log(add(100));
//or
function add2(n){
   let sum = 0;
   for(let i = 0; i<=n ; i++){
    sum = sum +i;
   }
   return sum;
}
console.log(add2(100));