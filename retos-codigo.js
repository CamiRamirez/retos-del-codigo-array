//1. FILTERODDELEMENTS. 

const numbers = [1, 2, 5, 8, 10, 12, 13]
let filterOddElements = [];

for ( let i = 0; i < numbers.length; i++){
  if (numbers [i] % 2 !== 0){ //Si el numero dividido en 2 no deja residuo 0, es impar y se pusheara al filterOddElements.
    filterOddElements.push(numbers[i]);
  }
}

//Funcion en proceso
/* const filterOddElements = () => {
  const output = filterOddElements.filter(number => number % 2 !== 0);
  return output;
}
console.log(filterOddElements[1, 2, 3, 4, 5]); */


//2. COMPUTESUMOFALLELEMENTS

const computeSumOfAllElements = (string1, string2) => {
  const output = (string1.length + string2.length)/2;
  return output;
}
console.log(computeSumOfAllElements('cami', 'ramirez'));


// GETNTHELEMENT

const getNthElement = (arr, number) => {
  const output = arr[number];
  return output;
}
console.log(getNthElement([1, 3, 5], 1));

