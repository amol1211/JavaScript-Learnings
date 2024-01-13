//Practice Set 10

//Return the Unicode of the last characters in a string

let str = "HELLO WORLD";
let lastChar = str.length - 1;
console.log(str.charCodeAt(lastChar));
console.log(str.charCodeAt(str.length - 1));
//Output : 72

/* The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units. */
