let mensagem = 'Digite o seu nome';
let nomeUsuario = prompt(mensagem);
console.log(nomeUsuario);
console.log(isNaN(nomeUsuario));

if (isNaN(nomeUsuario) === true) {
  alert(`Olá ${nomeUsuario}! Vamos calcular sua média anual!`);
}

var media, n1, n2, n3 ;

n1= prompt ("Informe a primeira nota: ") ;
n1= eval (n1) ;

n2= prompt ("Informe a segunda nota: ") ;
n2= eval (n2) ; 

n3= prompt ("Informe a terceira nota: ") ; 
n3= eval (n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 7 ) 
{
    confirm ("Parabéns , você foi aprovado com média maior ou igual a 7, aproveite suas férias!");
} 
else 
{ 
    if ( media <= 6 ) 
    {
       confirm('Que pena, sua média é menor que 7 e você foi reprovado. Vamos fazer aulas de recuperação para tentar melhorar a nota e passar de ano?');
       if (confirm == true) {
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
      } else {
        alert('Que pena, te vejo ano que vem.');
      }
    }
    }