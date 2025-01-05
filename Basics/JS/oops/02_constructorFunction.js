function carGeneric(brand, engine) {
  this.brand = brand;
  this.engine = engine;
}

let dailyCar = new carGeneric("suzuki", "400hp");
/* console.log(dailyCar);
OP: carGeneric { brand: 'suzuki', engine: '400hp' }
*/

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a ${this.type} tea`
  }
}
let myTea = new Tea("Masala");
/* console.log(myTea);
OP : Tea { type: 'Masala', describe: [Function (anonymous)] }

console.log(myTea.describe());
OP : this is a Masala tea


I can do the same thing using the keyword Prototype
*/
function Coffee(type) {
  this.type = type;
}
Coffee.prototype.describe = function () {
  return `This is Coffee of ${this.type} type`;
}

let myCoffee = new Coffee("Latte");
console.log(myCoffee.describe())









