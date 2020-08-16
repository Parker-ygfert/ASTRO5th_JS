window.addEventListener("DOMContentLoaded", function() {
  let box = document.querySelector(".box");
  box.addEventListener('click', function(e){
  /* 使用 e.target 去確定點到的是 .btn*/ 
    // console.log(e.target);
  
    if(e.target.classList.contains('btn')) {
      /* todo: 如果點到的是 .btn, 請把他身上的 data-id  取出來，印在 console 裡面 */
      console.log(e.srcElement.dataset.id);
    }
  });
});