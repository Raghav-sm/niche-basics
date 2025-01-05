let computer = {
  CPU: 12,
  OS: "Windows"
};

let mac = {
  CPU: 24,
  __proto__: computer
};
//console.log(`mac`,mac.__proto__);
// Output :  mac { CPU: 12, OS: 'Windows}
// if we do mac.CPU we will 24.When we do mac.__proto__ we are acessing the prototype of mac that is computer.hence why CPU is 12.

// If we want 24 then we can mac.__proto__.CPU ,it'll print 24

let Car = {
  engine: "petrol",
  tyres: 4
};
let tesla = {
  engine: "electric",
  speed: 400
};
// better way to deal is using properties.

Object.setPrototypeOf(tesla, Car);
// console.log(tesla);  op { engine: 'electric', speed: 400 }
// if we exclusively mention tesla.tyres it'll show tyres as 4

//if we want to see car properties using tesla we can use the Object.getPrototypeOf()
// and we can also use a forIn loop to acess car properties with tesla object
/**
for( let prop in tesla){
  console.log(prop,tesla[prop]);
}
engine electric
speed 400
tyres 4 (This is from Car object)
 */