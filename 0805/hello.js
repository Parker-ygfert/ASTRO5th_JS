let x = 10;
let y = "100";

x = 999;
y = `test`; // grave, backtick

let z = x + y;
// console.log(z);



//* string interpolation
let userName = "John #{x}";
let name = "John";
let greeting = `Hello, ${name}, how are you.`;
// console.log(userName)
// console.log(greeting)



// console.log("\0");
Math.round(5.5);
Math.min(10, 3, 9);



let x1 = 999;
function foo() {
  x1 = 100;
}

foo();
// console.log(x1);



// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);



//* 變數提升只有用 var 宣告變數時才會出現
// console.log(callMe);
// var callMe = 10;
// let callMe = 10;
// const callMe = 10;
// callMe = 10;