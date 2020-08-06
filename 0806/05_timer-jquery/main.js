// let's start coding:
window.addEventListener("DOMContentLoaded", () => {
  let cnt = 0, running = false, interval;
  const button = document.querySelector("button");
  document.getElementById("running").classList.add("close");

  // debugger
  button.addEventListener("click", () => {
    if (running) {
      document.getElementById("running").classList.replace("show", "close");
      // $("#running").slideUp();
      clearInterval(interval);
      document.querySelector("button").textContent = "Start";
      running = false;
    } else {
      document.getElementById("running").classList.replace("close", "show");
      // $("#running").slideDown();
      interval = setInterval(() => {
        cnt++;
        document.getElementById("seconds").textContent = (Math.floor(cnt / 10)).toString();
        $(".dots div:last-child").prependTo($(".dots")) 
      }, 100);
      document.querySelector("button").textContent = "Pause";
      running = true;
    }
  });
});