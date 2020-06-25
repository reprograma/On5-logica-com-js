//let mensagem = 'mensagem que vai aparecer no console';
//let confirmacao= 'clique ok para confirmar';
//console.log(mensagem); mostra a mensagem no console
//alert(mensagem); mostra no alert a mensagem
//confirm(confirmacao);
//prompt();

/*var nome = 'thais';
console.log(nome);
var apelido = 'thaisinha?';
confirm(apelido);
var mensagem = 'Por favor, escolha sua opção:';
alert(mensagem);
var entrada = "Por favor, digite seu nome:";
prompt(entrada);*/
//exercicio 4

/*let nomeVariavel = 'thais';

if (typeof nomeVariavel === 'string') {
  console.log(nomeVariavel); // essa mensagem só aparece se a minha variável for do tipo string
};*/
/*let mensagem = 'Bem Vindo';
let resposta = confirm(mensagem);

if ( confirmacao ==true){
    alert('Voce apertou o botao Ok');
} else {
    alert('Voce apertou Cancel');
}*/


//usar isNaN();
/*
let mensagem = "Por favor, digite seu nome:";
let nome = prompt(mensagem);
console.log(nome);
console.log(isNaN(nome));

if (isNaN(nome) == true) {
    alert(`Olá ${nome}`);
}
*/
/*let mensagem = "Nome do Aluno:";
let nome = prompt(mensagem);
console.log(nome);
console.log(isNaN(nome));



let n1 = prompt("Digite nota 01: ");
let n2 = prompt("Digite nota 02: ");
let n3 = prompt("Digite nota 03: ");

console.log(n1, n2, n3);

let media = (n1+n2+n3)/3;

console.log(media);

if (media >= 7){
    alert(`Olá ${nome}, Parabéns, você foi aprovado, aproveite suas férias!`);
}else{
    alert(`Que pena ${nome}, você foi reprovado.`);
    //confirm(`${nome}, gostaria de fazer a recuperação?`);

} */
let mensagem = "Nome do Aluno:";
let nome = prompt(mensagem);
console.log(nome);

let n1 = prompt("nota 01: ");
let n2 = prompt("nota 02: ");
let n3 = prompt("nota 03: ");

console.log(n1, n2, n3);

let media = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;

console.log(media);

if (media >= 7){
    alert(`Olá ${nome}, Parabéns, você foi aprovado com média ${media}, aproveite suas férias!`);
}else{
    alert(`Que pena ${nome}, você foi reprovado. Sua média foi ${media}.`);
    confirm(`${nome}, gostaria de fazer a recuperação?`);
    

   /* if ( confirmacao ==true){
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
    } else {
        alert('Que pena, te vejo ano que vem');
    }*/
} 