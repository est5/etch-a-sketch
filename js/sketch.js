const color = "orangered";
let size = 8;

let percent = 100 / size;
const width = percent + "%";
const paddingBottom = percent + "%";
console.log(percent);

const grid = document.querySelector("#grid");

const init = () => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let div = document.createElement("div");
      div.className = "section";
      div.style.height = 0;
      div.style.width = width;
      div.style.paddingBottom = paddingBottom;
      grid.appendChild(div);
    }
  }
};

init();

const section = document.querySelectorAll(".section");
section.forEach((s) => {
  s.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = color;
  });
});

const button = document.querySelector(".button-55");
button.addEventListener("click", clear);

function clear() {
  section.forEach((s) => {
    s.style.backgroundColor = "white";
  });
}
