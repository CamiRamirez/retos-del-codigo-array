
// computeAverageLengthOfWords (EJERCICIO NUMERO 1)

const computeAverageLengthOfWords = (string1, string2) => {
  const output = (string1.length + string2.length) / 2;
  return output;
}
console.log(computeAverageLengthOfWords('cami', 'ramirez'));


// GETNTHELEMENT (EJERCICIO NUMERO 2)

const getNthElement = (arr, number) => {
  const output = arr[number];
  return output;
}
console.log(getNthElement([1, 3, 5], 1));

//convertDoubleSpaceToSingle

function convertDoubleSpaceToSingle(str) {
  
}

//FILTERODDELEMENTS. (EJERCICIO NUMERO 6)

const numbers = [1, 2, 5, 8, 10, 12, 13]
let filterOddElements = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) { //Si el numero dividido en 2 no deja residuo 0, es impar y se pusheara al filterOddElements.
    filterOddElements.push(numbers[i]);
  }
}

//Funcion en proceso
/* const filterOddElements = () => {
  const output = filterOddElements.filter(number => number % 2 !== 0);
  return output;
}
console.log(filterOddElements[1, 2, 3, 4, 5]); */


// ComputeSumOfAllElement (EJERCICIO NUMERO 11)

function computeSumOfAllElements(add) {
  const add = computeSumOfAllElements.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
}
console.log(computeSumOfAllElements[1, 2, 3]);


//ConvertScoreToGrade (EJERCICIO NUMERO 16)

const ConvertScoreToGrade = (num) => {
  if(num < 100 && num > 90){
    return "a";
  }
  if(num < 89 && num > 80){
    return "b";
  }
  else {
    alert('PUNTUACION INVALIDA');
  }
}

console.log(ConvertScoreToGrade[93]);
