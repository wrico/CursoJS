
   if (true) {
    console.log('Hello World!');
   }

   if (false) { console.log('Não vai ser')}
    else {console.log("false não diz nada")}
   
   if (3 > 4) {
    console.log('3 > 4') 
   }

   if (3 <= 4) {
    console.log('3 <= 4');
   }

   var textoVazio = '';
   if (!textoVazio) {console.log('textoVazio') }

   if (textoVazio) {console.log('oi') } else { console.log('Olá')}

   if (10 > 20) {
    console.log('10 > 20');
   } else if (10 <= 12) {
    console.log('10 <= 12');
   } else {
    console.log('Programador');
   }

   if (10 > 20) {
    console.log('10 > 20');
   } else if (10 >= 12) {
    console.log('10 <= 12');
   } else {
    console.log('else');
   }

   console.log(true ? 'Programador' : 'Designer');
   console.log(false ? 'Programador' : 'Designer');

   var idade = 26;
   console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');
