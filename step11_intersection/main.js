"use strict";
let obj1 = {
    Teacher_Id: 7873,
    teacher_name: "Abdul",
    student_id: 3232,
    name: "Rehman",
};
console.log(obj1.Teacher_Id);
console.log(obj1.teacher_name);
console.log(obj1.student_id);
console.log(obj1.name);
let obj4 = { prop1: "length", prop2: "width" };
let obj5 = { prop1: "length", prop2: "width" };
let obj6 = { prop1: "", prop2: "", prop3: "" };
let obj7 = { prop1: "", prop2: "", prop3: "" };
obj6.prop3 = "height";
console.log(obj6.prop3);
obj7.prop1 = "length";
console.log(obj7.prop1);
console.log(obj6 == obj7); // false
console.log(typeof obj6 == typeof obj7); // true
console.log(typeof obj4 == typeof obj5); // true
let info = {
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
