//Obect literal is simply a key:value pair data structure.
//Storing variables and functions together in one
//container can be refered as an objects.

//How to create an Object?
//1st way

/* let bioData = {
  myName: "Amol",
  myAge: 22,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

bioData.getData(); */

//2nd way (No need to write functions as well after ES6)

/* let bioData = {
  myName: "Amol",
  myAge: 22,
  getData() {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

bioData.getData(); */

// What if we want object as a value inside an object

/* let bioData = {
  myName: {
    realName: "Amol",
    channelName: "Shinde",
  },
  myAge: 22,
  getData() {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

console.log(bioData.myName.channelName); */

//What is this object?
//The definition of "this" object is that it contain the current context.
//The this object can have different values depending on where it is placed.

//For example 1
//console.log(this); //Output : {}
//console.log(this.alert("Awesome"));
//It refers to the current context and that is window global object

// Example 2
/* function myName() {
  console.log(this);
}
myName(); */

//Example 3
/* var myNames = "Amol";
function myName() {
  console.log(this.myNames);
}
myName(); */

//Example 4
/* const obj = {
  myAge: 22,
  myName() {
    console.log(this);
  },
};
obj.myName();
 */

//Example 5
//This object will not work with arrow function because arrow

/* const obj = {
  myAge: 22,
  myName: () => {
    console.log(this);
  },
};
obj.myName(); */

//Example 6

let bioData = {
  myName: {
    realName: "Amol Shinde",
    channelName: "Shinde Amol",
  },
  //Things to remember is that the myName is the key and the object act like a value
  myAge: 22,
  getData() {
    console.log(
      `My name is ${this.myName.channelName} and my age is ${this.myAge}`
    );
  },
};

bioData.getData();
