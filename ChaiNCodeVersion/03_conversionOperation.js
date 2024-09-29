//let score = 12; // number
//let score = "12abc"; // string

//console.log(typeof score); //string
//console.log(typeof score); //string

//let valueInNumber = Number(score); //string converted to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber); //NaN // 0 in case of "null" // NaN in case of undefined

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn); //true

//1 => true; 0 => false
//"" => false
//"hitesh" => true

/* Important Note: 1. if isLoggedIn was "" it would give false
                2. if isLoggedIn was "Amol" it would give true  */

let randomNum = 33;

let stringNum = String(randomNum);
console.log(stringNum); // 33
console.log(typeof stringNum); // string
