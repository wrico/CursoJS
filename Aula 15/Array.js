var cars = ["volks" , "toyota" , "ford", "abrava"]
i=0
while (cars[i]) { 
    console.log(cars[i]) 
    i++}
var elementos = cars.length
console.log("Incluindo elementos")
console.log(` Total de ${elementos} elementos`)
cars.push("zorro sedan")
console.log(`nova inclusão`)
i=0
while (cars[i]) { 
    console.log(cars[i]) 
    i++}
var elementos = cars.length
console.log(` Agora Total de ${elementos} elementos`)
console.log("Elementos em ordem alfabética")
cars.sort()
i=0
while (cars[i]) { 
    console.log(cars[i]) 
    i++}
var posic = cars.indexOf("toyota")
console.log(`Posição do Toyota é ${posic} - tudo começa no zero`)
