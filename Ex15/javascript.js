function contar(){
    var inicio=window.document.getElementById('in')
    var start=Number(inicio.value)
    var fim=window.document.getElementById('end')
    var end=Number(fim.value)
    var passo=window.document.getElementById('pas')
    var pass=Number(passo.value)
    var div2=window.document.getElementById('02')
    if(start<=0 || pass==0){
        
        div2.innerHTML='Valor invalido'
    }else{
        div2.innerHTML='Contando'
        if(start<=end){    
            do{
            div2.innerHTML+=` ${start} \u{1F449} `
            start=(start+pass)
            
            }while(start<= end)
        }else{
            do{
                div2.innerHTML+=` ${start} \u{1F449} `
                start=(start-pass)
                
                }while(start>= end)
        
        }        

    }
    
}
