// Matriz Mutidimensional 

let ativ = [ ["Wilson", "Programador","primeiro"], ["Rico","Gerente","segundo"], ["Maldonado","Agile Project Manager", "terceiro"] ]
console.table(ativ)
console.log(ativ[0][0], ativ[0][1], " e ", ativ[2][1], " Master")

var i=0
while (ativ[i]) {
    console.log(i,"-" ,ativ[i],"-",ativ[i+1],"-",ativ[i+2])
    i++;
  }

