function cl(){
    let num=window.document.getElementById('in')
    let res=window.document.getElementById('tb')
    
    if(num.value.length == 0){
        window.alert('Digite um valor')
    }else{
        let numb=Number(num.value)
        let c=0
        while(c<=10){
            
            let  item = document.createElement('option')   /*declaro uma variavel e cria um elemento opção para o select*/
            item.text = `${numb} X ${c} = ${numb*c}`           /*adiciona um texto ao elemento */ 
            res.appendChild(item)                         /*coloca o elemento filho no select  */
            c+=1
        }
        


    }








}