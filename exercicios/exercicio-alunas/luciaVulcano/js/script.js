function media() {

    var nomeEstudante = (document.getElementById("name").value);
    var notaPrimeiroTrimestre = parseFloat(document.getElementById("nota1").value);
    var notaSegundoTrimestre = parseFloat(document.getElementById("nota2").value);
    var notaTerceiroTrimestre = parseFloat(document.getElementById("nota3").value);
    var mediaTrimestral = (notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre) / 3;

    console.log(nomeEstudante, notaPrimeiroTrimestre, notaSegundoTrimestre, notaTerceiroTrimestre, mediaTrimestral);

    if (mediaTrimestral >= 7) {
        alert("Parabéns, " + nomeEstudante + ". Você foi aprovado com média " + (mediaTrimestral).toFixed(2) + " aproveite suas férias!");

    } else if (mediaTrimestral < 7) {
        alert("Que pena, " + nomeEstudante + ". Sua média é " + (mediaTrimestral).toFixed(2) + " e você foi reprovado.");
        var recuperacao = confirm('Gostaria de fazer recuperação?');

        if (recuperacao) {

            alert("Ótimo, as aulas de recuperação começam semana que vem, " + nomeEstudante + "!");

        } else {

            alert("Que pena, te vejo ano que vem, " + nomeEstudante + ".");
        }
    }
}

//Eu havia colocado o math.round para arredondar as notas, porém, quando o JS arredondava 6.8 para 7, 
//exibia a mensagem de reprovação. Dessa forma, resolvi por o too.fixed(2), apesar da instrução pedir para arredondar os numeros
// por exemplo, se as notas fosse 10, 3 e 7, o resultado era 6,66 e arredondado para 7, ainda dava a mensagem de reprovação.