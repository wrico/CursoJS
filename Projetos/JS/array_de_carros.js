var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;

console.log(cars)

console.log(`o vetor tem ${cars.length} posições`)

while (cars[i]) {
  console.log(i,"-" ,cars[i])
  i++;
}

console.log("fim 1")
cars.push("Lada")
console.log(`o vetor tem ${cars.length} posições`)
i=0
while (cars[i]) {
    console.log(i,"-" ,cars[i])
    i++;
  }

cars.push("Audi")
console.log(`o vetor tem ${cars.length} posições`)
i=0
while (cars[i]) {
    console.log(i,"-" ,cars[i])
    i++;
  }
cars.sort()
console.log("lista Ordenada")
i=0
while (cars[i]) {
    console.log(i,"-" ,cars[i])
    i++;
  }