# calculator Project

My first small project in Javascript

**Overview**
This is a simple calculator project in JavaScript, designed to perform various mathematical operations and unit conversions.
It includes functionalities for basic arithmetic operations, percentage calculation, unit conversion for mass and length,
temperature conversion, and BMI calculation.
It also includes error handling for specific scenarios.

**Table of Contents**

- Features
- Calculator Class
- Usage
- Error Handlin

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division, and remainder.
- Percentage calculation.
- Exponential calculation.
- Square root calculation.
- Mass and length unit conversion.
- Temperature conversion.
- BMI (Body Mass Index) calculation.

## Calculator Class

The project includes a `Calculator` class with various methods for performing different calculations. Here's a brief overview of the methods:

- `requestAnimationFrame(x, y, width)`: Calculates the ratio of two numbers and adjusts it based on a specified width.
- `percentage(x, y)`: Calculates the percentage of one number relative to another.
- `add(x, y)`: Adds two numbers.
- `subtract(x, y)`: Subtracts one number from another.
- `multiply(x, y)`: Multiplies two numbers.
- `divide(x, y)`: Divides one number by another.
- `remainder(x, y)`: Calculates the remainder of the division of two numbers.
- `elevate(x, y)`: Raises a number to the power of another.
- `sqrt(x)`: Calculates the square root of a number.
- `massConvertor(value, fromUnit, toUnit)`: Converts mass from one unit to another.
- `findBmi(kilograms, height)`: Calculates BMI based on weight in kilograms and height in meters.
- `lengthConvertor(value, lengthFrom, lengthTo)`: Converts length from one unit to another.
- `temperatureConvertor(value, tempFrom, tempTo)`: Converts temperature from one unit to another.

**Usage**
To use the calculator class, follow these steps:

1. Import or include the Calculator class in your JavaScript code.

```js
const calculator = new Calculator(Math.PI, Math.E);
```

2. Create an instance of the `Calculator` class with the values of `Math.PI` and `Math.E`.

3. Call the various class methods to perform mathematical operations and calculations.

**Error Handling**
The calculator class includes error handling for specific scenarios, such as division by zero and
attempting to calculate the square root of a negative number. Errors are thrown with informative error messages.

## TypeScript Version

- A TypeScript version of this calculator project is also available. You can find the TypeScript files in the typescript folder.
  The TypeScript version includes type annotations for better code readability and maintainability.

- There is also some notes explaining about interface, types and generics.

**Acknowledgments**
I would like to express my gratitude to my teachers Luke Dowling, Jay Radan, and Sara Dalal for their continuous support
and dedication in teaching JavaScript and TypeScript. Their guidance has been invaluable in the development of this project.
