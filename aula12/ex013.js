var agora = new Date() //exite a data completa atual do sistema.
var hora = agora.getHours() // é possível pegar apenas horas, dia, minutos, etc
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
  console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
  console.log('Boa tarde!')
} else {
  console.log('boa noite!')
}