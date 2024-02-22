"use strict";
// // INTERFACE
// interface objType {
//   name1: string;
//   age: number;
//   male: boolean;
//   hobbies: string[];
//   num: number[];
//   socialMedia: {
//     s1: string;
//     s2: string;
//     s3: string;
//     s4: string;
//   };
// }
// let obj1: objType = {
//   name1: "Abdul Rehman",
//   age: 19,
//   male: true,
//   hobbies: ["Fullstack", "Data sciensist", "Ai engener", "Programer"],
//   num: [1, 2, 3, 4, 5, 6],
//   socialMedia: {
//     s1: "FB",
//     s2: "IG",
//     s3: "LI",
//     s4: "X",
//   },
// };
// let obj2: objType = {
//   name1: "Abdul Rehman",
//   age: 19,
//   male: true,
//   hobbies: ["Fullstack", "Data sciensist", "Ai engener", "Programer"],
//   num: [1, 2, 3, 4, 5, 6],
//   socialMedia: {
//     s1: "FB",
//     s2: "IG",
//     s3: "LI",
//     s4: "X",
//   },
// };
// console.log(obj);
// // EXTENDS
// interface person {
//   name: string;
//   age: number;
// }
// // interface Employe  {
// //   name : string;
// //   age : number;
// //   email:string;
// // }
// interface Employe extends person {
//   email: string;
// }
// interface Director extends Employe {
//   roll: boolean;
// }
// let person: person = {
//   name: "AbdulRehman",
//   age: 19,
// };
// let employe5: Employe = {
//   name: "AbdulRehman",
//   age: 19,
//   email: "123@123",
// };
// let director: Director = {
//   name: "AbdulRehman",
//   age: 19,
//   email: "123@123",
//   roll: true,
// };
// MERGE
// interface person {
//   name: string;
//   age: number;
// }
// interface person {
//   email: string;
// }
// let person: person = {
//   name: "AbdulRehman",
//   age: 19,
//   email : "123"
// };
// TYPE VS INTERFACE
//syntax
// // EXAMPLE 01:
// // ham type ko variables and obj har kse ke sath use kr sakte hn.
// type nam = string;
// type age = number;
// // interface ko type kr tra use nhi kr sakte
// // interface nam2 string
// // interface se ham object ke key ko data types de sakte hn.
// // And interface ke and type use kr sakte hn.
// interface obj {
//   nam: nam;
//   name: string;
// }
// // type ko ham object ke and ya interface ke tra bhi use kr sakte hn.
// type obj1 = {
//   name: nam;
//   rollNumber : age
// };
// EXAMPLE 02:
// interface use krke ham ak he name 2 bar use kr sakte hn us se interface khud ko sink kr leta he ya murg kr leta he our phr ham use ak is tra se use bhi kr sakte hn
// interface abc {
//   name: string;
// }
// interface abc {
//   age: number;
// }
// let obbj: abc = {
//   name: "AbdulRehman",
//   age: 19,
// };
// type ko ak name se 2 bar define nhi kr sakte.
// type abc = {
//   name: string;
// };
// type abc = {};
// EXAMPLE 03.
// ham interface mn extends use kr sakte hn
// interface abc {
//   name: string;
// }
// interface obj extends abc {
//   age: number;
// }
// let objj: obj = {
//   name: "AbdulRehman",
//   age: 18,
// };
// type mn ham extends ko use nhi kr sakte.
// type abc ={
//     name: string;
//   }
//   type obj extends abc {
//     age: number;
//   }
