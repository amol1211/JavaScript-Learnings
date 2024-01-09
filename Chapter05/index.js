// 1. Let Vs Const Vs Var

/* var myName = "Amol Shinde";
console.log(myName);

myName = "Aj";
console.log(myName); */

/* let myName = "Amol Shinde";
console.log(myName);

myName = "Aj";
console.log(myName); */

/* const myName = "Amol Shinde";
console.log(myName);

myName = "Aj";
console.log(myName); */

//var => Function scope
//let and const => Block scope

/* function biodata() {
  var myFistName = "Amol";
  console.log(myFistName);

  if (true) {
    var myLastName = "Shinde";
    console.log("inner " + myLastName);
    console.log("inner " + myFistName);
  }
  console.log("innerOuter " + myLastName);
} */

/* function biodata() {
  let myFistName = "Amol";
  console.log(myFistName);

  if (true) {
    let myLastName = "Shinde";
    console.log("inner " + myLastName);
    console.log("inner " + myFistName);
  }
  console.log("innerOuter " + myLastName);
} */

/* function biodata() {
  const myFistName = "Amol";
  console.log(myFistName);

  if (true) {
    const myLastName = "Shinde";
    console.log("inner " + myLastName);
    console.log("inner " + myFistName);
  }
  console.log("innerOuter " + myLastName);
}

biodata(); */

/*---------------------------------------------------------*/

// 2. Template literals (Template strings)

/* for (var num = 1; num <= 10; num++) {
  var tableOf = 8;
  // console.log(tableOf + " * " + num + " = " + tableOf * num); 
  console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}  */

/*------------------------------------------------------------*/

// 3. Default parameters

/* function mult(a, b = 5) {
  return a * b;
}

console.log(mult(3)); */

/* ---------------------------------------------------------------- */

// 4. Fat Arrow function

/* console.log(sum());

function sum() {
  let a = 5;
  b = 6;
  let sum = a + b;
  return `the sum of the two number is ${sum}`;
} */

const sum = () => `the sum of the two number is ${(a = 5) + (b = 6)}`;

console.log(sum());
