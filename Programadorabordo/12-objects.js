var usuario = {
nome: 'Wilson',
idade: 59,
youtube: 'Véioquecorre',
'ultimo-nome': 'Maldonado',
competencias: {
linguagens: ['JavaScript', 'CSS-3', 'HTML', 'Scrum', 'Cascade'],
instrumentosMusicais: ['Guitarra', 'Baixo', 'Campainha']
}
};

console.log(usuario);
console.log(usuario.idade);
console.log(usuario.nome);
console.log(usuario.youtube);
console.log(usuario['ultimo-nome']);

console.log(usuario['youtube']);


usuario.ano = new Date().getFullYear();

console.log(usuario);
console.log(usuario.ano);


delete usuario.idade;

console.log(usuario);

usuario.hobbies = ['Música', 'Correr', 'Programar', 'Viajar'];

console.log(usuario);

var usuario2 = {
digaOi(name) {
return `Olá ${name}`;
}
};

console.log(usuario2.digaOi('Wilson'));
console.log(usuario2.digaOi('Maldonado'));

var cor = 'roxa';
var idade = 59;
var nome = 'Wilson';

var usuario3 = {
nome,
idade,
cor
};

console.log(usuario3);


var usuario4 = {
nome: 'Rico',
idade: 60
};

var extraInfo = {
pais: 'Brasil',
estado: 'São Paulo'
};

var novoUsuario = Object.assign({}, usuario4, extraInfo);
console.log("usuario 4  ",novoUsuario);

var novoUsuario2 = {
...usuario4,
...extraInfo,
sexo: 'M',
profissao: 'Project Manager'
};

// var novoUsuario = Object.assign({}, usuario4, extraInfo);

console.log(novoUsuario2);

var nomeVariavel = 'estado';
var nome = 'lastName';

var usuario5 = {
[nome]: 'Ayrton',
[nomeVariavel]: 'Rio de Janeiro'
}

console.log(usuario5);


// getters e setters
//
var usuarios = [
{
nome: 'Ayrton',
idade: 26
},
{
nome: 'João',
idade: 19
},
{
nome: 'Maria',
idade: 21
}
]

console.log(usuarios[2].idade);

var usuario = {
posicao: 0,
get atual() {
return usuarios[this.posicao]
},
set atual(posicao) {
this.posicao = posicao;
}, proximo() {
++this.posicao;
},
anterior() {
--this.posicao;
}
};

console.log(usuario.atual); // { nome: 'Ayrton', idade: 26 }
usuario.proximo();

console.log(usuario.atual); // { nome: 'João', idade: 19 }

usuario.proximo();
console.log(usuario.atual); // // { nome: 'Maria', idade: 21 }

usuario.anterior();
console.log(usuario.atual); // { nome: 'João', idade: 19 }

usuario.atual = 0;
console.log(usuario.atual); // { nome: 'Ayrton', idade: 26 }

usuario.atual = 2;
console.log(usuario.atual); // { nome: 'Maria', idade: 21 }