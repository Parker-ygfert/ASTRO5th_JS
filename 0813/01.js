p = console.log;

function foo() {
  p(x);
}
// foo();
let x = 100;



//* destructuring assignment 比對左右兩邊的形狀
let numbers = [1, 2, 3, 4, 5];
let [first, second, third] = numbers;
let [head, ...tails] = numbers;
//* ... 等於 ruby 裡 * 的作用
// p(head, tails);

let student = {name: "john", age: 13, gender: "M"};
let {name: studentName, age: studentAge} = student;
let {name, age} = student;
// p(studentName, studentAge);
// p(name, age);
// p(gender);

function baz({name, age: studentAge, gender}) {
  // p(name, studentAge, gender);
}
// baz(student);



let names = ["apple", "banana", "cherry"];
let indexOfWater = name.indexOf("water");
// p(indexOfWater);

let more = ["watermelon", "pear"];
let allFruits = names.concat(more);
// p(allFruits);



//* Object 轉成 Tuple(模仿)
let pricesByCountry = {
  "tw": 300,
  "us": 10.2,
  "jp": 1250
};
let result = Object.entries(pricesByCountry).map((item) => [item[0], item[1] * 1.05]);
// p(result);
p(Object.fromEntries(result));