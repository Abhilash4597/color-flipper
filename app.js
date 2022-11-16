const button = document.getElementById("change_button");

const para = document.getElementById("change_para");

const body = document.body;

function random_color() {
    return Math.floor(Math.random()*255);
}

button.addEventListener("click",bgcolor);

function bgcolor() {
    const R = random_color();
    const G = random_color();
    const B = random_color();

    const rgb = `rgb(${R},${G},${B})`;

    body.style.background = rgb;
    para.innerText = rgb;
}