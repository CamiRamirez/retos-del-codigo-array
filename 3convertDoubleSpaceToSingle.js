function convertDoubleSpaceToSingle (str) {
  return str.split("  ").join(" ");
}

console.log(convertDoubleSpaceToSingle("Hola  cami"));