// Desafio 10
function techList(tech, name) {
  let techObjectList = [];
  if (tech === 0) {
    return 'Vazio!';
  }
  for (let nameTech of tech.sort()) {
    techObjectList.push({ tech: nameTech, name: name });
  }
  return techObjectList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'John'));
console.log(techList(0));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

console.log(triangleCheck(13, 20, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
