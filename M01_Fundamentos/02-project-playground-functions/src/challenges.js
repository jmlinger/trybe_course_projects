// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } return false;
}

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNum) {
  let highestNum = Math.max.apply(Math, arrayNum);
  let countnum = 0;
  for (let value of arrayNum) {
    if (value === highestNum) {
      countnum += 1;
    }
  }
  return countnum;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 5, 5));

// Desafio 8
function fizzBuzz(arrayNum8) {
  let arrayString = [];
  for (let valueNum of arrayNum8) {
    if (valueNum % 3 === 0 && valueNum % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (valueNum % 3 === 0) {
      arrayString.push('fizz');
    } else if (valueNum % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(strEncode) {
  let rules = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let indexStrE = 0; indexStrE < strEncode.length; indexStrE += 1) {
    for (let vowels in rules) {
      if (vowels === strEncode[indexStrE]) {
        strEncode = strEncode.replace(vowels, rules[vowels]);
      }
    }
  }
  return strEncode;
}

console.log(encode('aeiouaeiouaeiouaeiouaeiouaeiou'));

function decode(strDecode) {
  let rules = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let indexStrD = 0; indexStrD < strDecode.length; indexStrD += 1) {
    for (let numbers in rules) {
      if (numbers === strDecode[indexStrD]) {
        strDecode = strDecode.replace(numbers, rules[numbers]);
      }
    }
  }
  return strDecode;
}

console.log(decode('1234512345'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
