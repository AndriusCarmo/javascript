let num = [4,5,7,8,6]
num.push(9)  // adicionando um valor diretamente a ultima posição do array//
console.log(num)
num.sort()  //  colocando em ordem todos os elemntos do arraay//
console.log(num)

var c=0
while(c<6){
      console.log(num[c])
      c=c+1
} 

// podemos fazer com qulquer estrutura de repetição//

for(let c=0 ; c < num.length ; c=c+1){
    console.log(`A posição ${c} tem valor ${num[c]}`)
}

console.log(num.indexOf(7))
console.log(num.indexOf(2))
