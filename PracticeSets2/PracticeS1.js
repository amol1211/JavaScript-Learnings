/* Prompt the user to enter their full name. Generate a username for them based on the input. 
Start username with @, followed by their full name and ending with the fullname length. 

eg. user name = "shahrukhkhan", username should be "@shahrukhkhan12" */

/* let fullName = prompt(
  "To create your username please enter your full name without spaces."
);

let username = "@" + fullName.concat(fullName.length);

console.log(username); */

/*------------------*/

/* Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the String. */

/* function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
} */

//Create the same function using Arrow function

/* const countVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};
 */

/*-----------------------------------------*/

//We're given array of marks of students. Filter out the marks of students which are 90+

/* let marks = [97, 64, 32, 49, 99, 96, 86];

let toppersArray = marks.filter((val) => {
  return val > 90;
});

console.log(toppersArray); */

/*-----------------------------------------*/

/*Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

/* let n = prompt("Enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});

console.log("sum = ", sum);

let factorial = arr.reduce((res, curr) => {
  return res * curr;
});

console.log("factorial = ", factorial);
 */

/* Create a h1 heading element with text of your choice. Append more text to it using JS */

/* let h1 = document.querySelector("h1");

console.dir(h1.innerText);

h1.innerText = h1.innerText + " is genius!"; */

/* ---------------------------------- */

/* Create 3 divs with common class name- "box". Access them and add some unique text to each of them */

let divs = document.querySelectorAll(".box");
/* console.log(divs[0]);*/

let idx = 1;
for (let div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}

/* divs[0].innerText = "new unique val 1";
divs[1].innerText = "new unique val 2";
divs[2].innerText = "new unique val 3"; */
