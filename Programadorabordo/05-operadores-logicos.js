
var a = true;
var b = false;

console.log(!a);
console.log(!b);

console.log('!!a', !!a);
console.log('!!b', !!b);

// null, undefined, '', false, 0
// 
console.log(!!null);
console.log(!!undefined);
console.log(!!'');
console.log(!!0);

console.log(!!'texto');
console.log(!!20);

console.log(10 && 'texto' && 'Programador');

console.log(null && 'Programador a Bordo');

console.log('Passa' && 0 && 'Dev');

console.log('Passou' && null);

console.log('Passou' && 0);

console.log("false" && 100 && '' && 'teste' && null);

console.log(10 > 5 && 7 < 10);

console.log(10 > 5 && 10 > 11);


console.log(null || 'Programador a Bordo');

console.log(null || 'Programador a Bordo' || 26);

console.log(null || '' || 26);

console.log('Programador a Bordo' || 'teste');

console.log(10 > 5 || 10 < 11);

console.log(10 > 11 || 12 > 11); // Procura e imprime o primeiro .T.

console.log(10 < 5 || 10 > 11);

console.log(null || false || 0);

console.log('Programador' && 2050 || '' && 26);

console.log('Programador' && 2050 && 'a Bordo' || 0);

console.log(null || !'' && 'Programador')

// isNaN ?
var valor = 1.5;
var teste = "a";

console.log(!isNaN(valor)); /* retorna false negando fica true, 1.5 é tipo numérico */
console.log(!isNaN(teste)); /* retorna true negando fica falso, "a" não é um número */


// Calcula IMC 
var imc = function(peso, altura=1.83){
   if (peso == null) {
       console.log("peso não informado") 
       return 0
   } else {
   var vimc=peso/altura**2
   console.log("IMC ->" , vimc.toFixed(2))
   return vimc
   }
}

imc(80)


