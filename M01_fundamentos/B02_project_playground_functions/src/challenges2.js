// Desafio 10
function techList(tech, name) {
  let techObjectList = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let nameTech of tech.sort()) {
    techObjectList.push({ tech: nameTech, name: name });
  }
  return techObjectList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'John'));
console.log(techList(''));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA) ) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

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
