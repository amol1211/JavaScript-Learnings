/* You're creating a website for your college. Create a class "User" with 2 properties, name & email. 
It also has a method called viewData() that allows user to view website data. */

let DATA = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new value";
  }
}

let student1 = new User("Amol", "amol@email.com");
let student2 = new User("Kamal", "kamal@email.com");

let admin1 = new Admin("admin", "admin@college.com");

/* --------------------------------------------- */

/* Create a new class called "Admin" which inherits from "User". Add a new method
called "editData" to Admin that allows it to
edit website data. */
