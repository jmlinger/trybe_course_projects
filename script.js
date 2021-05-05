//adiciona cores à paleta.
let arrayColor = ['black', 'red', 'yellow', 'purple'];
for (let index = 0; index < 4; index += 1) {
  document.getElementsByClassName("color")[index].style.backgroundColor = arrayColor[index];
}

