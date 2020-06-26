//1- media//

let nota1string = prompt("Digite sua primeira nota")
let nota2string = prompt("Digite sua segunda nota")
let nota3string = prompt("Digite sua terceira nota")
let nota1 = parseFloat(nota1string)
let nota2 = parseFloat(nota2string)
let nota3 = parseFloat(nota3string)


let media = function(nota1,nota2,nota3) {
    //(nota1 + nota2 + nota3)/3  
    return (nota1 + nota2 + nota3)/3
}


let notafinal= (media(nota1,nota2,nota3))


//2- mensagens//

let nomeUsuario = prompt("Digite seu nome")

media
let aprovado = (`${nomeUsuario}, parabéns! você foi aprovado com média ${notafinal}, aproveite suas férias!`)
let reprovado = (`Que pena, sua média é ${notafinal} e você foi reprovado.`)
let Recuperacao = "Gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?"
let semRecuperacao ="Que pena, te vejo ano que vem"
let comRecuperacao = "Ótimo, as aulas de recuperação começam semana que vem"

if (notafinal >= 7) {
  alert(aprovado);
} else {
  alert(reprovado);
}
if (notafinal <= 7) {
  let mensagemRecuperacao = confirm(Recuperacao);
  console.log("teste", mensagemRecuperacao);

  if (mensagemRecuperacao == true) {
    alert(comRecuperacao);
  } else {
    alert(semRecuperacao);
  }
}