let nomeEstudante = prompt("Por favor, insira o seu nome:");
let primeiraNota = prompt("Insira a nota do primeiro trimestre:");
let segundaNota = prompt("Insira a nota do segundo trimestre:");
let terceiraNota = prompt("Insira a nota do terceiro trismestre:");

console.log(primeiraNota, segundaNota, terceiraNota);

let media = Math.round((+primeiraNota + +segundaNota + +terceiraNota) / 3);//Uma outra forma de fazer a média
//let media = (parseInt(primeiraNota) + parseInt(segundaNota) + parseInt(terceiraNota) / 3);
//tb há as funções Math.ceil e Math.floor
console.log(media);

if (media >= 7){
    alert(nomeEstudante + ", parabéns! Você foi aprovada/o com média " + media + ". Aproveite as férias!");
} else{
    alert(nomeEstudante + ", sua média é " + media + ". Infelizmente você não passou de ano.");
    let mensagem = "Você gostaria de fazer aulas de recuperação para melhorar a sua nota e passar de ano? Clique em Ok ou Cancel";
    let confirmacao = confirm(mensagem);//para mensagem de confirmação
    console.log(confirmacao);
    if (confirmacao == true){
        alert("Ótimo, as aulas de recuperação começam na semana que vem!");
    } else {
        alert("Que pena, nos vemos no próximo ano.")
    }


}