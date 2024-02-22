// INTERFACE

interface ObjType {
  name1: string;
  age: number;
  male: boolean;
  hobbies: string[];
  num: number[];
  socialMedia: {
    s1: string;
    s2: string;
    s3: string;
    s4: string;
  };
}

let obj1: ObjType = {
  name1: "Abdul Rehman",
  age: 19,
  male: true,
  hobbies: ["Fullstack", "Data sciensist", "Ai engener", "Programer"],
  num: [1, 2, 3, 4, 5, 6],
  socialMedia: {
    s1: "FB",
    s2: "IG",
    s3: "LI",
    s4: "X",
  },
};

let obj2: ObjType = {
  name1: "Abdul Rehman",
  age: 19,
  male: true,
  hobbies: ["Fullstack", "Data sciensist", "Ai engener", "Programer"],
  num: [1, 2, 3, 4, 5, 6],
  socialMedia: {
    s1: "FB",
    s2: "IG",
    s3: "LI",
    s4: "X",
  },
};

console.log(obj1);
console.log(obj2);

// EXTENDS
interface Person {
  name: string;
  age: number;
}

// interface Employe  {
//   name : string;
//   age : number;
//   email:string;
// }

interface Employe extends Person {
  email: string;
}

interface Director extends Employe {
  roll: boolean;
}

let person: Person = {
  name: "AbdulRehman",
  age: 19,
};

let employe5: Employe = {
  name: "AbdulRehman",
  age: 19,
  email: "123@123",
};

let director: Director = {
  name: "AbdulRehman",
  age: 19,
  email: "123@123",
  roll: true,
};

// MERGE
interface Person1 {
  name: string;
  age: number;
}

interface Person1 {
  email: string;
}

let person1: Person1 = {
  name: "AbdulRehman",
  age: 19,
  email : "123"
};

