### Exercícios

* Declare uma variável e mostre no console do navegador somente se essa variável for uma string

```js
let nomeVariavel = 'Patricia';

if (typeof nomeVariavel === 'string') {
  console.log(nomeVariavel); // essa mensagem só aparece se a minha variável for do tipo string
};
```

***

* Declare uma variável com uma mensagem de texto pedindo para o usuário clicar em um dos botões (OK ou Cancel)
  - Se ele clicar em OK, mostre o seguinte alerta na tela: Você apertou o botão OK
  - Se ele clicar em Cancel, mostre o seguinte alerta na tela: Você apertou o botão Cancel

  ```js
  let mensagem = 'Clique em um dos botões da tela';
  let confirmacao = confirm(mensagem);
  console.log(confirmacao);

  if (confirmacao === true) {
    alert('Você apertou o botão OK');
  } else {
    alert('Você apertou o botão Cancel');
  }
  ```

***

* Declare uma variável com uma mensagem de texto pedindo para o usuário digitar o seu nome
  - Verifique se o nome é uma String
  - Se for uma string, mostre o seguinte alerta na tela: Olá nomedavariavel

  * Tem que utilizar o isNaN();

  ```js
  let mensagem = 'Digite o seu nome';
  let nomeUsuario = prompt(mensagem);
  console.log(nomeUsuario);
  console.log(isNaN(nomeUsuario));

  if (isNaN(nomeUsuario) === true) {
    alert(`Olá ${nomeUsuario}!`);
    //alert('Olá' + nomedavariavel + '!');
  }
  ```

***

* Peça para o usuário digitar dois nomes de frutas e depois compare uma com a outra
  - Se elas forem iguais, mostre um alerta na tela avisando que elas são iguais
  - Se não forem, mostre um alerta na tela avisando que são frutas diferentes

  ```js
  let primeiraFruta = prompt('Digite um nome de fruta');
  let segundaFruta = prompt('Digite outro nome de fruta');

  console.log(primeiraFruta, segundaFruta);

  if (primeiraFruta == segundaFruta) {
    alert(`${primeiraFruta} é igual a ${segundaFruta}`)
  } else {
    alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
  }
  ```

***

* Peça para o usuário digitar três números e verifique se os números são positivos, negativos ou zero
  - Se o número for positivo, mostre a mensagem: "O número [x] é positivo"
  - Se o número for negativo, mostre a mensagem: "O número [x] é negativo"
  - Se o número for zero, mostre a mensagem: "O número [x] é zero"
  - Você pode mostrar uma mensagem para cada número ou uma mensagem só para os três

```js
let numeroUm = prompt('Digite o primeiro número');
let numeroDois = prompt('Digite o segundo número');
let numeroTres = prompt('Digite o terceiro número');

console.log(numeroUm, numeroDois, numeroTres);

if (numeroUm > 0) {
  alert('O número é positivo');
} else if (numeroUm < 0) {
  alert('O número é negativo');
} else {
  alert('O número é zero');
}

if (numeroDois > 0) {
  alert('O número é positivo');
} else if (numeroDois < 0) {
  alert('O número é negativo');
} else {
  alert('O número é zero');
}

if (numeroTres > 0) {
  alert('O número é positivo');
} else if (numeroTres < 0) {
  alert('O número é negativo');
} else {
  alert('O número é zero');
}
```

***

* Crie um algoritmo para verificar se um cinema já está aberto. O cinema abre às 14h.
  - Se estiver aberto, mostre a mensagem: Agora são [x horas] e o cinema já está aberto desde às 14h.
  - Se estiver fechado, mostre a mensagem: Agora são [x horas] e o cinema só abre às 14h.

***

* Crie um algoritmo para validar se uma pessoa já tem idade suficiente para votar.
  - Utilize o operador ternário
  - Mensagem de sucesso: Você tem x anos ou mais e já pode votar.
  - Mensagem de erro: Você tem x anos e ainda não pode votar.


***

* Crie uma variável do tipo array com 5 nomes de cores. Mostre essa lista para o usuário em ordem alfabética
  - Depois mostre para o usuário somente a segunda e a última cor dessa lista para o usuário.

***
