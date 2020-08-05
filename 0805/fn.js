function 打招呼(name) {
  // console.log("Hello world! This is " + name);
  return `name: ${name}`;

  // console.log("function ends");
}

let result = 打招呼("Mary");
// console.log(result);
//* 沒有 return 的話會回傳 undefined




function add(x, y) {
  // console.log(y);
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
let res8 = add(1, 2);
let res9 = multiply(res8, 10);
// console.log(res9);



//* 匿名函式
// let res10 = [1, 2, 3, 4, 5].map(function(i) { return i + 1 });
// console.log(res10);

function add1(i) { return i + 1 };
let res11 = [1, 2, 3, 4, 5].map(add1);
// console.log(res11);



let cartTotal = 1000;
// let ratio;

function getRatio(total) {
  if (total > 1000) {
    // ratio = 0.8;
    return 0.8;
  } else if (total > 500) {
    // ratio = 0.9;
    return 0.9;
  } else {
    // ratio = 1;
    return 1;
  }
}

// console.log(cartTotal * getRatio(cartTotal));
//* 把跟其他地方不會互相干涉的地方拆出來



let gender = "F", title;
switch(gender) {
  case "M":
    title = "Mr.";
    break;
  case "F":
    // fall through
  default:
    title = "";
}


let array = [1, 2, 3, 4, 5, 6];
let res50 = [...array, 7, 8, 9];
//* ... 展開 array
// console.log(res50);

for(let x of res50) {
  // console.log(x);
}



let areaCode = {
  "us": "01", "tw": "886", "hk": "86"
}
// console.log(areaCode["tw"]);
// console.log(areaCode.tw);
let country = "hk";
// console.log(areaCode[country]);



baz(1000);
//* 函式宣告的時候會整體被拉到文件的最上方
function baz(x) {
  let amount, total, qty;
  amount = 100;
  console.log(amount + x);
}