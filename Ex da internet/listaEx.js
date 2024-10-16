function clicar(){
    let nota1=window.document.getElementById('n1')
    let nota11=Number(nota1.value)
    let nota2=window.document.getElementById('n2')
    let nota22=Number(nota2.value)
    let nota3=window.document.getElementById('n3')
    let nota33=Number(nota3.value)
    let res=window.document.getElementById('res')
    let media=((nota11+nota22+nota33))/3
    if(res<7){
        res.innerHTML=(`Sua média foi de ${media} você foi reprovado`)

    }else{

        res.innerHTML=(`Sua nota foi de ${media}você foi reprovado`)
    }
        
        


    







}