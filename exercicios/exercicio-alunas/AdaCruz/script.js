let nomeusuario = prompt('Digite seu nome');

function vazia(str) {
    if(str)
    return false;
    return true;
}

function lernota(nome, trimestre){
    var x1 = prompt(`Olá ${nome}, digite a nota do ${trimestre} trimestre`);
    while(isNaN(x1) || vazia(x1)){
        x1 = prompt(`Olá ${nome}, digite a nota do ${trimestre} trimestre`);
    }
    return parseInt(x1);
}

let prim = lernota(nomeusuario, "primeiro");

let seg = lernota(nomeusuario, "segundo");

let ter = lernota(nomeusuario, "terceiro");

//média
let media = Math.round((prim + seg + ter)/3); 
if (media >=7){
    alert(`Parabéns ${nomeusuario}, sua média é de ${media} você foi aprovade nos vemos no ano que vem, aproveite suas férias.`);
}else if(confirm(`Sinto muito ${nomeusuario}, sua média é de ${media} você foi reprovade, deseja fazer aulas de recuperação?`)){
    alert('Suas aulas começa semana que vem. Até lá.');   
}else{
    alert( 'Que pena, nos vemos ano que vem.');
}