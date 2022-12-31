function calc(x1,x2,operador) {
  return eval(`${x1} ${operador} ${x2}` )}
   
let resultado =  calc(6,2,"/")

console.log(resultado)


// transformando em função anonima

let a = (function(x1,x2,operador) {
    return eval(`${x1} ${operador} ${x2}` )}) (6,2,"/")

console.log("a = ",a)
console.log("this.a = ",this.a)

// => Arrow Function compartilha dados externos com a função

console.log("Arrow Function =>")

let fb = (x1,x2,operador) => {   //remove a palavra function e adiciona o =>
    return eval(`${x1} ${operador} ${x2}` )}

let result = fb(8,8,"*")
console.log("Res = ",result)
console.log("this.fb = ",this.fb)
console.log("this.result = ",this.result)
console.log("tudo junto")
console.log("resultado 1 = ",resultado)
console.log("a = ",a)
console.log("Res = ",result)
