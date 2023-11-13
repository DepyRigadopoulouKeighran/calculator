//* TYPES IN TYPESCRIPT

/* 
In programming, a type is a classification of data that specifies which operations can be performed on the data. 
Types help catch errors early, provide documentation, and improve code readability. TypeScript is a statically 
typed superset of JavaScript, meaning it adds static typing to the dynamic nature of JavaScript.
*/

//* BASIC TYPES IN TYPESCRIPT
//? NUMBER
let age: number = 25;

//--------------------//

//? STRING
let name: string = "John";

//--------------------//

//? BOOLEAN
let isStudent: boolean = true;

//--------------------//

//? ARRAY
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

//--------------------//

//? TUPLE
/* 
A tuple in TypeScript is an ordered list of elements, 
where each element can be of a different type. Tuples allow you to express an array with a fixed number 
of elements and specific types for each element.
*/
let person: [string, number] = ["Alice", 25];

// In this example, myTuple is declared as a tuple with two elements: a string, and a number.

//--------------------//

//? ENUM
/* 
An enum, short for enumeration, is a way to give more friendly names to a set of numeric values. 
Enums in TypeScript provide a way to create named constant values.
*/
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Blue;
//? In this example, Color is an enum with three members: Red, Green, and Blue. By default, TypeScript assigns numeric values starting from 0.

//--------------------//

//? ANY
let variable: any = "This can be any type";

//--------------------//

//? VOID
function logMessage(): void {
  console.log("This function doesn't return anything");
}

//--------------------//

//? NULL AND UNDEFINED
let x: null = null;
let y: undefined = undefined;

//--------------------//

//* BENEFITS

/*  
- Error Detection
    Typescript catches common programming errors during development, like assigning a string to a number variable.

- Code Readability
    Types provide a form of documentation for your code. By explicitly declaring types, it becomes easier for other 
    developers (or even yourself) to understand the intended use of variables and functions.

- Tooling Support
    Integrated development environments (IDEs) can provide better autocompletion, error checking, and refactoring 
    assistance when working with typed code.

- Refactoring
    Changing and refactoring code becomes safer and more manageable when types are involved.

- Enhanced Maintenance:
    As projects grow, the benefits of static typing become more apparent in terms of code organization, collaboration, 
    and maintenance.
*/
