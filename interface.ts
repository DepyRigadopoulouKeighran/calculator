//* INTERFACE
/* 
In programming, an interface is a way to define a contract for the structure of an object. 
It specifies a set of methods, properties, and other members that a class or object must implement. 
Interfaces are used to establish a common structure that multiple classes or objects can adhere to, 
promoting consistency and providing a way to achieve polymorphism.
*/

//? A basic TypeScript representation
/* 
Imagine you have a TV remote control. The remote has buttons like power, volume up, volume down, 
and channel change. Now, let's think of these buttons as actions that the remote can perform.
*/
interface RemoteControl {
  power(): void;
  volumeUp(): void;
  volumeDown(): void;
  changeChannel(): void;
}

/* Now, let's say you have an actual TV remote and a soundbar remote. Both should follow the rules 
of the RemoteControl interface. This means they need to have buttons for power, volume up, volume down, 
and channel change.*/
class TVRemote implements RemoteControl {
  power() {
    // logic to turn the TV on or off
  }

  volumeUp() {
    // logic to increase TV volume
  }

  volumeDown() {
    // logic to decrease TV volume
  }

  changeChannel() {
    // logic to change TV channel
  }
}

class SoundbarRemote implements RemoteControl {
  power() {
    // logic to turn the soundbar on or off
  }

  volumeUp() {
    // logic to increase soundbar volume
  }

  volumeDown() {
    // logic to decrease soundbar volume
  }

  changeChannel() {
    // Since a soundbar typically doesn't have channels,
    //this method might not do anything.
  }
}

/* 
The keyword implements is a specific and reserved keyword in many programming languages, 
including TypeScript. It's used to indicate that a class or object is adopting or conforming 
to a particular interface. It establishes a relationship between a class and an interface, 
stating that the class promises to provide implementations for all the methods declared in that interface.

The implements keyword is essential. It tells TypeScript that TVRemote and SoundbarRemote are going to follow 
the rules specified by the RemoteControl interface. If, for some reason, a class doesn't provide implementations 
for all the methods declared in the interface, TypeScript will generate a compilation error to notify you about 
the missing implementations.
*/

/*
So, the RemoteControl interface acts like a contract, ensuring that any class claiming to be a remote control 
must have the specified buttons (methods). This helps make sure that different types of remote controls 
(TV remote, soundbar remote) follow a consistent set of rules, just like different devices following the same 
remote control interface.
 */

//* OTHER TYPE OF INTERFACE
//? OBJECT TYPE INTERFACE
// This is the most straightforward interface type. It describes the structure of an object,
//specifying the names and types of its properties.

interface Person {
  name: string;
  age: number;
}

// Creating objects of type Person
let person1: Person = {
  name: "Alice",
  age: 30,
};

//--------------------//

//? FUNCTION TYPE INTERFACE
// This interface describes the structure of a function. It specifies the types of parameters the
//function should take and the type of value it should return.

interface Calculate {
  (x: number, y: number): number;
}

// Function 1: Add
let add: Calculate = (a, b) => a + b;

// Function 2: Subtract
let subtract: Calculate = (a, b) => a - b;

// Function 3: Multiply
let multiply: Calculate = (a, b) => a * b;

// Function 4: Divide
let divide: Calculate = (a, b) => (b !== 0 ? a / b : NaN);

//--------------------//

//? OPTIONAL PROPERTIES
// You can specify that certain properties in an interface are optional,
//meaning they may or may not be present in an object.
interface Car {
  brand: string; // In an object of type "Car" is required a `brand` property
  model?: string; // In an object of type "Car" is optional a `model` property
}

let myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};

let anotherCar: Car = {
  brand: "Honda",
};

//--------------------//

//? READONLY PROPERTIES
// This interface lets you define properties that can only be assigned a value when the object
// is created and cannot be modified afterward.

interface Point {
  readonly x: number; // Here, once you create an object of type Point, you cannot change the values of x and y.
  readonly y: number;
}

let myPoint: Point = { x: 10, y: 20 };
// This is how you create an object of type Point. During creation,
//you set the initial values for x and y. Once created, you cannot change these values.

myPoint.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
myPoint.y = 40; // Error: Cannot assign to 'y' because it is a read-only property.

//--------------------//

//? FUNCTION SIGNATURES
// Function signatures allow you to describe the shape of a function without providing its full implementation.

interface Greet {
  (name: string): string;
}
/*This interface defines a function type. It states that any function of type Greet should:
- Take a single parameter name of type string.
- Return a value of type string.*/

// This is a function that sticks to this interface
let greetFunction: Greet = function (name: string): string {
  return `Hello, ${name}!`;
};

/* Here, greetFunction is a valid implementation of the Greet interface. It takes a name parameter of 
type string and returns a greeting string.
*/
