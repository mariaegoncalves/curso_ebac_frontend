function validarFormulario() {
    let numeroA = document.getElementById("campoA").value;
    let numeroB = document.getElementById("campoB").value;
  
    //verificar se o númeroB é maior que o númeroA
    if (numeroB > numeroA) {
      alert("O formulário é válido!");
      return true;
    } else {
      alert("O formulário está inválido, o valor do número B deverá ser maior que o número A");
      return false;
    }
  }
  