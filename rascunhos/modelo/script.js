function clicar(){
    var data= new Date()
    var ano_atual=data.getFullYear()
    var ano_n=window.document.getElementById('num')
    var genero=window.document.getElementsByName('sexo')
    var resp=window.document.querySelector('div#res')
    var idade=(ano_atual - Number(ano_n.value))
    if(ano_n.value.length == 0 || Number(ano_n.value) > ano_atual){
        window.alert('Data de nascimento invalida')
    }else { if(genero[0].checked){
                if(idade > 0 && idade < 10){
                    resp.innerText=('criança do sexo masculino')
                    
                } else if(idade >=10 && idade < 18){
                    resp.innerText=('Jovem do sexo masculino')
                    Img.setAttribute('src','HTML5_logo200.png')
                }else if(idade >=18 && idade < 60){
                    resp.innerText=('Homem adulto')
                    
                }else {
                    resp.innerText=('Homem idoso')            
                }       
            }else if(genero[1].checked){ 
                if(idade > 0 && idade < 10){
                resp.innerText=('criança do sexo feminino')
                }
            }
    }
}