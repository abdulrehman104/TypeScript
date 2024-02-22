// CLASSES:
// Classes is a blueprint of objects

// SYNTAX:
class Point {}

// EXAMPLE: Simpe Class of House
class House {
  numberOfRooms: number = 4;
  numberOfBathrooms: number = 4;
  numberOfFans: number = 4;
  numberOfDoor: number = 4;
}

let house1 = new House();
console.log(house1);
console.log(house1.numberOfBathrooms);





























// class Person{
//     name :string = "abdulrehman"
//     constructor(name:String){
//         // this.name = name
//     }
// }

// class Person1 extends Person {
// //   name: string;
//   salary: number = 100000;
// //   constructor(name: string, salary: number) {
// //     // this.name = name;
// //     this.salary = salary;
// //   }
// }

// class Person2 {
//     // name: string;
//     hobby: string;
//     constructor(name: string, hobby: string) {
//     //   this.name = name;
//       this.hobby = hobby;
//     }
//   }

//   let person1 = new Person1("abdulrehman",10000)
//   let person2 = new Person2("abdulrehman","web developer")

// common chizon ke ak alag class bna lenge and un dono ko bake class ke sath extand krwa denge

// class Person {
//   name: String;
//   age: number;
//   constructor(name: String, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Teacher extends Person {
//   salary: number;
//   constructor(name: string, age: number, salary: number) {
//     // constructor call kre ge super se
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
// }

// class Student extends Person {
//   rollNumber: number;
//   constructor(name: string, age: number, rollNumber: number) {
//     super(name, age);      // person constructor
//     this.rollNumber = rollNumber;
//     this.name = name;
//     this.age = age;
//   }
// }
// let teacher = new Teacher("hamzah", 20, 20000);
// let student = new Student("okasha", 20, 12345);

// console.log(teacher);
// console.log(student);
