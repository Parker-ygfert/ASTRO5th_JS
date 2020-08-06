// let's start coding:
window.addEventListener("DOMContentLoaded", () => {
  let cnt = 0, running = false, interval;
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    if (running) {
      document.getElementById("running").classList.remove("show");
      document.getElementById("running").classList.add("close");
      clearInterval(interval);
      document.querySelector("button").textContent = "Start";
      running = false;
    } else {
      document.getElementById("running").classList.remove("close");
      document.getElementById("running").classList.add("show");
      interval = setInterval(() => {
        cnt++;
        document.getElementById("seconds").textContent = (Math.floor(cnt / 10)).toString();
        let last = document.querySelector(".dots div:last-child")
        document.querySelector(".dots").insertAdjacentElement("afterBegin", last);
      }, 100);
      document.querySelector("button").textContent = "Pause";
      running = true;
    }
  });
});