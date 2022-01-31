console.log('numb');

let x = 4;
let y = 4;

const grid = document.querySelector('#grid');

for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
        let div = document.createElement('div');
        div.className = 'section';
        div.textContent = i + 1;
        grid.appendChild(div);
    }
}