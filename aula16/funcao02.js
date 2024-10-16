function soma( n1, n2){

    return n1 + n2
}
console.log(soma(2,7))

// neste caso tambem podemos definir os parametros formais caso não seja dado o parametro real//

function soma( n1=1, n2=0){

    return n1 + n2
}
console.log(soma(7))