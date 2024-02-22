//Whenever you add a new property to a class, you need to include it as a parameter in the class constructor and assign its value in the constructor.

class UserAccount {
    name: string;
    accountType = "user";
  
    // email: string;
    //   Property 'email' has no initializer and is not definitely assigned in the constructor.
    address: string | undefined;
  
    constructor(name: string) {
      this.name = name;
      // Note that this.email is not set
    }
  }
  
  // EXCLAMATION MARK (!):
  class OKGreeter {
    // Not initialized, but no error
    name!: string;
  }
  
  
  
  // When we add readonly to a property, that property will never be changed.
  class Car {
    readonly color: String;
    readonly carname: String;
    constructor(c: string, cn: string) {
      this.color = c;
      this.carname = cn;
    }
  }
  
  let car = new Car("Black","Civic")
  console.log(car);
  
  // car.color = "white"           // ERROR
  // car.carname = "supra"         // ERROR 
  
  console.log(car);
  
      
  
  