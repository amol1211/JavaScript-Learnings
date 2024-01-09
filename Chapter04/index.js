/* var a = 10;
var b = 20;
var sum = a + b;
console.log(sum); */

/* //Function Defination
function sum() {
  var a = 10,
    b = 20;
  var total = a + b;
  console.log(total);
} */

//Calling a function
//sum();

//Function Defination using parameters
/* function sum(a, b) {
  var total = a + b;
  console.log(total);
} */

//Calling a function

/* sum(20, 30);
sum(50, 50); */

//Function calling using function expression
//Function Expression simply means creating a function and putting into the variable.

/* function sum(a, b) {
  var total = a + b;
  console.log(total);
}

var FunExp = sum(5, 15);
FunExp; */

//Return Keyword
/* When the JS reaches a return statement, the function 
will stop executing.
Functions often compute a return value.
The return value is "returned" back to the "caller" */

/* function sum(a, b) {
  return (total = a + b);
}

var funExp = sum(5, 25);

console.log("The sum of two numbers is " + funExp);
 */

//Anonymous function
/* A function expression is similar to and has the same syntax
as a function declaration. One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions */
var funExp = function (a, b) {
  return (total = a + b);
};

console.log(funExp(5, 15));
