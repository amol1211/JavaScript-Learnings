//Spread Operator

const colors = ["red", "green", "blue", "white"];

const myColors = ["red", "green", "blue", "white", "yellow", "black"];
// 2nd time add one more color on top and we need to write it again
//on myColors array too

//instead we simply use spread operator

const MyFavColors = [...colors, "yellow", "black"];
console.log(MyFavColors);
