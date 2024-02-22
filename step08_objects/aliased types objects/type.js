"use strict";
// // TYPE ALIASED.
// // Earlier, we used to create objects and define the data type together, storing data in them simultaneously.
// let teacher: { name: string; exp: number } = {
//   name: "Abdul",
//   exp: 1,
// };
// //EXAMPLE 01:
// // ismn ham alag se ak type bnaye ge jis mn ham ak variable bnaye ge our usko sare data types de denge
// type typeTeacher = string | number | boolean | undefined;
// // We will create a new type in which we will define a variable and assign all data types to it separately.
// let teacher1: typeTeacher = "AbdulRehman";
// teacher1 = 12;
// teacher1 = true;
// // Then we will print that variable here.
// console.log(teacher1);
// // EXAMPLE 02.
// // We will first create a type in which we will specify the data types of keys to be used in an another object.
// type student = {
//   name: string;
//   class: number;
//   contact: number;
//   subject: string;
//   student: boolean;
// };
// // Then we will create an object in which we will store data for a student. We will specify the type as ":student" instead of a data type for the key. If we attempt to put any value other than what we defined for the student key, it will show an error.
// let studentData: student = {
//   name: "AbdulRehman",
//   class: 10,
//   contact: 3262504906,
//   subject: "Pre Engenering",
//   student: true,
// };
// let studentData2: student = {
//   name: "Moiz",
//   class: 10,
//   contact: 3262504906,
//   subject: "Pre Engenering",
//   student: true,
// };
// let studentData3: student = {
//   name: "Osaid",
//   class: 10,
//   contact: 3262504906,
//   subject: "Pre Engenering",
//   student: true,
// };
// let studentData4: student = {
//   name: "Hassan",
//   class: 10,
//   contact: 3262504906,
//   subject: "Pre Engenering",
//   student: true,
// };
// Then we will print that object here.
// console.log(studentData, studentData2, studentData3, studentData4);
// Once we create the type, every object we create thereafter will have a variable name based on that type. The data defined in that type will be added to the respective objec
// // SYNTAX
// // ham ne 3 type bnaye.
// type idType = number | string;
// type nameType = string;
// type ageType = number;
// // ham ne 3 variable bnaye jinko type de den jo ham ne is se phele bnaye the.
// let id: idType = 123;
// let name1: nameType = "abdulrehman";
// let age: ageType = 19;
// //idr ham ne object ke type define kre he
// type employeType = {
//   emID: idType;
//   emName: nameType;
//   emAge: ageType;
// };
// // ak object bnaya jis mn wo variable add keye jo last mn bnaye the.
// let employe: employeType = {
//   emID: id,
//   emName: name1,
//   emAge: age,
// };
// let employe2: employeType = {
//   emID: "123",
//   emName: "AbdulRehman",
//   emAge: 19,
// };
// let employe3: employeType = {
//   emID: "123" ,
//   emName: "AbdulRehman",
//   emAge: 19,
// };
// // obj ko print kr deya.
// console.log(employe);
// console.log(typeof employe.emAge);
// console.log(typeof employe.emID);
// console.log(typeof employe.emName);
