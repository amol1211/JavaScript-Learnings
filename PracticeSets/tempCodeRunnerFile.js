//Sol 1 :
const newMonth = months.splice(months.length, 0, "Dec");
console.log(months);

//sol 2 :
//console.log(newMonth); //shows deleted element

//sol 3 :
const indexOfMonth = months.indexOf("march");

if (indexOfMonth != -1) {
  const updateMonth = months.splice(indexOfMonth, indexOfMonth, "March");
  console.log(months);
} else {
  console.log("No such data found");
}