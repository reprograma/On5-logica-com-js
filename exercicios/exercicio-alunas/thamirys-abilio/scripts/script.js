let nomeAluno = prompt('Como vc chama?');
let nota1 = prompt('Digite a nota do 1º trimestre');
nota1= eval(nota1); /*evaluation */
let nota2 = prompt('Digite a nota do 2º trimestre');
nota2 = eval(nota2);
let nota3 = prompt('Digite a nota do 3º trimestre');
nota3 = eval(nota3);
let mediafinal = (nota1+nota2+nota3)/3;
mediafinal = eval(mediafinal);
/*let status = eval(mediafinal)>=7 ? 'aprovado':'reprovado';*/
console.log(nomeAluno);
console.log(nota1);
console.log(nota2);
console.log(nota3);
console.log(mediafinal);
console.log(status);


if (mediafinal >= 7) {
    alert(`${nomeAluno}, Parabéns! você está aprovado, aproveite suas férias!`)
} else if (confirm(`Que pena, sua média é ${mediafinal} e você foi reprovado'`) === true)
{
    alert(' Ótimo, as aulas de recuperação começam semana que vem!')
}else {
    alert('Que pena, te vejo ano que vem');
}








/* tentativa 03
if(mediafinal>=7){
    alert('aprovado')
}else if(confirm('quer recuperação')=== true)
{alert('te vejo na recuperação')
}else{
    alert('só lamento');
}*/





/* thamirys tentativa 01
if (mediafinal >= 7){
    alert(`${nomeAluno}, Parabéns! você está aprovado, aproveite suas férias! Uhuuull`)
}else{ 
    alert(`Que pena, sua média é ${mediafinal} e você foi reprovado`)
    };
if (confirm('Quer fazer a recuperação?')===true)
{
    alert('Ótimo, as aulas de recuperação começam semana que vem!')
}
else {
    alert('Que pena, te vejo ano que vem!')
    };*/

/*tentativa 02 thamirys
if (status = 'aprovado') {
alert('aprovado')
};
else if (confirm('reprovado, quer recuperação?')===true) {
alert('te vejo depois')};
else {'so lamento' };
*/
