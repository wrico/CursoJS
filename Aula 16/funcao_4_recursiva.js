// Recursividade
 
function fatorial(n) {
    setTimeout(console.log, n, 2000)
    if (n==1){return 1}
        else {
            return n * fatorial(n-1)
        }
      
    }

console.log(`Fatorial de 4 é ${fatorial(4)}`)
 
