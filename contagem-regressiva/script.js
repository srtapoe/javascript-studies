function countdown() {
    var targetDate = new Date("2023-12-31T23:59:59"); // Altere para a data do evento desejado
    var hoje = new Date();
    var diff = targetDate - hoje;
  
    if (diff <= 0) {
      document.getElementById("countdown").textContent = "O evento ocorreu!";
    } else {
      var dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").textContent = "Faltam: " + dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";
    }
  }
  
  setInterval(countdown, 1000);
  