function calcularIdade() {
    var dob = new Date(document.getElementById("dob").value);
    var hoje = new Date();
    var idade = hoje.getFullYear() - dob.getFullYear();
    var meses = hoje.getMonth() - dob.getMonth();
  
    if (meses < 0 || (meses === 0 && hoje.getDate() < dob.getDate())) {
      idade--;
    }
  
    document.getElementById("resultado").textContent = "Sua idade é: " + idade + " anos.";
  }
  