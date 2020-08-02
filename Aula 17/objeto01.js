let amigon = {}
let carac =""
let nro = 0

console.log(typeof carac)
console.log(typeof nro)
console.log(typeof amigon + " amigon") //não pode declarar amigo duas vezes

let amigo = {nome: "Jonatan", sexo: "biba", peso: 230.5, emagrecer(p=0){ 
    console.log("engordou")
    this.peso -= p                      // this é autoreferência ao objeto

}}

console.log(typeof amigo + " amigo")
console.log(amigo)

// mostrar o nome do amigo
console.log(amigo.nome)
amigo.emagrecer(25)
console.log(`amigo: ${amigo.nome} pesa agora: ${amigo.peso}`)

