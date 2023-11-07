console.clear();
const divider = (name = " ") => console.log(`\n-----${name}-----\n`);

class Calculator {
  constructor(PI, E) {
    this.PI = PI;
    this.E = E;
  }
  requestAnimationFrame(x, y, width) {
    return (width * y) / x;
  }

  percentage(x, y) {
    if (y === 0) {
      throw new Error("Error: Divisor cannot be zero");
    } else {
      return (x / y) * 100 + "%";
    }
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) {
      throw new Error("Divisor cannot be zero");
    } else {
      return x / y;
    }
  }

  remainder(x, y) {
    if (y === 0) {
      throw new Error("Divisor cannot be zero");
    } else {
      return x % y;
    }
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    if (x < 0) {
      throw new Error(
        "Error: Cannot calculate the square root of a negative number"
      );
    } else {
      return Math.sqrt(x);
    }
  }
}

const calculator = new Calculator(Math.PI, Math.E);
console.log(calculator);
divider("Ratio");
console.log(calculator.requestAnimationFrame(24, 12, 400));
console.log(calculator.requestAnimationFrame(6, 12, 400));

divider("Percentage");
console.log(calculator.percentage(3, 12)); //? is it necessary to add try...catch?
// console.log(calculator.percentage(48, 0));
console.log(calculator.percentage(4, 32));

divider("Add");
console.log(calculator.add(15, -7));
console.log(calculator.add(-15, -7));
console.log(calculator.add(28, 6));

divider("Subtract");
console.log(calculator.subtract(45, 23));
console.log(calculator.subtract(5, 7));
console.log(calculator.subtract(14, 8));

divider("Multiply");
console.log(calculator.multiply(5, 7));
console.log(calculator.multiply(35, 2));
console.log(calculator.multiply(24, 18));

divider("Divide");
console.log(calculator.divide(35, 7));
// console.log(calculator.divide(35, 0));
console.log(calculator.divide(28, 32));

divider("Remainder");
console.log(calculator.remainder(7, 5));
// console.log(calculator.remainder(14, 0));
console.log(calculator.remainder(65, 35));

divider("Elevate");
console.log(calculator.elevate(5, 3));
console.log(calculator.elevate(28, 7));
console.log(calculator.elevate(17, 6));

divider("sqrt");
// console.log(calculator.sqrt(-25));
console.log(calculator.sqrt(48));
console.log(calculator.sqrt(150));
