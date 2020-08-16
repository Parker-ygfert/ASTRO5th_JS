/*
todo: 
  - 按下 click me 按鈕後，會在 #text-wrap 內貼上一個 Errr 的 div
   `<div id="text-wrap" class="wrap">
  <div class="err"> Errr * 1</div>
</div>` 
  - 其中 Errr * (counter) , counter 每按一次會增加
    所以會變成 
    Errr * 1   
    Errr * 2
    Errr * 3

*/


window.addEventListener("DOMContentLoaded", function() {
  let btn = document.querySelector("button");
  let wrap = document.querySelector("#text-wrap");
  let count = 1;

  btn.addEventListener("click", function() {
    count++;
    let err = document.createElement("div");
    err.classList.add("err");
    err.textContent = `Errr * ${count}`;
    err.style.marginTop = "20px";
    // console.log(count);
    
    wrap.appendChild(err);
  });
});