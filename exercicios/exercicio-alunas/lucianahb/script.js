let nome = prompt('Digite seu nome:');
let nota1 = parseFloat(prompt('Digite a nota do 1º semestre:').replace(',','.'));
let nota2 = parseFloat(prompt('Digite a nota do 2º semestre:').replace(',','.'));
let nota3 = parseFloat(prompt('Digite a nota do 3º semestre:').replace(',','.'));
let media = 7;
let notasValidas = nota1 !== NaN && nota2 !== NaN && nota3 !== NaN;
let mediaAluno;
let alunoAprovado;
let alunoReprovado;

if (notasValidas) {
  mediaAluno = (nota1 + nota2 + nota3) / 3;
  alunoAprovado = mediaAluno >= media;
  alunoReprovado = mediaAluno < media;
  
  if (alunoAprovado) {
    alert (`Parabéns, ${nome}, você foi passou de ano com média ${mediaAluno.toFixed(0)}, aproveite suas férias!`);
  } else if (alunoReprovado){
      alert (`Que pena, ${nome}, sua média é ${mediaAluno.toFixed(0)} e você não obteve aprovação.`);
      let pergunta = confirm('Gostaria de fazer recuperação?');
      if (pergunta) {
        alert (`Ótimo, as aulas de recuperação começam semana que vem, ${nome}!`);
      } else {
          alert (`Que pena, te vejo ano que vem, ${nome}`);
      }
  }
}
