function clearHighlights() {
  document.querySelectorAll(".box").forEach(box => box.classList.remove("highlight"));
}

// querySelector → only first
function highlightFirst() {
  clearHighlights();
  let firstBox = document.querySelector(".box");
  firstBox.classList.add("highlight");
}

// querySelectorAll → then pick 5th
function highlightFifth() {
  clearHighlights();
  let allBoxes = document.querySelectorAll(".box");
  allBoxes[4].classList.add("highlight"); // index 4 = 5th div
}

// getElementsByClassName → highlight all
function highlightAll() {
  clearHighlights();
  let allBoxes = document.getElementsByClassName("box");
  for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].classList.add("highlight");
  }
}
