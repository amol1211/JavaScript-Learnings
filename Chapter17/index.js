//Function currying

/* function sum(num1) {
  //console.log(num1);
  return function (num2) {
    //console.log(num1, num2);
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
} */

/* const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

sum(5)(3)(8); */

//CallBack Hell

setTimeout(() => {
  console.log(`work is done.`);
  setTimeout(() => {
    console.log(`work is done.`);
    setTimeout(() => {
      console.log(`work is done.`);
      setTimeout(() => {
        console.log(`work is done.`);
        setTimeout(() => {
          console.log(`work is done.`);
          setTimeout(() => {
            console.log(`work is done.`);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
