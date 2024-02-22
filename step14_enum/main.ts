// ENUM
enum Studenet {
  bilal,
  subhan,
  rehman,
  hassan,
  abdullah,
}

//   ASSIGN ENUM VALUE IN A VARIABLE.
const studenet1: Studenet = Studenet.bilal;
const studenet2: Studenet = Studenet["subhan"];
const studenet3: Studenet = Studenet["rehman"];
const studenet4: Studenet = Studenet["hassan"];
const studenet5: Studenet = Studenet.abdullah;

// SHOWS INDEX OF ENUM DATA.
console.log(studenet1);
console.log(studenet2);
console.log(studenet3);
console.log(studenet4);
console.log(studenet5);

//   ASSIGN ENUM INDEX VALUE IN A VARIABLE.
const test1: string = Studenet[0];
const test2: string = Studenet[1];
const test3: string = Studenet[2];
const test4: string = Studenet[3];
const test5: string = Studenet[4];

// SHOWS NAME OF ENUM DATA.
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

// // IT WILL CHANGE THE INDEX VALUE IN THE ENUM.
// enum Color {
//   color1 = 4, // equal to ke bad jo index denge ham value ko bake sare index uske bad se ayege
//   color2 = "Red",
//   color3 = "Blue",
//   color4 = "Yellow",
//   color5 = "Green",
// }

// const colors: Color = Color.color5;
// console.log(colors);

// enum Name {
//   name1 = "Abdul",
//   name2 = "Rehman",
// }

// function fullName(val1: string, val2: string) {
//   return val1 + val2;
// }
// console.log(fullName(Name.name1, Name.name2));

// enum Days {
//   Sunday, // 0
//   Monday, // 1
//   Tuesday, // 2
//   Wednesday, // 3
//   Thursday, // 4
//   Friday, // 5
//   Saturday, // 6
// }

// let meetingDay: Days = Days.Monday;

// if (meetingDay === Days.Monday) {
//   console.log("Meeting at 10:00 AM");
// } else if (meetingDay === Days.Sunday) {
//   console.log("No meeting");
// }


// const enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// let directionValue: string = "LEFT";
// let chosenDirection: Direction = directionValue as Direction;
// console.log(chosenDirection); // Output: LEFT
