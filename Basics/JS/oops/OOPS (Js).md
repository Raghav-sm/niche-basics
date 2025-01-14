# OOPs in JavaScript

## 1. Dunder Prototype

In JavaScript, the `__proto__` property allows objects to inherit properties and methods from other objects. Let's break it down with an example:

### Example 1: Using `__proto__` for Prototype Inheritance

```javascript
let computer = {
  CPU: 12,
  OS: "Windows",
};

let mac = {
  CPU: 24,
  __proto__: computer,
};

console.log(mac.__proto__);
// Output: { CPU: 12, OS: 'Windows' }

// Accessing mac.CPU will return 24.
// When we access mac.__proto__, we are accessing the prototype of mac (which is computer), hence CPU is 12.

console.log(mac.__proto__.CPU); // 12
```

### Example 2: Using `Object.setPrototypeOf()` for Prototype Inheritance

```javascript
let Car = {
  engine: "petrol",
  tyres: 4,
};

let tesla = {
  engine: "electric",
  speed: 400,
};

Object.setPrototypeOf(tesla, Car);
console.log(tesla);
// Output: { engine: 'electric', speed: 400 }

// Accessing inherited properties
console.log(tesla.tyres); // 4 (from Car object)
```

### Example 3: Using `Object.getPrototypeOf()` and `for...in` loop

```javascript
for (let prop in tesla) {
  console.log(prop, tesla[prop]);
}
// Output:
// engine electric
// speed 400
// tyres 4 (This is from the Car object)
```

---

## 2. Constructor Functions

Constructor functions are a way to create objects in JavaScript, where each instance created by the constructor will have its own properties and methods.

### Example 1: Simple Constructor Function

```javascript
function carGeneric(brand, engine) {
  this.brand = brand;
  this.engine = engine;
}

let dailyCar = new carGeneric("suzuki", "400hp");
console.log(dailyCar);
// Output: carGeneric { brand: 'suzuki', engine: '400hp' }
```

### Example 2: Using Prototypes for Method Addition

```javascript
function Coffee(type) {
  this.type = type;
}
Coffee.prototype.describe = function () {
  return `This is Coffee of ${this.type} type`;
};

let myCoffee = new Coffee("Latte");
console.log(myCoffee.describe());
// Output: This is Coffee of Latte type
```

---

## 3. Classes

JavaScript introduced the `class` syntax in ES6 to simplify object creation and inheritance. Here's how to define classes:

### Example 1: Basic Class with Methods

```javascript
class Car {
  constructor(brand, make) {
    this.brand = brand;
    this.make = make;
  }

  brief() {
    return `This is a base class, brand: ${this.brand}, make: ${this.make}`;
  }
}

class ElectricCar extends Car {
  start() {
    return `This is an electric car, brand: ${this.brand}, make: ${this.make}`;
  }
}

let obj1 = new ElectricCar("Tesla", "Plaid");
console.log(obj1.start());
// Output: This is an electric car, brand: Tesla, make: Plaid
```

---

## 4. Inheritance

Inheritance allows a class to inherit properties and methods from another class.

### Example 1: Basic Inheritance with `extends`

```javascript
class Car {
  constructor(brand, make) {
    this.brand = brand;
    this.make = make;
  }

  brief() {
    return `This is a ${this.brand}, model: ${this.make}`;
  }
}

class ElectricCar extends Car {
  start() {
    return `This is an electric car: ${this.brand} ${this.make}`;
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3");
console.log(myElectricCar.brief()); // Inherited from Car
console.log(myElectricCar.start()); // Specific to electricCar
```

### Example 2: Overriding Methods in Child Classes

```javascript
class ElectricCar extends Car {
  constructor(brand, make, range) {
    super(brand, make);
    this.range = range;
  }

  brief() {
    return `This is an electric car: ${this.brand}, model: ${this.make}, range: ${this.range} miles.`;
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 375);
console.log(myElectricCar.brief());
// Output: This is an electric car: Tesla, model: Model S, range: 375 miles.
```

### Example 3: Using `super()` to Call Parent Methods

```javascript
class PetrolCar extends Car {
  constructor(brand, make, fuelEfficiency) {
    super(brand, make);
    this.fuelEfficiency = fuelEfficiency;
  }

  fuelInfo() {
    return `This petrol car has a fuel efficiency of ${this.fuelEfficiency} mpg.`;
  }
}

const myPetrolCar = new PetrolCar("Ford", "Mustang", 25);
console.log(myPetrolCar.fuelInfo());
// Output: This petrol car has a fuel efficiency of 25 mpg.
```

### Example 4: Shared Methods Between Classes

```javascript
class HybridCar extends Car {
  constructor(brand, make, batterySize, fuelTankSize) {
    super(brand, make);
    this.batterySize = batterySize;
    this.fuelTankSize = fuelTankSize;
  }

  hybridInfo() {
    return `This hybrid car has a battery of ${this.batterySize} kWh and a fuel tank of ${this.fuelTankSize} gallons.`;
  }
}

const myHybridCar = new HybridCar("Toyota", "Prius", 8.8, 11.9);
console.log(myHybridCar.brief()); // Inherited from Car
console.log(myHybridCar.hybridInfo()); // Specific to HybridCar
```

---

## 5. Constructor Function vs Classes

Before ES6, JavaScript used constructor functions to mimic classes. Classes provide a more structured and readable syntax.

### Constructor Function Example

```javascript
function Car(brand, make) {
  this.brand = brand;
  this.make = make;
}

Car.prototype.brief = function () {
  return `This is a ${this.brand}, model: ${this.make}`;
};

function ElectricCar(brand, make, range) {
  Car.call(this, brand, make); // Call Car constructor
  this.range = range;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.start = function () {
  return `This is an electric car with range: ${this.range} miles.`;
};

const myElectricCar = new ElectricCar("Tesla", "Model Y", 330);
console.log(myElectricCar.brief());
console.log(myElectricCar.start());
```

---

## 6. Real Implementation Example: Car Management System

Let's implement a simple Car Management System using classes and inheritance.

```javascript
class Car {
  constructor(brand, make, year) {
    this.brand = brand;
    this.make = make;
    this.year = year;
  }

  info() {
    return `${this.year} ${this.brand} ${this.make}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, make, year, range) {
    super(brand, make, year);
    this.range = range;
  }

  electricInfo() {
    return `${this.info()} with a range of ${this.range} miles.`;
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 370);
console.log(myElectricCar.electricInfo());
// Output: 2022 Tesla Model S with a range of 370 miles.
```

---

### Key Takeaways:

1. **Prototype**: Objects can inherit properties and methods from other objects using `__proto__` or `Object.setPrototypeOf()`.
2. **Constructor Functions**: Used to create objects with a specific structure, and we can add methods using `prototype`.
3. **Classes**: Provides a cleaner way to define objects and inheritance in JavaScript.
4. **Inheritance**: Allows child classes to inherit properties and methods from parent classes using `extends`.
5. **Method Overriding**: A child class can redefine methods from the parent class.
6. **Real-world Example**: We can use OOP concepts in web development to model real-world entities like cars.

---
