let nome = prompt("Qual é o seu nome?");
let n1 = prompt("Digite nota 01: ");
let n2 = prompt("Digite nota 02: ");
let n3 = prompt("Digite nota 03: ");

// ## Conferindo dados inseridos pelo usuário##
console.log("Nome: " + nome);
console.log("Notas: " + n1, n2, n3);

// ## Cálculando Média das notas ##
let media = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;
console.log("Média: " + media);

// ## Pegando a parte quebrada da média para usar na regra de arredondamento ##
let nquebrado = media %1; 
console.log("Numero quebrado: " + nquebrado);

// ## Quando a parte quebrada da média for maior que 0.8 será arredondado para mais e o contrário para menos ##
let fmedia; //variável para guardar a média formatada.
if (nquebrado > 0.8){
    fmedia = Math.ceil(media);
}else{
   fmedia = Math.floor(media);
}
console.log("Media Formatada " + fmedia);

// ## Verificando se houve aprovação ##
if (fmedia >= 7){
    alert(`Parabéns ${nome}, você foi aprovado(a), aproveite suas férias!`);
}else{
    let recuperacao = confirm(`${nome}, você gostaria de fazer as aulas de recuperação para tentar melhorar a sua nota?`);

    if (recuperacao === true){
        alert("Ótimo, as aulas de recuperação começam semana que vem!");
    }else{
        alert("Que pena, te vejo ano que vem.");
    }
}