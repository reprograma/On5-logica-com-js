let nomeAluno = String(prompt('Digite seu nome:'));
    


let notaUm = Number(prompt('Digite sua nota do primeiro trimestre:'));
let notaDois = Number(prompt('Agora digite a nota do segundo trimestre:'));
let notaTres = Number(prompt('Digite a nota do terceiro trimestre:'));

let mediaAluno = Math.round((notaUm + notaDois + notaTres) / 3);
let mensagem = String;






if (mediaAluno >= 7) {
    
    alert('Parabéns você foi aprovado, boas férias!');

 } else  {
    mensagem = ('Infelizmente, você não foi aprovado.');
    alert(mensagem);
 }
