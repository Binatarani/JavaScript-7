// JavaScript object

// // Array

// const usearArray = ["Sakib", "Islam", 2009, "Two"];
// console.log(usearArray);

// // Add new item

// // Example Dot Notation
// usearArray.hobby = "Play";
// console.log(usearArray.hobby);

// // Object Example

// const usserObject = {
//   firstName: "Sakib",
//   lastName: "Islam",
//   birthYear: "2009",
//   className: "Two",
// };
// console.log(usserObject);
// console.log(usserObject["firstName"]);
// console.log(usserObject.lastName);
// console.log(usserObject.birthYear);

// // Add New Item

// // Example Dot Notation

// usserObject.hobby = "Cricket";
// console.log(usserObject);
// console.log(usserObject.hobby);

// // Example Breacket Notation

// usserObject["birthPlace"] = "Rajshahi";
// console.log(usserObject["birthPlace"]);

// // Another Object Example

// const usserObjectTwo = {
//   firstName: "Maya",
//   lastName: "Rani",
//   isJob: "true",
//   calculateAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// console.log(usserObjectTwo.isJob);
// console.log(usserObjectTwo.calculateAge(1987));
// console.log(usserObjectTwo["calculateAge"](1986));

// //This keyword

// const usserObjectOne = {
//   firstName: "Maya",
//   lastName: "Rani",
//   birthYear: 1988,
//   isJob: true,
//   calculateAge: function () {
//     console.log(this.birthYear);
//     return 2022 - this.birthYear;
//   },
//   userDetails: function () {
//     return `This is user ${this.firstName} ${this.lastName}, born in ${this.birthYear}!`;
//   },
// };

// console.log(usserObjectOne.calculateAge());
// console.log(usserObjectOne.userDetails());

// JavaScript loop

// // For loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for (let task = 1; task <= 10; task++) {
//   console.log(`Task ${task}`);
// }

// for (let i = 1; i <= 20; i++) {
//   console.log(`Task ${i}`);
// }

// While loop

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// let i = 1;
// while (i <= 8) {
//   console.log(`Task ${i}`);
//   i++;
// }

// // Array

// const newArray = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"];
// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);
// // console.log(newArray[3]);
// // console.log(newArray[4]);

// for (let i = 0; i <= 5; i++) {
//   console.log(newArray[i]);
// }

// const newArrayTwo = [
//   "Data 1",
//   "Data 2",
//   "Data 3",
//   "Data 4",
//   "Data 5",
//   "Data 6",
// ];
// for (let i = 0; i < newArrayTwo.length; i++) {
//   console.log(newArray[i]);
// }

// const newArray = ["data 1", "data 2", "data 3"];
// console.log(newArray);
// for (let i = 3; i >= 0; i--) {
//   console.log(newArray[i]);
// }

// const newArrayTwo = ["data 1", "data 2", "data 3"];
// console.log(newArray);

// for (let i = 3; (i = newArray.length - 1); i--) {
//   console.log(newArrayTwo[i]);
// }

// Loop break
const newArrayTwo = ["data 1", "data 2", "data 3"];
console.log(newArrayTwo);

// for (let i = 0; i < newArrayTwo.length; i++) {
//   if (i == 2) break;
//   console.log(newArrayTwo[i]);
// }

// // Loop Continue
// for (let i = 0; i < newArrayTwo.length; i++) {
//   if (i == 1) continue;
//   console.log(newArrayTwo[i]);
// }

// Index of
const newArray = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"];

console.log(newArray);
console.log(newArray.indexOf("Data 3"));
console.log(newArray.indexOf("Data 5"));
console.log(newArray.indexOf("Data 7"));
// Includes

console.log(newArray.includes("Data 3"));
console.log(newArray.includes("Data 7"));
