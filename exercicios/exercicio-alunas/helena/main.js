// variables to be asked in the prompt 
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nums = prompt('Digite a sua nota no Primeiro Trimestre');
var nums = prompt('Digite a sua nota no Segundo Trimestre');
var nums = prompt('Digite a sua nota no Terceiro Trimestre');

// Average here (no matter the amount of #'s)
var totalSum = 0;
for (var i in nums) {
  totalSum += nums[i];
}
var numsCnt = nums.length;
var average  = totalSum / numsCnt;

// If, then
if (average >= 7) {
  alert(`Arrasou, sua média é ${average} e você está de FÉRIAS`);
} else {
  let result = confirm(`Ô, meu bem, tua média é ${average} e você reprovou ); Você gostaria de fazer a recuperação com o intuito de melhorar a sua nota? Aperte Ok caso Sim`);
  if (result === true) {
           alert('Show, te vejo na semana que vem (:');
           } else {
             alert(`Que pena. Te vejo ano que vem, sentiremos saudades`);
           }

          }

