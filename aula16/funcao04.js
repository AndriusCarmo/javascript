function fatorial(n){
    let fat=1
    for(c=n; c>1 ; c=c-1){

        fat=fat*c
    }
    return fat
}
console.log(fatorial(5))  // lembrando que isso significa console.log( let variavel= fatorial(5) )

// ainda podemos fazer de maneira recursiva//

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))
