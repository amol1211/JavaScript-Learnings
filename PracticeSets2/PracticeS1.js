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

const countVowels = (str) => {
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
