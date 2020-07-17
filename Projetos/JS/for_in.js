var cars = ["BMW", "Volvo", "Saab", "Ford"];

cars.sort()

for(let i in cars) {
    console.log(`carro -> ${cars[i]}`)
}

console.log(`indice do Saab é ${cars.indexOf("Saab")}`)