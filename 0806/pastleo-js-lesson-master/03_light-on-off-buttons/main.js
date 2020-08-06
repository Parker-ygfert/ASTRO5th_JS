window.addEventListener("DOMContentLoaded", () => {
  const bodyClass = document.body.classList;
  const statusDiv = document.querySelector(".status");
  const statusSpan = document.querySelector(".status span");

  document.getElementById("on").addEventListener("click", () => {
    // document.body.classList.add("light");
    bodyClass.add("light");
    // statusDiv.classList.remove("off");
    // statusDiv.classList.add("on");
    statusDiv.classList.replace("off", "on");
    // document.querySelector(".status span").textContent = "開";
    statusSpan.textContent = "開";
  });
  document.getElementById("off").addEventListener("click", () => {
    // document.body.classList.remove("light");
    bodyClass.remove("light");
    // statusDiv.classList.remove("on");
    // statusDiv.classList.add("off");
    statusDiv.classList.replace("on", "off");
    // document.querySelector(".status span").textContent = "關";
    statusSpan.textContent = "關";
  });
});