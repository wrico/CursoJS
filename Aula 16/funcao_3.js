function fatorial(n) {
    var fat = 1
    for(let c=n; c>1; c--) {
        fat *= c // fatorial recebe o fat x c
        }
    return fat
}

console.log(`Fatorial de 5 é ${fatorial(5)}`)

