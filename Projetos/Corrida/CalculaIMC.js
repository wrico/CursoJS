// Calcula IMC com função de callback

var imc = function(peso, altura){
    return peso/altura**2
    }

console.log("Meu IMC hoje 09/11/2021", imc(83,1.83).toFixed(2), " e Altura 1.83")

for (var i = 90; i >= 69; i=i-0.20) {
    console.log("IMCs para ", i.toFixed(2) ," quilos ->", imc(i,1.83).toFixed(2) );
}

