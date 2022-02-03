let color = "orangered";
let size = 16;

const init = () => {
  for (let j = 0; j < size * size; j++) {
    let grid = document.querySelector("#grid");
    let div = document.createElement("div");
    let percent = 100 / size;
    let width = percent + "%";
    let paddingBottom = percent + "%";
    div.style.height = 0;
    div.style.width = width;
    div.style.paddingBottom = paddingBottom;
    grid.appendChild(div);
  }
};

init();

const listener = function () {
  let section = document.querySelectorAll("#grid div");
  section.forEach((s) => {
    s.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = color;
    });
  });
};

listener();
const clearButton = document.querySelector("#clear");
const setButton = document.querySelector("#set");

clearButton.addEventListener("click", clear);
setButton.addEventListener("click", set);

function clear() {
  let section = document.querySelectorAll("#grid div");
  section.forEach((s) => {
    s.style.backgroundColor = "white";
  });
}

function set() {
  size = prompt("Enter number of squares per side (no more 100)");
  if (size > 100) {
    size = 100;
  }
  let grid = document.querySelector("#grid");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  init();
  listener();
}
