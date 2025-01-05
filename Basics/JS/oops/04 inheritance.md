### Classes and Inheritance in JavaScript

JavaScript classes provide a clear and structured way to create objects and implement inheritance. Let’s break it down step by step.

---

### **1. Creating a Simple Class**
A class is a blueprint for creating objects. It can have properties (defined in the constructor) and methods (functions).

#### **Example: Basic `Car` Class**
```javascript
class Car {
  constructor(brand, make) { // Constructor initializes properties
    this.brand = brand;
    this.make = make;
  }

  brief() { // Method defined inside the class
    return `This is a ${this.brand}, model: ${this.make}`;
  }
}

// Create an object (instance) of the Car class
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.brief());
// Output: This is a Toyota, model: Corolla
```

---

### **2. Inheritance with `extends`**
Inheritance allows one class (child class) to acquire properties and methods of another class (base class).

#### **Example: Adding `electricCar` Class**
The `electricCar` class can inherit from `Car` using `extends`.

```javascript
class electricCar extends Car {
  start() { // New method specific to electricCar
    return `This is an electric car: ${this.brand} ${this.make}`;
  }
}

// Create an instance of electricCar
const myElectricCar = new electricCar("Tesla", "Model 3");
console.log(myElectricCar.brief()); // Inherited from Car
console.log(myElectricCar.start()); // Specific to electricCar
// Output: 
// This is a Tesla, model: Model 3
// This is an electric car: Tesla Model 3
```

---

### **3. Adding Methods with the Same Name (Method Overriding)**
A child class can redefine (override) a method from the parent class. The child’s version of the method will be used instead of the parent’s.

#### **Example: Overriding `brief` in `electricCar`**
```javascript
class electricCar extends Car {
  constructor(brand, make, range) {
    super(brand, make); // Call the parent class constructor
    this.range = range; // New property specific to electricCar
  }

  // Overriding the 'brief' method
  brief() {
    return `This is an electric car: ${this.brand}, model: ${this.make}, range: ${this.range} miles.`;
  }
}

const myElectricCar = new electricCar("Tesla", "Model S", 375);
console.log(myElectricCar.brief());
// Output: This is an electric car: Tesla, model: Model S, range: 375 miles.
```

---

### **4. Constructor in Child Classes**
When a child class has its own constructor, it must call the parent class's constructor using `super()` before using `this`.

#### **Example: Adding `petrolCar` Class**
```javascript
class petrolCar extends Car {
  constructor(brand, make, fuelEfficiency) {
    super(brand, make); // Call the Car constructor
    this.fuelEfficiency = fuelEfficiency; // New property
  }

  fuelInfo() {
    return `This petrol car has a fuel efficiency of ${this.fuelEfficiency} mpg.`;
  }
}

const myPetrolCar = new petrolCar("Ford", "Mustang", 25);
console.log(myPetrolCar.brief()); // Inherited from Car
console.log(myPetrolCar.fuelInfo()); // Specific to petrolCar
// Output:
// This is a Ford, model: Mustang
// This petrol car has a fuel efficiency of 25 mpg.
```

---

### **5. Shared Methods Between Classes**
If a method is not overridden, the child class will use the method from the parent class.

#### **Example: Shared `brief` Method**
```javascript
class hybridCar extends Car {
  constructor(brand, make, batterySize, fuelTankSize) {
    super(brand, make);
    this.batterySize = batterySize;
    this.fuelTankSize = fuelTankSize;
  }

  // Add specific method
  hybridInfo() {
    return `This hybrid car has a battery of ${this.batterySize} kWh and a fuel tank of ${this.fuelTankSize} gallons.`;
  }
}

const myHybridCar = new hybridCar("Toyota", "Prius", 8.8, 11.9);
console.log(myHybridCar.brief()); // Inherited from Car
console.log(myHybridCar.hybridInfo()); // Specific to hybridCar
// Output:
// This is a Toyota, model: Prius
// This hybrid car has a battery of 8.8 kWh and a fuel tank of 11.9 gallons.
```

---

### **6. Using `super` for Method Calls**
You can call a parent class’s method explicitly using `super.methodName()`.

#### **Example: Combining Parent and Child Methods**
```javascript
class hybridCar extends Car {
  constructor(brand, make, batterySize, fuelTankSize) {
    super(brand, make);
    this.batterySize = batterySize;
    this.fuelTankSize = fuelTankSize;
  }

  brief() { // Override
    const parentBrief = super.brief(); // Call parent method
    return `${parentBrief}, battery: ${this.batterySize} kWh, fuel tank: ${this.fuelTankSize} gallons.`;
  }
}

const myHybridCar = new hybridCar("Honda", "Insight", 7, 10.6);
console.log(myHybridCar.brief());
// Output: This is a Honda, model: Insight, battery: 7 kWh, fuel tank: 10.6 gallons.
```

---

### **7. Differences Between Classes and Constructor Functions**
Before ES6, classes were simulated using **constructor functions**. The `class` syntax is a cleaner and more structured way to write the same logic.

#### **Constructor Function Example**
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

ElectricCar.prototype = Object.create(Car.prototype); // Inherit methods
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.start = function () {
  return `This is an electric car with range: ${this.range} miles.`;
};

const myElectricCar = new ElectricCar("Tesla", "Model Y", 330);
console.log(myElectricCar.brief());
console.log(myElectricCar.start());
```

---

### **8. Key Takeaways**
1. **Base Class**: Use the `class` keyword to define the base blueprint.
2. **Inheritance**: Use `extends` to create a subclass.
3. **`super`**: 
   - In the constructor: Calls the parent class’s constructor.
   - In methods: Calls a parent class’s method.
4. **Method Overriding**: Child classes can redefine methods from the parent class.
5. **Shared Methods**: Methods not overridden in the child class are inherited from the parent.

