putInPot("beef");

//* 定義 function 第一個方式
function putInPot(food) {
  console.log(`${food} in pot`);
}
function boomboom(food) {
  console.log(`cooking ${food}`);
}

//* 定義 function 第二個方式
let lalala = function (food) {
  console.log(`${food} is cooking`);
}
lalala("fish");

//* 定義 function 第三個方式
let addOne0 = function(x) {return x + 1;}
let addOne1 = (x) => {
  return x + 1;
}
let addOne2 = (x) => x + 1;
let addOne3 = x => x + 1;
//* 如果參數不是一個則不能省略 ()
let addOne4 = (x, y) => x + y;
let addOne5 = () => true;


//* f 是代指 function，也就是 callback
funciton cook(i1, i2, f) {
  f(i1);
  f(i2);
  console.log(`I make dinner with ${i1}`);
}
cook("beef", "water", food => console.log(`I make dinner with ${food}`))

// putInPot("beef");
// putInpot("water");
// console.log("I make dinner with beff");

// boomboom("chicken");
// boomboom("coconut");
// console.log("I make dinner with chicken");