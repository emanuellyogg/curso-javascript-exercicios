// function soma(n1, n2) {
//   return n1 + n2;
// }

// console.log(soma(2, 5)); 

function soma(n1 = 0, n2 = 0) { //parâmetros pré-definidos: se eu não passar o valor do parâmetro, ele será 0
  return n1 + n2;
}
//console.log(soma(8)); n1 recebe 8 e n2 é zero.
console.log(soma(null, 8)); //estou forçando valor zero na n1