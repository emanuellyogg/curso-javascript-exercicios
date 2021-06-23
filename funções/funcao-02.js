// function soma(n1, n2) {
//   return n1 + n2;
// }

// console.log(soma(2, 5)); 

function soma(n1 = 0, n2 = 0) { //se eu não passar o valor do parâmetro, ele será 0
  return n1 + n2;
}

console.log(soma(null, 8));