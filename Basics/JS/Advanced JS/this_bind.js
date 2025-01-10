/*
bind: Creates a new function with this set to a specific value, but doesn't call it immediately.
call: Calls the function immediately with this set to a specific value and additional arguments passed individually.
apply: Similar to call, but arguments are passed as an array.
*/

let Car = {
  speed: 400,
  tyre: "softCompound",
  color: "red",
  specs() {
    console.log(`This is a ${this.color} color car. Goes up to ${this.speed}.`);
  }
};

// Using bind
let specsFunction = Car.specs.bind({ color: "Blue", speed: 500 });
// Call the bound function
specsFunction(); // Output: This is a Blue color car. Goes up to 500.

// Using call (immediate execution)
Car.specs.call({ color: "Green", speed: 300 });
// Output: This is a Green color car. Goes up to 300.

// Using apply (immediate execution with arguments as an array)
Car.specs.apply({ color: "Yellow", speed: 600 });
// Output: This is a Yellow color car. Goes up to 600.


let Kar = {
  specs(speedModifier) {
    console.log(`This is a ${this.color} color car. Goes up to ${this.speed + speedModifier}.`);
  }
};

// Using call with additional arguments
Car.specs.call({ color: "Purple", speed: 200 }, 50);
// Output: This is a Purple color car. Goes up to 250.

// Using apply with additional arguments (array format)
Car.specs.apply({ color: "Orange", speed: 150 }, [100]);
// Output: This is an Orange color car. Goes up to 250.
