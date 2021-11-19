
 let a=10
 var b=20

 this.a = 59

 console.log(this.a)
 console.log(this.b)
 console.log(b)
 console.log(this)
console.log("//------------------------------")

//------------------------------



    function Usuario() {
    
     console.log(" isso é um objeto :")  

     console.log(this) 
     
     /* 
     this.nome = 'Wilson'
      this.idade = 59;
      this.soma = function(a, b) {
        return a + b; 
     */
     }

    Usuario()
    
    new Usuario()
console.log("//----------")

var person = {
    firstName    : "Penelope",
    lastName     : "Barrymore",
    // Já que a palavra-chave "this" é usada dentro do método showFullName() abaixo e este método 
    // é definido no objeto "person", "this" terá o valor do objeto "person" porque este 
    // invocará showFullName()​.
    showFullName : function() {console.log ( this.firstName + ' ' + this.lastName ) }
}

​person.showFullName() // Penelope Barrymore


    /*

    console.log(Usuario())

  
    var usuario = new Usuario();
    console.log(usuario)

    console.log(usuario.nome);
    console.log(usuario.idade);
    console.log(usuario.soma(10, 4));

  
    // call
    // 
    function Personagem(p1, p2, p3) {
      console.log(p1, p2, p3)
      console.log('personagem this', this)
    }

    var personagemThis = {
      nome: 'Teshima'
    }

    // Personagem.call(personagemThis, 'param1', 123, [5])


    // Apply
    // var personagemParams = ['param$$$$', 321, [1, 2, 3]];
    // Personagem.apply(personagemThis, personagemParams)

    // bind
    // 
    
    var pers = Personagem.bind(personagemThis, 'Olá')
    pers('Mundoo0', '!!!')


    // Arrow functions
    // 
    
    // var soma = (a, b) => {
    //   return a + b;
    // }

    var soma = (a, b) => (
      a + b
    )

    console.log(soma(10, 11))

    var retornaUsuario = cidade => (
      {
        nome: 'Ayrton',
        idade: 27,
        cidade
      }
    )

    console.log(retornaUsuario('Rio de Janeiro 123'));


    var imprimiThis = () => {
      console.log(this)
    }

    imprimiThis();

    imprimiThis.call({ nome: 'Ayrton' })


    

*/