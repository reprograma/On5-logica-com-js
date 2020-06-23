let nome = prompt("Qual é o seu nome?");
let n1 = prompt("Digite nota 01: ");
let n2 = prompt("Digite nota 02: ");
let n3 = prompt("Digite nota 03: ");

console.log(n1, n2, n3);

let media = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;

console.log(media);

console.log(nome);

if (media >= 7){
    alert(`Parabéns ${nome}, você foi aprovado(a), aproveite suas férias!`);
}else{
    let recuperacao = confirm(`${nome}, você gostaria de fazer as aulas de recuperação para tentar melhorar a sua nota?`);

    if (recuperacao === true){
        alert("Ótimo, as aulas de recuperação começam semana que vem!")
    }else{
        alert("Que pena, te vejo ano que vem.")
    }
}