const accountId = 4243130;
let accountEmail = "amol@google.com";
var accountPassword = "123456";
accountCity = "Jaipur";
let accountState;

console.log(accountId);

// accountId = 2
//When we declare variable with const keyword
//reclaring or reassigning it with different value is not allowed.
/* Prefer not to use var
because of issue in block scope and functional scope */
accountEmail = "ab@cd.com";
accountPassword = "35646461";
accountCity = "Pune";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState, //undefined
]);
