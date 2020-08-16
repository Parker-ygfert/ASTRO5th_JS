window.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("li").forEach(function(li) {
    toggleChecked(li);
    // li.addEventListener("click", function() {
      // li.classList.toggle("checked");
    // })
    drag(li);
  });

  document.querySelectorAll(".close").forEach(function(span) {
    closeRemove(span);
    // span.addEventListener("click", function() {
    //   span.parentNode.remove();
    // });
  });

  document.querySelector("#addBtn").addEventListener("click", function() {
    let newClose = document.createElement("span");
    newClose.textContent = "x";
    newClose.classList.add("close");
    closeRemove(newClose);

    let newLi = document.createElement("li");
    newLi.textContent = document.querySelector("input").value;
    document.querySelector("input").value = "";
    newLi.appendChild(newClose);
    toggleChecked(newLi);
    drag(newLi);

    document.querySelector("ul").appendChild(newLi);
  });
});

function toggleChecked(li) {
  li.addEventListener("click", function() {
    li.classList.toggle("checked");
  })
}

function closeRemove(span) {
  span.addEventListener("click", function() {
    span.parentNode.remove();
  })
}

function drag(li) {
  let ul = document.querySelector("ul")
  li.setAttribute("draggable", true);
  li.addEventListener("drag", function(e) {
    let dragItem = e.target;
        x = e.clientX,
        y = e.clientY;
    let swapItem = document.elementFromPoint(x, y);
    if (dragItem !== swapItem && swapItem.parentNode == ul) {
      if (dragItem.nextSibling === swapItem) {
        dragItem.insertAdjacentElement("beforebegin", swapItem);
      } else {
        dragItem.insertAdjacentElement("afterend", swapItem);
      }
    }
  });
}