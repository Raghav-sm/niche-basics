/*Write a function to multiply two numbers using arrow function.
Method 1 :Normal arrow function
const myMultiply = (a ,b) =>{
  return a*b
}
Method 2 : implicit function for 1 liners 
const myMultiply = (a,b)=> a*b
*/


/* First class function or higher order function
*/

function myProcedure(str) {
  return `myProcedure ${str}`
}
function maketea(fn) {
  return fn('kelsa maadu')
}

let ans = maketea(myProcedure)
console.log(ans);
