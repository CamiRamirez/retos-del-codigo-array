
//ConvertScoreToGrade (EJERCICIO NUMERO 16)

function ConvertScoreToGrade(num) {
  if(num < 100 && num > 90){
    return "a";
  }
  if(num < 89 && num > 80){
    return "b";
  }
  if(num < 79 && num > 70){
    return "c";
  }
  if(num < 69 && num > 60){
    return "d";
  }
  if(num < 59 && num > 0){
    return "f";
  }
  else if ( num > 100 || num < 0) {
    return('PUNTUACION INVALIDA');
  }
}

console.log(ConvertScoreToGrade(93));