//Destructing in ES6
//The destructing assignment syntax is a JavaScript expression
//that makes it possible to unpack values from arrays,
//or properties from objects, into distinct variables.

//Array Destructuring

/* const myBioData = ["Amol", "Shinde", 22]; */

/* let myFName = myBioData[0];
let myLName = myBioData[1];
let myAge = myBioData[2];

console.log(myFName);  */

/* let [myFName, myLName, myAge, myDegree = "BE"] = myBioData;
console.log(myDegree); */

//Object Destructuring

/* const myBioData = {
  myFname: "Amol",
  myLname: "Shinde",
  myAge: 22,
}; */

/* let myAge = myBioData.myAge;
let myFname = myBioData.myFname; */

/* let { myFname, myLname, myAge, myDegree = "BE" } = myBioData;
console.log(myLname); */
