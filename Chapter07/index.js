//Escape Character
/* 
//We can use \"Vikings\" to use double quotes in double quotes.
let anySentence = 'We are the so-called "Vikings" from the north.';
console.log(anySentence);

// Or we can simply use the alternate quotes.
let anyySentence = 'We are the so-called "Vikings" from the north.';
console.log(anyySentence); */

//Finding an occurrence of a specified text in a string

/* const myBioData = "I am Amol Shinde";
/* const myBioData = "I am a Amol Shinde"; */
/* console.log(myBioData.indexOf("a", 3)); 
console.log(myBioData.indexOf("a"));
console.log(myBioData.lastIndexOf("m", 7)); */

//Finding a string under string
/* Search method searches a string for a specified value
 and returns the position of the match*/

/* const myBioData = "I am Amol Shinde";
let sData = myBioData.search("Amol");
console.log(sData); */

//Extracting string parts

/* The slice() method selects the elements starting at the 
given start argument, and ends at, but does not include, the  
given end argument. 
Note: The original array will not be changed. */

/* var str = "Apple, Banana, Kiwi, Mango"; */

/* let res = str.slice(0, 4);
console.log(res); */ //Output : Appl
//If we pass starting index somewhere from middle and ending index as lets say, -2, the value it print will be until the index where last index is starting, for example :

/* let res = str.slice(7, -2);
console.log(res); */ //Output : Banana, Kiwi, Man

//The substring() Method
//substring() is similar to slice().
//Only difference is that substring() don't accept
//negative indexes.

/* var str = "Apple, Banana, Kiwi";
let res = str.substring(0, 4);
console.log(res); */

//The substr() method
//substr() is also similar to slice().
//The difference is that the second parameter specifies the
// length of the extracted part.

/* var str = "Apple, Banana, Kiwi";
let res = str.substr(0, 4); 
let res = str.substr(-4);
console.log(res); */

//Replacing string content()

//The replace() method replaces a specified value with another value in a string.
//Important : It doesn't change the original string also it's a case sensative
/* let myBioData = `I am Amol Shinde`;
let replaceData = myBioData.replace("Amol", "Kamal");
console.log(replaceData); */

//Extracting string characters

//There are 3 methods for extracting string characters:

//charAt(position)
//charCodeAt(position) :  Returns the unicode of the characters at a specified index in a string
//Property access []

/* let str = "HELLO WORLD";
console.log(str.charAt(0)); */

let str = "HELLO WORLD";
console.log(str.charCodeAt(0));
//Output : 72
