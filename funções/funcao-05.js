function fatorial(n) { //função recursiva, uma função que chama ela mesma
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(7))


// 5! = 5 x 4 x 3 x 2 x 1 que é a mesma coisa que:
// 5! = 5 x 4!

// n! = n x (n-1)!
// 1! = 1