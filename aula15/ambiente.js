let num = [5, 8, 9, 2, 3]
num.push(10);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(num[0]) //pedir para exibir o valor que está na posição "0"

let pos = num.indexOf(9);
if (pos == -1) {
  console.log('o valor não foi encontrato');
} else {
  console.log(`O valor 9 está na posição ${pos}`);
}