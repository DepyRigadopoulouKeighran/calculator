# calculator

My first small project in Javascript

**JavaScript Calculator Class**
This JavaScript calculator class provides various mathematical operations, such as :
addition, subtraction, multiplication, division, and more.
It also includes error handling for specific scenarios.

**Table of Contents**

- Usage
- Class Methods
- Error Handling

**Usage**
To use the calculator class, follow these steps:

1. Import or include the Calculator class in your JavaScript code.

```js
const calculator = new Calculator(Math.PI, Math.E);
```

2. Create an instance of the `Calculator` class with the values of `Math.PI` and `Math.E`.

3. Call the various class methods to perform mathematical operations and calculations.

**Class Methods**

- `requestAnimationFrame(x, y, width)`: Calculates the result of `(width * y) / x`.

- `percentage(x, y)`: Calculates the percentage of `x` in relation to `y`. If `y` is zero, it throws an error.

- `add(x, y)`: Adds two numbers, `x` and `y`.

- `subtract(x, y)`: Subtracts `x` from `y`.

- `multiply(x, y)`: Multiplies `x` and `y`.

- `divide(x, y)`: Divides `x` by `y`. Throws an error if `y` is zero.

- `remainder(x, y)`: Calculates the remainder of `x` divided by `y`. Throws an error if `y` is zero.

- `elevate(x, y)`: Raises `x` to the power of `y`.

- `sqrt(x)`: Calculates the square root of `x`. Throws an error if `x` is negative.

**Error Handling**
The calculator class includes error handling for specific scenarios, such as division by zero and
attempting to calculate the square root of a negative number. Errors are thrown with informative error messages.
