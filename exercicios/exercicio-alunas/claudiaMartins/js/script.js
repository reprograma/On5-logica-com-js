const nota1 = document.querySelector(".nota1");
const nota2 = document.querySelector(".nota2");
const nota3 = document.querySelector(".nota3");

const mediaFinal = Media(nota1 + nota2 + nota3);

const botaoCalcula = document.getElementById("button");
const botaoApaga = document.querySelector("#limpaInput");

const mediaFrase = document.querySelector(".media-titulo");

function Media(n1, n2, n3) {

    return (Math.round((n1 + n2 + n3) / 3));

};

botaoCalcula.addEventListener("click", function () {
    console.log("clicar")
    const nota1 = parseFloat(document.querySelector(".nota1").value);
    const nota2 = parseFloat(document.querySelector(".nota2").value);
    const nota3 = parseFloat(document.querySelector(".nota3").value);
    const mediaFinal = Media(nota1, nota2, nota3);


    if ((mediaFinal >= 7) && (mediaFinal <= 10)) {
       
        mediaFrase.textContent = `Parabéns! Você foi aprovado com a média ${mediaFinal}.`;
        mediaFrase.classList.add("aprovacao");
        mediaFrase.classList.remove("reprovacao");
        mediaFrase.classList.remove("mensagem-de-erro");
    }

    if ((mediaFinal < 7) && (mediaFinal >= 0)) {
        //mediaFrase.insertAdjacentElement = <i class="fas fa-sad-cry"></i>
        mediaFrase.textContent = `Infelizmente, você não atingiu o valor necessário para atingir a média necessária para aprovação. Sua média é ${mediaFinal}.`;
        mediaFrase.classList.add("reprovacao");
        mediaFrase.classList.remove("aprovacao");
        mediaFrase.classList.remove("mensagem-de-erro");

    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

        mediaFrase.textContent = `*Favor preencher todos os campos corretamente`;
        mediaFrase.classList.add("mensagem-de-erro");
        mediaFrase.classList.remove("aprovacao");
        mediaFrase.classList.remove("reprovacao");

    }

    if ((nota1 < 0) || (nota1 > 10) || (nota2 < 0) || (nota2 > 10) || (nota3 < 0) || (nota3 > 10)) {

        mediaFrase.textContent = `*Preencha com valores de 0 a 10.`;
        mediaFrase.classList.add("mensagem-de-erro");

    }

});
