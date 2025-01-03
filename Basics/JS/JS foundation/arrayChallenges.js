let cities = ["blr", "chennai", "Kolkata"];
cities.push("delhi");
// console.log(cities);
let lastCity = cities.pop()// it removes last value in array


//refernce Concept
let var1 = 1;
let var2 = var1;
var2 = 0;
// console.log(var1); 1
// console.log(var2); 0
// samething in array ,it will changes both,reason:- refernce is pointed (SOFTCOPY)


//HARDCOPY

let alphabets = ["A","B","C"];
let Alphabets = [...alphabets];//this is HARDCOPY
// [...] => Rest and spread Operators


//merge two arrays
let south = ["blr","Chennai","kerala"];
let north = ["delhi","UP","MP"];
let india = south.concat(north);

// .includes : it checks if a particular element of an array is in the array or not.