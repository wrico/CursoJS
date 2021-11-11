// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

var numeros = [5, 3, 12, 17, 10, 99];
console.log(numeros);

console.log(numeros[2]);
console.log(numeros[5]);
console.log("Primeiro ítem da lista - index 0 -", numeros[0]);

console.log("Quantidade de números no array - ", numeros.length);
console.log("Array (variável) numeros - ", numeros)

var numeroRetornado = numeros.pop();
console.log("Array.pop remove o último elemento - var = numeroRetornado", numeroRetornado)
console.log("Quantidade de números no array - ", numeros.length);
console.log("Array (variável) numeros sem o último - ", numeros)

console.log("Mostrando com slice de 2 a 5 -", numeros.slice(2, 5));

console.log("Mostrando com slice a pos. 3 em diante -", numeros.slice(3));

console.log(numeros.join('--'));
console.log(numeros.join(' '));
console.log(numeros.join('->'));

var usuario = [
  'Wilson',
  59,
  'PM a Bordo',
  2021,
  'Brasileiro'
];

console.log("usuário",usuario);

usuario.push('RJ');

console.log("Inserindo RJ com push - ", usuario);
console.log("**Procurando com includes")
console.log("Include Brasileiro ", usuario.includes('Brasileiro'));
console.log("Include Japones ", usuario.includes('Japonês'));
console.log("Include 2019 ", usuario.includes(2019));


console.log("Posição do 2019 com indexOf - ", usuario.indexOf(2019));
console.log("Posição do Japones com indexOf - ", usuario.indexOf('Japonês'));

var arr1 = [3, 2, 1];
var arr2 = ['Programador', 'a', 'Bordo'];

var resultado = arr2.concat(arr1).concat(['teste', 'fulano', 'ciclano']);
console.log(resultado);

console.log([...arr1, ...arr2, ...['teste', 'fulano', 'ciclano']]);

console.log(usuario);

var nome = usuario[0];

var idade = usuario[1];

var ano = usuario[3];

console.log(nome, idade, ano);

var [nome, idade, , , nacionalidade] = usuario;

console.log("Preencheu o array com a variável usuário")
console.log("Nome:",nome, " - Idade:", idade, " - Nacionalidade:", nacionalidade);

values = [];
for (var x = 0; x < 10; x++) { values.push([  2 ** x,  2 * x ** 2 ]) };
console.table(values)

var cad = new Array()
// let cad = []
cad.push([ "wilson", "maldonas"]) 
cad.push([ "corredor", "internacional"]) 

console.table(cad)

console.log(cad[0][0], cad[1][0] )
console.log(cad[1][0])
console.log(cad[0][1])
console.log(cad[1][1])

var i,j = 0

for ( i = 0; i < cad.length; ++i ) {
  for (j=0 ; j < 3 ; ++j){console.log(cad[i][j])}
}

var pos = 0
pos = cad.indexOf("m") 
console.log(pos) // sempre retorna -1 pq não funciona em array multi

var frutas = ['Maçã', 'Banana', 'Coco'] // em vetores ok
var pos = frutas.indexOf('Banana');
console.log("posição da banana",pos)