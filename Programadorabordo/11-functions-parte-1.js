
console.log("Primeira Função - Escreva")

function escreva1() {
    console.log('*** Função Simples ****');
}
escreva1();

function escreva2(param) {
    console.log('*** Função com um paramentro ->', param);
}
escreva2("Wilson");

function soma(a, b) {
    
    return a + b;
}
console.log("Soma dois paramentros 3 e 5 -> ",soma(3,5))

function somaTudo(numeros) {
    var total = 0;

    for (var num of numeros) {
        // iteração com o array passado como paramentro    
        total = total + num;
    }

    return total;
}

var arrayNumeros = [ 3, 5, 7, 10, 9, 12, 5, 20 ];
var resultado = somaTudo(arrayNumeros);
console.log('Usando o FOR OF', somaTudo, resultado);

function escreverEndereco(rua, cidade, pais, ...complementos) {        
                             //parametro rest usa os ... para indicar que não sabe o que vem depois ou a mais
    console.log(rua);
    console.log(cidade);
    console.log(pais);

    console.log("Endereço",complementos);
    console.table(complementos)
}

escreverEndereco('Rua IPM', 'Cairo', 'Egito', 'Imbabah', 'Casa xpto', 'Postal Code 00123-123', 'Bloc 15', 'mais um');


// função auto-invocável é protegida por parentesis
(function (nome) {
    console.log('Parâmetro ->', nome);
}('Wilson'));



var subtraiDoisNumeros = function subtrai(a, b) {
    return a -b;
};

console.log("Função armazenada na variável -> ",subtraiDoisNumeros(10, 2));

var subtraisemnome = function (a, b) {
    return a -b;
};

console.log("Função anonima armazenada na variável -> ",subtraisemnome(10, 2));


// Função Anonima = Sem nome
var subtraiTresNumeros = function (a, b, c) {
    return a - b - c;
};
console.log("Função Anonima/Sem nome armazenada em uma variável -> ", subtraiTresNumeros(15, 3, 6));
 

//Função como parametro de outra função 

function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b);
}

var multiplica = function(total) {
    return total * 2;
};

console.log(somaCallback(10, 3, multiplica));

console.log(somaCallback(5, 2, function(total) {
    return total + 20;
}));

console.log(somaCallback(23, 11, function(total) {
    return total / 2;
}));


function escreveNome(nome = 'Wilson', idade = 59) {
    console.log("Fixando valores padrões")
    console.log("Valor Fixo -> ",nome);
    console.log("Valor default ->",idade);
}

escreveNome("Wil");