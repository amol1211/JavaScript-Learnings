//Practice Set 9

//Display only 280 characters of a string like the one used in Twitter

let myTweets =
  "Lorem Ipsum random text- One day, I am going to win academy award in 'Best Actor' category . If possible I would like to win one for 'Best Director' category as well. I am also going to win Grammy as well. I am also going to win 'Palm d'Or' , 'Golden lion' as well as 'Golden Bear'. I am not kidding. I am damn serious!";

let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);
console.log(myActualTweet.length);
