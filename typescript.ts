console.clear();
const divider = (name: string = " "): void =>
  console.log(`\n-----${name}-----\n`);

class Calculator {
  public PI: number;
  public E: number;

  constructor(PI: number, E: number) {
    this.PI = PI;
    this.E = E;
  }

  requestAnimationFrame(x: number, y: number, width: number): number {
    return (width * y) / x;
  }

  percentage(x: number, y: number): never | string {
    if (y === 0) {
      throw new Error("Error: Divisor cannot be zero");
    } else {
      return (x / y) * 100 + `%`;
    }
  }

  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return y - x;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): never | number {
    if (y === 0) {
      throw new Error("Error: Divisor cannot be zero");
    } else {
      return x / y;
    }
  }

  remainder(x: number, y: number): never | number {
    if (y === 0) {
      throw new Error("Error: Divisor cannot be zero");
    } else {
      return x % y;
    }
  }

  elevate(x: number, y: number): number {
    return x ** y;
  }

  sqrt(x: number): never | number {
    if (x < 0) {
      throw new Error(
        "Error: Cannot calculate the square root of a negative number"
      );
    } else {
      return Math.sqrt(x);
    }
  }

  massConvertor(
    value: number,
    fromUnit: string,
    toUnit: string
  ): never | number {
    const unitConvertor: Record<string, Record<string, number>> = {
      kilograms: {
        grams: 1000,
        milligrams: 1e6,
        pounds: 2.20462,
        ounces: 35.27396,
        cups: 4.22675,
        liters: 1,
      },
      grams: {
        kilograms: 0.001,
        milligrams: 1000,
        pounds: 0.00220462,
        ounces: 0.03527396,
        cups: 0.00422675,
        liters: 0.001,
      },
      milligrams: {
        kilograms: 1e-6,
        grams: 0.001,
        pounds: 2.20462e-6,
        ounces: 3.527396e-5,
        cups: 4.22675e-6,
        liters: 1e-6,
      },
      pounds: {
        kilograms: 0.453592,
        grams: 453.592,
        milligrams: 453592,
        ounces: 16,
        cups: 2.36696,
        liters: 0.453592,
      },
      ounces: {
        kilograms: 0.0283495,
        grams: 28.3495,
        milligrams: 28349.5,
        pounds: 0.0625,
        cups: 0.120094,
        liters: 0.0283495,
      },
      cups: {
        kilograms: 0.236588,
        grams: 236.588,
        milligrams: 236588,
        pounds: 0.523714,
        ounces: 8.45351,
        liters: 0.236588,
      },
      liters: {
        kilograms: 1,
        grams: 1000,
        milligrams: 1e6,
        pounds: 2.20462,
        ounces: 35.27396,
        cups: 4.22675,
      },
    };
    if (!unitConvertor[fromUnit] || !unitConvertor[fromUnit][toUnit]) {
      throw new Error("Error : Invalid unit conversion");
    }
    const multiplier = unitConvertor[fromUnit][toUnit];
    return value * multiplier;
  }

  findBmi(kilograms: number, height: number): string {
    if (kilograms / height ** 2 < 18.5) {
      return (
        "Your BMI is: " + kilograms / height ** 2 + ". You are underweight"
      );
    }
    if (kilograms / height ** 2 > 18.5 && kilograms / height ** 2 < 25) {
      return (
        "Your BMI is: " + kilograms / height ** 2 + ". Your weight is normal"
      );
    } else {
      return "Your BMI is: " + kilograms / height ** 2 + ". You are overweight";
    }
  }

  lengthConvertor(
    value: number,
    lengthFrom: string,
    lengthTo: string
  ): never | number {
    const lengthUnitConvertor: Record<string, Record<string, number>> = {
      kilometers: {
        meters: 1000,
        decimeters: 10000,
        centimeters: 100000,
        miles: 0.621371,
      },
      meters: {
        kilometers: 0.001,
        decimeters: 10,
        centimeters: 100,
        miles: 0.000621371,
      },
      decimeters: {
        kilometers: 0.0001,
        meters: 0.1,
        centimeters: 10,
        miles: 0.00000621371,
      },
      centimeters: {
        kilometers: 0.00001,
        meters: 0.01,
        decimeters: 0.1,
        miles: 0.00000621371 / 100,
      },
      miles: {
        kilometers: 1.60934,
        meters: 1609.34,
        decimeters: 16093.4,
        centimeters: 160934,
      },
    };
    if (
      !lengthUnitConvertor[lengthFrom] ||
      !lengthUnitConvertor[lengthFrom][lengthTo]
    ) {
      throw new Error("Error : Invalid length unit conversion");
    }
    const lengthMultiplier = lengthUnitConvertor[lengthFrom][lengthTo];
    return value * lengthMultiplier;
  }

  temperatureConvertor(
    value: number,
    tempFrom: string,
    tempTo: string
  ): never | number {
    const tempUnitsConvertor: Record<
      string,
      Record<string, (input: number) => number>
    > = {
      celsius: {
        fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
      },
      fahrenheit: {
        celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
      },
    };
    if (
      !tempUnitsConvertor[tempFrom] ||
      !tempUnitsConvertor[tempFrom][tempTo]
    ) {
      throw new Error("Error : Invalid temperature conversion");
    }
    return tempUnitsConvertor[tempFrom][tempTo](value);
  }
}

const calculator = new Calculator(Math.PI, Math.E);
console.log(calculator);
divider("Ratio");
console.log(calculator.requestAnimationFrame(24, 12, 400));
console.log(calculator.requestAnimationFrame(6, 12, 400));

divider("Percentage");
console.log(calculator.percentage(3, 12));
// console.log(calculator.percentage(48, 0)); //? -> Will throw an error
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
// console.log(calculator.divide(35, 0)); //? -> Will throw an error
console.log(calculator.divide(28, 32));

divider("Remainder");
console.log(calculator.remainder(7, 5));
// console.log(calculator.remainder(14, 0)); //? //? -> Will throw an error
console.log(calculator.remainder(65, 35));

divider("Elevate");
console.log(calculator.elevate(5, 3));
console.log(calculator.elevate(28, 7));
console.log(calculator.elevate(17, 6));

divider("sqrt");
console.log(calculator.sqrt(48));
// console.log(calculator.sqrt(-25)); //? -> Will throw an error
console.log(calculator.sqrt(150));

divider("Mass Convertor");
console.log(calculator.massConvertor(5, "kilograms", "pounds"));
console.log(calculator.massConvertor(5, "pounds", "kilograms"));
console.log(calculator.massConvertor(5, "cups", "milligrams"));
// console.log(calculator.massConvertor(5, "oz", "milligrams")); //? -> Will throw an error

divider("Body Mass Index");
console.log(calculator.findBmi(40, 1.7));
console.log(calculator.findBmi(60, 1.7));
console.log(calculator.findBmi(90, 1.7));

divider("Length Convertor");
console.log(calculator.lengthConvertor(3, "kilometers", "meters"));
console.log(calculator.lengthConvertor(3, "kilometers", "miles"));
// console.log(calculator.lengthConvertor(3, "kilometers", "oz")); //? -> Will throw an error

divider("Temperature Convertor");
console.log(calculator.temperatureConvertor(30, "celsius", "fahrenheit"));
console.log(calculator.temperatureConvertor(80, "fahrenheit", "celsius"));
// console.log(calculator.temperatureConvertor(80, "farenheit", "celsius")); //?-> there is a typo and will throw an error
