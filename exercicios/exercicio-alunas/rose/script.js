let n1 = prompt("Digite nota 01: ");
let n2 = prompt("Digite nota 02: ");
let n3 = prompt("Digite nota 03: ");

console.log(n1, n2, n3);

let media = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;

console.log(media);

if (media >= 7){
    alert("Parabéns, você foi aprovado, aproveite suas férias!");
}else{
    alert("Que pena, você foi reprovado.");
}