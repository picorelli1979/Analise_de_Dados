let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

 function isNumero (n) {
         if (Number(n) >= 1 && Number(n) <=100){return true}
         else { return false}
        } 

 function inLista (n , l ) {
         if (l.indexOf(Number(n)) != -1 ){return true}
         else {return false}  
        }

 function adicionar(){
    if (isNumero (num.value) && !inLista (num.value, valores)) {
     valores.push(Number(num.value))
     let item = document.createElement ('option')
     item.text = (`Valor ${num.value} adicionado`)
     lista.appendChild(item)
     res.innerHTML = '' } 
    else {window.alert ('Valor invalido ou já encontrado na lista ')}
    
         num.value = ''
         num.focus()
    }
  function  finalizar() { if (valores.length == 0) 
        {window.alert ('Adicione valores antes de finalizar')} 
        else { 
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores) { 
            soma += valores[pos]
         if (valores [pos] > maior) 
             maior = valores[pos] 
         if ( valores [pos] < menor)          
             menor = valores[pos]
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> TEMOS AO TODO ${tot} NÚMEROS CADASTRADOS </p>`
        res.innerHTML += `<p> O MAIOR VALOR INFORMADO FOI ${maior} . </p>`
        res.innerHTML += `<p> O MENOR VALOR INFORMADO FOI ${menor} . </p>`
        res.innerHTML += `<p> A SOMA TOTAL DOS VALORES ${soma} . </p>`
        res.innerHTML += `<p> A MEDIA DOS VALORES DIGITADOS É ${media} . </p>`    
    
    }      
  }

