var agora= new Date()
    hora=agora.getHours()

if(hora<5){
    console.log('Boa Madrugada')

}else {
       if( hora < 12){
           console.log('Boa Dia')

       }else{
             if(hora<18){
                console.log('Boa Tarde')
        
             }else{
                console.log('Boa Noite')
             }

       }

}

