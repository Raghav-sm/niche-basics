class Car{
  constructor(brand,make){
    this.brand = brand;
    this.make = make;
  }
  brief(){
    return `This is base class, brand: ${this.brand} make:${this.make}`
  }
}

class electricCar extends Car{
  start(){
    return `This is electric car, brand: ${this.brand} make: ${this.make}`
  }
}

let obj1 = new electricCar("tesla","plaid");
console.log(obj1.start());


