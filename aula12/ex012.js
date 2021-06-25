// 16 a 17 anos é opcional, assim como, maiores de 70 anos

var idade = 72
if (idade < 16) {
  console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 70) {
  console.log('Voto opcional')
} else {
  console.log('Voto obrigatório')
}