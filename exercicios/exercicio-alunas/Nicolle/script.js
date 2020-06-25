//let mensagem = "Mensagem que vai aparecer no console";
//let confirmacao = "clique no botão ok para confirmar";
//let nomeUsuario = "Digite seu nome"
//console.log(mensagem);
//alert(mensagem)
//confirm(confirmacao);
//prompt(nomeUsuario);
//let mensage = "Helooooo Girls";
//let conf = "quá";
//let nomear = "put your name here";
//console.log(mensage);
//alert(mensage)
//confirm(conf);
//prompt(nomear);


/*if (1 == 2) {
    alert('equal');
} else {
    alert('its different');
};

inf (condicao) {

} else if (condicao){

} else if (condicao){

} else {

}; 

let nomeVariavel = 9;
if (typeof nomeVariavel === "string") {
    console.log(nomeVariavel);
} */


//EXERCICIO1
/*Declare outra variável com uma mensagem de texto pedindo para o usuário clicar em um dos botões (OK ou Cancel)
Se ele clicar em OK, mostre o seguinte alerta na tela: Você apertou o botão OK
Se ele clicar em Cancel, mostre o seguinte alerta na tela: Você apertou o botão Cancel

let mensagem = "clique ok ou cancelar";
let confirmacao = confirm(mensagem);
console.log(confirmacao);
if (confirmacao === true) {
    alert("voce apertou ok");
} else {
    alert("você apertou cancelar");
}
*/


//EXERCICIO2
/*Declare outra variável com uma mensagem de texto pedindo para o usuário digitar o seu nome
Verifique se o nome é uma String
Se for uma string, mostre o seguinte alerta na tela: Olá nomedavariavel
Tem que utilizar o isNan();

let nomeUsuario = prompt("Olá, digite seu nome: ")
if (nomeUsuario != isNaN) {
    alert ('Olá '+nomeUsuario + '!')
}*/

//da professora

/*
let mensagem = "Digite seu nome";
let nomeUsuario = prompt(mensagem);
console.log(nomeUsuario);
console.log(isNaN(nomeUsuario));
if(isNaN(nomeUsuario) === true){
    alert("Olá " + nomeUsuario + " !");
}
*/


//EXERCICIO3
/*Peça para o usuário digitar dois nomes de frutas e depois compare uma com a outra
Se elas forem iguais, mostre um alerta na tela avisando que elas são iguais
Se não forem, mostre um alerta na tela avisando que são frutas diferentes

let f1 = prompt('Digite o nome da primeira fruta');
console.log(f1);
let f2 = prompt('Digite o nome da segunda fruta');
console.log(f2);
if (f1 === f2){
    alert('As frutas são iguais');
} else {
    alert('As frutas são diferentes');
};*/


//EXERCICIO4
/*Peça para o usuário digitar três números e verifique se os números são positivos, negativos ou zero
Se o número for positivo, mostre a mensagem: "O número [x] é positivo"
Se o número for negativo, mostre a mensagem: "O número [x] é negativo"
Se o número for zero, mostre a mensagem: "O número [x] é zero"
Você pode mostrar uma mensagem para cada número ou uma mensagem só para os três*/

/*
let n1 = prompt('Digite o primeiro número');
console.log(n1);
let n2 = prompt('Digite o segundo número');
console.log(n2);
let n3 = prompt('Digite o terceiro número');
console.log(n3);
if(n1 <0){
    alert("The first number is negative");
} else if (n1 == 0){
    alert("This first number is zero");
} else if (n1 > 0){
    alert("This first number is positive")
};
if(n2 <0){
    alert("The second number is negative");
} else if (n2 == 0){
    alert("The second number is zero");
} else if (n2 > 0){
    alert("The second number is positive")
};
if(n3 <0){
    alert("The third number is negative");
} else if (n3 == 0){
    alert("The third number is zero");
} else if (n3 > 0){
    alert("The third number is positive")
}; 
*/


//EXERCICIO5
/*Crie um algoritmo em javascript para verificar se um cinema já está aberto. O cinema abre às 14h.
Se estiver aberto, mostre a mensagem: Agora são [x horas] e o cinema já está aberto desde às 14h.
Se estiver fechado, mostre a mensagem: Agora são [x horas] e o cinema só abre às 14h.*/

/*let hora = Date();
alert ( hora + "                   O horário de funcionamento do cinema é das 14h ás 00h, verifique acima que horas são agora")
*/
/*
let data = new Date()
let horaAtual = data.getHours();
if (horaAtual > 14){
    alert("Agora são " + horaAtual + " horas, o cinema está aberto desde as 14h");
} else {
    alert("Agora são" + horaAtual + " horas, o cinema está fechado");
};
*/


//EXERCICIO6
/*Crie um algoritmo para validar se uma pessoa já tem idade suficiente para votar.
Utilize o operador ternário
Mensagem de sucesso: Você tem x anos ou mais e já pode votar.
Mensagem de erro: Você tem x anos e ainda não pode votar.*/

/*let idade = prompt('Informe sua idade');
let votar = (idade >= 16) ? alert(`Você tem ${idade} anos e já pode votar`) : alert(`Você tem ${idade} anos e ainda não pode votar`);
*/
/*
let nomecadastro = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");

if(idade > 16 ){
    alert("Você tem" + idade + ", já pode votar, vá até um cartório e tire seu título de eleitor.");
} else if (idade < 16){
    alert("Você tem" + idade + ", você ainda não pode votar");
}

//COLA DA COLEGA
idade = prompt('Digite sua idade') 
 if (idade<16) {
    alert('Você ainda não pode votar') 
 } else if (idade<18 || idade>=65) {
        alert('Pra você o voto é opcional') 
 } else {
          alert('Pra vc o voto é obrigatório')
}
*/


//EXERCICIO TAREFA PARA CASA *---*
/*Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
  - A média para passar de ano na escola é 7
  - O ano escolar tem 3 trimestres
  - Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado com média [valor da média], aproveite suas férias!
  - Alunos reprovados devem ver a mensagem: Que pena, sua média é [valor da média] e você foi reprovado.

  - *Bônus:*
    - Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
    - Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
    - Arredondar valores da nota (mostrar números inteiros)*/

    let nomeAluno = prompt ("Informe seu nome");
    let nomeMateria = prompt("Informe qual matéria")
    let n1 = parseInt (prompt ("Informe a nota do primeiro semestre"));
    let n2 = parseInt (prompt ("Informe a nota do segundo semestre"));
    let n3 = parseInt (prompt ("Informe a nota do terceiro semestre"));
    let media = Math.round ((parseInt(n1)+parseInt(n2)+parseInt(n3))/3);
    console.log(media);

    if (media >= 7){
        alert(nomeAluno + ", parabéns! Você foi aprovado(a) com média " + media + " na matéria " + nomeMateria + ". Aproveite suas férias!");
    } else {
        alert( "Que pena " + nomeAluno + ", sua média na matéria " + nomeMateria + " foi de " + media + ", você foi reprovado!!");
        let confirmacao = confirm (nomeAluno + ", você gostaria de fazer aulas de recuperação para tentar melhorar a nota na matéria de " + nomeMateria + " e ser aprovado?");
        if (confirmacao === true){
            alert("Legal!!! As aulas de recuperação da aula de " + nomeMateria + " começam semana que vem, no horário comum da aula! Boa recuperação! ");
        } else{
            alert("Que pena " + nomeAluno + "! Infelizmente você não agregou a aula de " + nomeMateria + " as concluídas. Nos vemos no ano que vem para refazê-la!" );
        }
    }
        


    




    


