function areValidCredentials(name, password) {
  if (name.length >= 3 && password.length >= 8) {
    return "True"
  } else {
    return "False"
  }
}

console.log(areValidCredentials('Ritu', 'mylongpassword'));
//True