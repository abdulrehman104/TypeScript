// EXAMPLE : Class with constructor
class Dreams {
  buyCivic: number;
  buyDreamHouse: number;
  butSuperBike: number;
  constructor(civic: number, dreamhouse: number, superbike: number) {
    this.buyCivic = civic;
    this.buyDreamHouse = dreamhouse;
    this.butSuperBike = superbike;
  }
}

let myDreams = new Dreams(1, 1, 2);
console.log(myDreams);
console.log(myDreams.buyCivic);


// CONSTRUCTOR WITH DEFAULT VALUE:
class Student {
  name: string;
  Fathername: string;
  age: number;
  constructor(
    name: string = "AbdulRehman",
    Fathername: string = "Rashid",
    age: number = 19
  ) {
    this.name = name;
    this.Fathername = Fathername;
    this.age = age;
  }
}

let student = new Student();
console.log(student);



// CONSTRUCTOR OVERLOADS:
class Person {
  x;
  y;
  z;

  constructor(x: string, y: string, z: string);
  constructor(x: number, y: number, z: number);
  constructor(x: boolean, y: boolean, z: boolean);
  constructor(x: string, y: number, z: boolean);
  constructor(x: any, y: any, z: any) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

let case1 = new Person("Abdul", "Rehman", "Rashid");
let case2 = new Person(17, 18, 19);
let case3 = new Person(true, false, true);
let case4 = new Person("AbduRehman", 19, true);

console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);
