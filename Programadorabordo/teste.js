var total = 0
var numerosAleatorios = [3, 5, 'Wilson', 10, 2, 19, 21, 13];
for (var num of numerosAleatorios) {
    console.log('for of', num);
    if (!isNaN(num)) {
        total = total + num
        console.log("Totalizador ->", total)
    }
    // se é um numero vai cari aqui
}


