/* 1. Add Dec at the end of an array.
2. What is the return value of splice method.
3. Update march to March (update).
4. Delete June from an array. */

const months = ["Jan", "march", "April", "June", "July"];

//Sol 1 :
/* const newMonth = months.splice(months.length, 0, "Dec");
console.log(months); */

//sol 2 :
//console.log(newMonth); //shows deleted element

//sol 3 :
/* const indexOfMonth = months.indexOf("march");

if (indexOfMonth != -1) {
  const updateMonth = months.splice(indexOfMonth, indexOfMonth, "March");
  console.log(months);
  console.log(updateMonth);
} else {
  console.log("No such data found");
} */

//Sol 4 :
const idxMonth = months.indexOf("June");

if (idxMonth != -1) {
  const updatedMonth = months.splice(idxMonth, 1);
  console.log(months);
  console.log(updatedMonth);
} else {
  console.log("No such data found");
}
