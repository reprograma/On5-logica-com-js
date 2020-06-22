//Pedir pro usuário digitar o nome
//Digitar nota do primeiro trimestre
//Digitar nota do segundo trimestre
//Digitar nota do terceiro trimestre
//Calcular média
//Retornar mensagem de aprovado ou reprovado 
//Mostrar mensagem de recuperação




function verificar(){
    var nome = window.document.getElementById('nome').value
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var n3 = parseFloat(document.getElementById('n3').value)

    var media = parseInt((n1 + n2 + n3)/3);
    

    var resultado = window.document.querySelector('div#resultado')

    if(media>=7){
        alert(`Parabéns, ${nome}! Você foi aprovado com média ${media}, aproveite suas férias!`)
           
    }else{ 
        var retorno = confirm(`Que pena, ${nome}! Sua média é ${media} e você foi reprovado. Você gostaria de fazer recuperação para tentar melhorar sua nota?`)
               
       
        if(retorno==true){
            alert('Ótimo, as aulas de recuperação começam semana que vem!')
        } else{
            alert('Que pena, te vejo ano que vem.')
        }

    }

}
