// EXAMPLE 01
// Define an interface
interface Printable {
  print(): void;
}

// Implement the interface in a class
class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

// Create an instance of the class
const myPrinter = new Printer();

// Call the method defined in the interface
myPrinter.print();

// EXAMPLE 02
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}

// Example 03
interface myclass {
  myName: string;
  myAge: number;
  myId: number;
}
class MyClass implements myclass {
  myName: string;
  myAge: number;
  myId: number;
  hobbies: string[];
  constructor(mN: string, mA: number, mI: number, H: string[]) {
    this.myName = mN;
    this.myAge = mA;
    this.myId = mI;
    this.hobbies = H;
  }
  myHobbies(val1: string[]) {
    this.hobbies = val1;
  }
}

let obj1 = new MyClass("AbdulRehman", 19, 12345, [
  "Programmer",
  "AI Specialist",
  "Web Developer",
]);
console.log(obj1);
obj1.hobbies = ["Programmer", "AI Specialist", "Web Developer"];
console.log(obj1.hobbies);
