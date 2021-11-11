

// Lista o Objeto ligado ao seu IMC
var imc=0

var usuarios = [
    {
        nome: 'Wilson',
        idade: 59,
        imc: 0,
    },

    {
        nome: 'Fulano',
        idade: 38,
        imc: 0 ,
      
    },

    {
        nome: 'Fulana',
        idade: 22,
        imc: 0,
       
    }

]

console.log(usuarios[0].nome," ", usuarios[0].idade, " ", imc(usuarios[0]));


console.table(usuarios)


// Calcula IMC 
var imc = function(peso, altura=1.83){
    var vimc=peso/altura**2
    return vimc
}

