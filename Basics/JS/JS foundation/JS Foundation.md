# JavaScript Foundation

## Primitives

- **Number**: Represents numeric values, e.g., `42`.
- **String**: Represents text, e.g., `'hello'`.
- **BigInt**: Represents integers of arbitrary size, e.g., `123n`.
- **Boolean**: Represents true or false values, e.g., `true` or `false`.

## Non-Primitives

- **Objects**: Complex data structures that include key-value pairs. Examples include:
  - **Symbols**: Unique and immutable values used as object keys.
  - **Arrays**: List-like objects used to store multiple values, e.g., `[1, 2, 3]`.

JavaScript uses primitives and objects to handle data efficiently in various contexts.

---

### Example: Multiplying Two Numbers Using Arrow Functions

#### Method 1: Normal Arrow Function

```javascript
const myMultiply = (a, b) => {
  return a * b;
};
```

#### Method 2: Implicit Return for One-liners

```javascript
const myMultiply = (a, b) => a * b;
```

---

### First-Class Functions and Higher-Order Functions

#### Example

```javascript
function myProcedure(str) {
  return `myProcedure ${str}`;
}
function maketea(fn) {
  return fn("kelsa maadu");
}

let ans = maketea(myProcedure);
console.log(ans); // Output: "myProcedure kelsa maadu"
```

Explanation: Functions in JavaScript are first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables.

---

## Challenges

### Challenge 1: Playing with Types

#### Task 1: Convert String to Number

```javascript
function stringToNumber(str) {
  const num = Number(str);
  return isNaN(num) ? "Not a number" : num;
}
```

#### Task 2: Flip Boolean

```javascript
function flipBoolean(input) {
  return !Boolean(input);
}
```

#### Task 3: Identify Type

```javascript
function whatAmI(input) {
  const type = typeof input;
  if (type === "number") return "I'm a number!";
  if (type === "string") return "I'm a string!";
  return `I'm a ${type}!`;
}
```

#### Task 4: Truthy or Falsey

```javascript
function isItTruthy(value) {
  return value ? "It's truthy!" : "It's falsey!";
}
```

---

### Challenge 2: Playing with Variables

#### Mathematical Operations

```javascript
function performOperations(a, b) {
  console.log("Add:", a + b);
  console.log("Subtract:", a - b);
  console.log("Multiply:", a * b);
  console.log("Divide:", a / b);
  console.log("Increment:", ++a);
  console.log("Decrement:", --b);
  console.log("Reminder:", a % b);
}
```

---

### Challenge 3: Arrays and Methods

#### Task 1: Filter Numbers

```javascript
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}
```

#### Task 2: Reverse Array

```javascript
function reverseArray(arr) {
  return arr.reverse();
}
```

#### Task 3: Find Maximum

```javascript
function findMax(arr) {
  return Math.max(...arr);
}
```

#### Task 4: Remove Duplicates

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

#### Task 5: Flatten Nested Array

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}
```

---

### Challenge 4: Loops

#### Task 1: Sum of First N Natural Numbers

```javascript
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}
// or
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

#### Task 2: Multiplication Table

```javascript
function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}
```

#### Task 3: Count Vowels

```javascript
function countVowels(str) {
  let vowelCount = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
```

---

### Challenge 5: Higher-Order Functions and Arrow Functions

#### Task 1: Square Numbers

```javascript
const squareNumbers = (arr) => {
  return arr.map((i) => i * i);
};
```

#### Task 2: Filter Even Numbers

```javascript
const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 == 0);
};
```

#### Task 3: Sum of Positive Numbers

```javascript
const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
`or`;
const sumPositiveNumbers = (arr) => {
  return arr.filter((num) => num > 0).reduce((x, y) => (x = x + y), 0);
};
```

#### Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

```javascript
const getNames = (arr) => arr.map((obj) => obj.name);
`or`;
const getNames = (arr) => {
  return arr.map((obj) => obj.name);
};
```

#### Task 5: Find Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

```javascript
const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
`or`;
const findLongestWord = (arr) => {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};
```

---

### Challenge 6: Nested Functions and Context

#### Task 1: Using `this` in Objects

###### Create an object person with a method introduce() that uses this additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

```javascript
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
```

#### Task 2: Function within a Function

```javascript
function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
```
