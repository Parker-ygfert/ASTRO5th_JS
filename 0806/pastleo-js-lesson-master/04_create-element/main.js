// let's start coding:
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-element").addEventListener("click", () => {
    const timeDiv = document.createElement("div");
    
    // debugger;
    timeDiv.className = "time";
    const currentTime = new Date();
    timeDiv.textContent = currentTime.toString();
    // timeDiv.textContent = currentTime;
    
    document.querySelector(".right").appendChild(timeDiv);
  });

  document.getElementById("reset-inner-html").addEventListener("click", () => {
    document.querySelector(".right").innerHTML = '<div class="title">DOM practice...</div>';
  });
  
  document.getElementById("remove").addEventListener("click", () => {
    // debugger
    const lastTime = document.querySelector(".right .time:last-child");
    if (lastTime) {
      lastTime.remove();
    }
  });

  document.getElementById("create-element-insert-adjacent").addEventListener("click", () => {
    const timeDiv = document.createElement("div");
    timeDiv.className = "time";
    const currentTime = new Date();
    timeDiv.textContent = currentTime.toString();
    // document.querySelector("div.title").after(timeDiv);
    document.querySelector("div.title").insertAdjacentElement("afterend", timeDiv);
    // debugger
  });
});