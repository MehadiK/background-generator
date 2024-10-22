let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');
let randomColorBtn = document.querySelector(".random-color")


setGradient();

function createRandomColor() {

  let letters = "0123456789ABCDEF";
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColor() {
  color1.value = createRandomColor();
  color2.value = createRandomColor();

  randomColorBtn.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  randomColorBtn.style.color = 'black';
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorBtn.addEventListener("click", randomColor);




//css.innerHTML = `Left Color: rgb(${color1.value}) - Right Color: rgb(${color2.value})`;