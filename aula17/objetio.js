let amigo = {
  nome: 'José',
  peso: 85.4,
  engordar(p = 0) {
    console.log('engordou!');
    this.peso += p // this autoreferencia ao objeto
  }
}

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);