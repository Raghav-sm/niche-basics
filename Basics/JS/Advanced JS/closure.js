// They are basically functions that remember the environment in which they have been created.

function outer() {
  let counter = 2;
  return function () {
    counter += 2;
    return counter;
  }
}

let increment = outer();
console.log(increment());// 4 (basically closure functions remember)
console.log(increment());// 6
console.log(increment());// 8
console.log(increment());// 10

