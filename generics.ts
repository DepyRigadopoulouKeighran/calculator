//* GENERICS
/* 
In programming, generics provide a way to write code that can work with different types while maintaining type safety. 
They allow you to create reusable components, functions, or classes that can work with a variety of data types without 
sacrificing type information.
*/

//? WITHOUT USING GENERICS
function swapStrings(a: string, b: string): void {
  const temp = a;
  a = b;
  b = temp;
}

function swapNumbers(a: number, b: number): void {
  const temp = a;
  a = b;
  b = temp;
}

//? USING GENERICS
function swap<T>(a: T, b: T): void {
  // "T" is a placeholder for the actual type. When you call the function, you specify the type you want to use.
  // It's like saying, "I'm going to use a type, but I'll tell you what type when I use the function."
  const temp = a;
  a = b;
  b = temp;
}

swap<string>("hello", "world");
swap<number>(5, 10);
//? The same "swap" function can work with various types without duplicating code.

//* DIFFERENT TYPE OF GENERICS
//? - FUNCTION GENERICS AND CLASS GENERICS

//? CLASS GENERICS
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const stringBox = new Box<string>("Hello, Generics!");
const numberBox = new Box<number>(42);
