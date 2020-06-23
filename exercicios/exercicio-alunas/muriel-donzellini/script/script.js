function Functions() {

  let StudentName = (document.getElementById("Name").value);
  let N1 = parseFloat(document.getElementById("FirstGrade").value);
  let N2 = parseFloat(document.getElementById("SecondGrade").value);
  let N3 = parseFloat(document.getElementById("ThirdGrade").value);
  let MF = Math.round((parseInt(N1) + parseInt(N2) + parseInt(N3)) / 3);

  console.log(StudentName, N1, N2, N3, MF)

  if (MF >= 7) {
    let msg1 = `${StudentName}, parabéns! Você está aprovado com nota ${MF}, aproveite suas férias!`;
    document.getElementById("FinalGrade").value = (msg1);
    } else if (MF < 7) {
      let msg2 = `${StudentName}, sua média final foi ${MF}. Gostaria de fazer a recuperação e passar de ano? [Clique em "Sim" ou "Não"]`;
      document.getElementById("FinalGrade").value = (msg2);
      let rmsg2 = confirm(msg2)
      if (rmsg2) {
        let msg3 = `Ótimo! As aulas extras começam semana que vem, ${StudentName}`;
        document.getElementById("FinalGrade").value = (msg3);
      } else {
        alert(`Que pena, te vejo ano que vem, ${StudentName}`)
      }
    }

  }
