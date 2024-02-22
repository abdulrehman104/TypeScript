"use strict";
// BAD PRACTICE
// let video1Title = "video1"
// let video1Description = "video 1 description"
// let video1Image = "https://image.com"
// GOOD PRACTICE
let video1 = {
    title: "video1",
    description: "video 1 description",
    image: "https://image.com",
};
// let video2 = {
//   title: "video1",
//   description: "video 1 description",
//   image: "https://image.com",
//   views: 1000,
//   log: () => {
//     console.log("hello");
//   },
// };
// video2.log();
// console.log();
const videos = [
    {
        title: "video1",
        description: "video 1 description",
        image: "https://image.com",
    },
    {
        title: "video2",
        description: "video 2 description",
        image: "https://image.com",
    },
];
for (let i = 0; i < videos.length; i++) {
    console.log(videos[i].description);
}
for (let i = 0; i < videos.length; i++) {
    console.log(videos[i].title);
}
// SIR BILAL
let user = {
    fname: "Abdul",
    lname: "Rehman",
    age: 40,
    hobbies: ["cricket", "football", "gaming"],
    office: {
        adress: "abc",
        name: "title",
    },
};
// console.log(user);
// console.log(user.fname);
// console.log(user.lname);
// console.log(user.age);
// console.log(user.hobbies);
// console.log(user.hobbies[1]);
// console.log("email" in user);
// user.email = "abc"
// user.adress = "abc"
// delete user.hobbies
// for (let key in user){
//     console.log(key);
//   console.log(user[key]);
//   console.log(key + ":" user[key]);
// }
// console.log(user.office.name);
// console.log(user);
