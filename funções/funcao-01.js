function parimpar(n) {
  if (n % 2 == 0) {     // se n dividido por 2 a sobre for igual a 0, faca:
    return "par";       // se for verdadeiro, retornar "par";
  } else {              // se não;
    return "impar";     // retornar "ímpar";
  }
}

console.log(parimpar(277));   //chamada da função e parâmetro número 277. É preciso chamar como variável para aparecer ao executar o programa.