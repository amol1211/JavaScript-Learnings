// 1. Hoisting in JavaScript
//We've a creation phase and execution phase.
// Hoisting in JavaScript is a mechanism where variables and functions
//declarations are moved to the top of their scope before
//the code executes.

//For example
/* console.log(myName); //Output : undefined
var myName;
myName = "Amol"; */

// How it will be in output during creation phase

/* 1. var myName = undefined;
2. console.log(myName);
3. myName = "Amol"; */

/* In ES2015 (aka ES6), hoisting is avoided by using the
let keyword instead of var (The other differences is that variables declared with let are local to the surrounding block, not the entire function.*/

//What is scope chain and hoisting in JavaScript?

/* The scope chain is used to resolve the value of variable names in JS.
Scope chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at the code. 
At the top, we have the Global Scope, which is the window Object in the browser.
Lexical Scoping means Now, the inner function can get access to their parent functions variables but the vice-versa is not true.*/

//For Example

/* let a = "Hello guys."; // Global scope

const first = () => {
  let b = "How are you?";

  const second = () => {
    let c = "Hii, I am fine thank you";
    console.log(a + b + c);
  };
  second();
  console.log(a + b + c); //I can't use C
};

first(); */

//Closure in JavaScript

/* A closure is the combination of a function bundled together (enclosed) with references
to its surrounding state (the lexical environment) */

//In other words, a closure gives you access to an outer function's
//scope from an inner function.
//In javaScript, closures are created every time a function is
//created, at function creation time.

//For example

/* const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`the sum of the two no is ${sum}`);
  };
  innerFun();
};
outerFun(5); */

//It is same like lexical scoping

//One more example

/* const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`the sum of the two no is ${sum}`);
  };
  return innerFun; ////No output
};
let checkClosure = outerFun(5);
//console.log(checkClosure());
console.dir(checkClosure); */
