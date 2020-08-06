// let's start coding:
$(document).ready(() => {
  let cnt = 0, running = false, interval;
  $("button").click(() => {
    if (running) {
      $("#running").slideUp();
      clearInterval(interval);
      $("button").text("Start");
      running = false;
    } else {
      $("#running").slideDown();
      interval = setInterval(() => {
        cnt++;
        $("#seconds").text(Math.floor(cnt / 10));
        $(".dots div:last-child").prependTo($(".dots"))
      }, 100);
      $("button").text("Pause");
      running = true;
    }
  });
});