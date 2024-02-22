// EXAMPLE 01:
interface Teacher {
  Teacher_Id: number;
  teacher_name: string;
}

interface Student {
  student_id: number;
  name: string;
}

type intersectedType = Teacher & Student;

let obj1: intersectedType = {
  Teacher_Id: 7873,
  teacher_name: "Abdul",
  student_id: 3232,
  name: "Rehman",
};

console.log(obj1.Teacher_Id);
console.log(obj1.teacher_name);
console.log(obj1.student_id);
console.log(obj1.name);

// EXAMPLE 02:
interface A {
  prop1: String;
}

interface B {
  prop2: String;
}

interface C {
  prop3: String;
}

let obj4: A & B = { prop1: "length", prop2: "width" };
let obj5: B & A = { prop1: "length", prop2: "width" };
let obj6: A & (B & C) = { prop1: "", prop2: "", prop3: "" };
let obj7: (A & B) & C = { prop1: "", prop2: "", prop3: "" };

obj6.prop3 = "height";
console.log(obj6.prop3);

obj7.prop1 = "length";
console.log(obj7.prop1);

console.log(obj6 == obj7); // false
console.log(typeof obj6 == typeof obj7); // true
console.log(typeof obj4 == typeof obj5); // true


// EXAMPLE:
// interface Person1 {
//   student_name: string;
//   father_name: string;
//   age: number;
//   contact: number;
// }


// interface Person2 {
//   Student_ID: number;
//   roll_number: number;
//   class: number;
//   subjects: string;
// }

type Person1 ={
  student_name: string;
  father_name: string;
  age: number;
  contact: number;
}

type Person2= {
  Student_ID: number;
  roll_number: number;
  class: number;
  subjects: string;
}



type Student_info = Person1 & Person2;

let info: Student_info = {
  student_name: "AbdulRehman",
  father_name: "Rashid",
  age: 19,
  contact: 123456,
  Student_ID: 12345,
  roll_number: 12345,
  class: 12,
  subjects: "Web Development",
};

console.log(info);
