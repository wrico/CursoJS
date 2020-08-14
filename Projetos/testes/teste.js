var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2

var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1

  var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1
  // Laranja 2

  var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1

  var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];

var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];

frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1

var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
