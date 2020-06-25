
let nome = prompt ("Qual é o seu nome?"); 
let nota1 = prompt ("Qual a sua nota no primeiro trimestre?"); 
//prompt(nota1);
parseInt('nota1');
console.log(parseInt(nota1));

let nota2 = prompt ("Qual a sua nota no segundo trimestre?"); 
//prompt(nota2);
parseInt(nota2);
console.log(parseInt(nota2));

let nota3 = prompt ("Qual a sua nota no terceiro trimestre?"); 
//prompt(nota3);
parseInt(nota3);
console.log(parseInt(nota3));


var nota1_numero = parseInt(nota1);
var nota2_numero = parseInt(nota2);
var nota3_numero = parseInt(nota3);

var result = nota1_numero + nota2_numero + nota3_numero;
alert (`A soma das suas notas dos 3 trimentes é: ${result}`);
var media =  result/3;
alert (`A sua média é de ${media}`);


if (media >=7 ) {
    alert (` ${nome} parabêns, você foi aprovado com média de ${media} aproveite suas férias!`);
}else if ( media < 7 ) {
    alert (`Que pena, sua média é de  ${media} e você foi reprovado.`);
 
    let recuperacao = confirm(`${nome}, você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano? sim ou não?`);  
    console.log(confirm); 
    if (recuperacao == true) {  
         alert(`Ótimo, as aulas de recuperação começam semana que vem!`);
     }   else  { 
         alert(`Que pena, te vejo ano que vem!`);

}
}