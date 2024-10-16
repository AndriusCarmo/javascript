function carregar(){
    var foto=window.document.getElementById('foto')
    var dia=new Date()
    var hora=dia.getHours()
    var mensagem=window.document.getElementById('msg')
    mensagem.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        foto.src='pexels-elias-tigiser-411757-1083342.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora<18){
        foto.src='pexels-iriser-2423154.jpg'
        document.body.style.background ='#b9846f'
    }else{
        foto.src='pexels-pixabay-355465.png'
        document.body.style.background ='#515154'

    }
}