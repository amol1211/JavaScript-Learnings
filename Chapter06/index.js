//Normal for loop

/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];

for (var i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
} */

// After ES6 we have for..in and for..of loop also

//For in loop returns indices of elements in array

/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];

for (let elements in myFriends) {
  console.log(elements);
} */

//For of loop returns elements in array

/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];

for (let elements of myFriends) {
  console.log(elements);
} */

//Array.prototype.forEach()
//Calls a function for each element in the array.
//IMPORTANT : We can't use break statement in forEach() loop

/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];

myFriends.forEach(function (element, index, array) {
  console.log(element + " index : " + index + " " + array);
}); */

// forEach using Fat arrow function

/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];

myFriends.forEach((element, index, array) => {
  console.log(element + " index : " + index + " " + array);
}); */

//Searching and Filter in an array
//Array.prototype.indexOf()
/* var myFriends = ["Vinod", "Ramesh", "Arjun", "Vishal"];
 */
//Sort and Compare in an array

//CRUD

/* const animals = ["Pigs", "Goats", "Sheep"];
 */ /* const count = animals.push("chicken", "cats", "cow"); */
/* const count = animals.unshift("chicken", "cats", "cow");
console.log(animals); */
/* console.log(count); */

/* const myNumbers = [1, 2, 3, 5];

myNumbers.unshift(4, 6);
console.log(myNumbers); */

/* const plants = ["Broccoli", "Cauliflower", "Tomato", "Cabbage"];

console.log(plants);
console.log(plants.pop());
console.log(plants.shift());
console.log(plants);
 */

//map, reduce and filter method

const array1 = [1, 4, 9, 16, 25];
//num > 9

/* let newArr = array1.map((curElem, index, arr) => {
  return curElem > 9;
});
console.log(array1);
console.log(newArr); */

//Output : [ 1, 4, 9, 16, 25 ]
//[ false, false, false, true, true ]

/* let newArr = array1.map((curElem, index, arr) => {
  return `Index no = ${index} and the value is ${curElem} belong to ${arr}`;
});

console.log(newArr); */

//Reduce method

/* let arr = [5, 6, 2];

let sum = arr.reduce((accumulater, curElem) => {
    debugger;
  return (accumulater *= curElem);
});

console.log(sum); */

//Flattening of 2D, 3D array into one dimensional array

/* const arr = [
  ["zone_1", "zone_2"],
  ["zone_3", "zone_4"],
  ["zone_5", "zone_6"],
  ["zone_7", "zone_8"],
];

let flatArr = arr.reduce((accum, currVal) => {
  return accum.concat(currVal);
});
console.log(flatArr); */
