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
 return output = filterOddElements.filter(number => number % 2 !== 0);
}
console.log(filterOddElements[1, 2, 3, 4, 5]); */