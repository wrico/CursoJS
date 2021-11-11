
var contador = 0;
while (contador < 5) {
    console.log(contador);
    ++contador;
}

var contador = 0;
while (contador < 5) {
    if (contador === 3) {
        break;
    }
    console.log(contador);
    ++contador;
}

console.log("A Operação 10 % 3 é para mostrar o resto da divisão (1 nesse caso)")

/*var contador = 0;
while (contador <=10) {{ console.log(contador)} ++contador } //assim no node
*/

var contador = 0;
while (contador <=10) {{ if (contador % 2 == 0) {console.log("ping")} else {console.log("pong")} } ++contador } //practice it

/*
var contador = 0;

while (contador < 100) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} - PING PONG`);
    } else if (contador % 3 === 0) {
        console.log(`${contador} - PING`);
    } else if (contador % 5 === 0) {
        console.log(`${contador} - PONG`);
    }
    ++contador;
}

*/