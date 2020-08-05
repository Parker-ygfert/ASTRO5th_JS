// 輸入會是一個數字，回傳一個陣列，從 0 開始到你輸入的數字結束，除了以下幾種：
// 3 的倍數要轉成字串 Fizz
// 5 的倍數要轉成字串 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz
// 例如輸入 6
// 會回傳 [1, 2, Fizz, 4, Buzz, 6]

function fizzBuzz(input) {
  fb = [];

  for(let i = 1; i <= input; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      fb.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fb.push("Fizz");
    } else if (i % 5 === 0) {
      fb.push("Buzz")
    } else {
      fb.push(i);
    }
  }

  return fb;
}


console.log(fizzBuzz(100));