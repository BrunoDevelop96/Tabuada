function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {  //Pra obrigar o usuário a digitar 1 numero.
        window.alert('Por Favor, digite um número !!!')
    }
    else {
         let n = Number(num.value)
         let c = 1
         tab.innerHTML = '' //Limpar a tabuada.

         while (c <= 10) {
             let item = document.createElement('option')
            
             item.text= `${n} x ${c} = ${n*c}`
             item.value = `Tab ${c}`
             tab.appendChild(item)
             c++
         }
    }
   

}