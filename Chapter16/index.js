//ECMAScript 2016/ES7 features

//1. Array include
/* const colors = ["red", "green", "blue", "white", "pink"];
const isPresent = colors.includes("purple");
console.log(isPresent); */

//2. Exponentiation operator (**)
/* console.log(2 ** 3); */

//ECMAScript 2017/ES8

//1. String padding
//2. Object.values()
//3. Object.entries()

/* const message = "My name is Amol";
console.log(message);
console.log(message.padStart(5));
console.log(message.padEnd(10));

let myName = "Amol".padStart(7);
console.log(myName); */

//Object.values()

/* const person = { name: "Fred", age: 87 };
 */
/* console.log(Object.values(person)); */ //Output : [ 'Fred', 87 ]
/* console.log(Object.entries(person)); */ //Output : [ [ 'name', 'Fred' ], [ 'age', 87 ] ]

//ECMAScript 2018/ES9

/* const person = { name: "Fred", age: 87 };
const sPerson = { ...person };

console.log(person);
console.log(sPerson); */

/* const person = { name: "Fred", age: 87 };
 */ // console.log(Object.values(person));
/* const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj)); */

// ES10/ECMAScript2019
//Array.prototype.{Float32Array,flatMap}
//Object.fromEntries()

//ES11/ECMAScript2020
// 1. BigInt

let oldNum = Number.MAX_SAFE_INTEGER;
/* console.log(oldNum);*/
console.log(9007199254740991n + 12n);
const newNum = 9007199254740991n + 12n;

console.log(newNum);
console.log(typeof newNum);
