var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( "click",
  function () {
    var nomeInput = document.getElementById('nomeutente');
    var nome = nomeutente.value;
    console.log(nome);
    var km = document.getElementById("distanza");
    var distanzaViaggio = parseInt(km.value);
    console.log(distanzaViaggio);
    var viaggiatore = document.getElementById('eta');
    var etaViaggiatore = viaggiatore.value;
    console.log(etaViaggiatore);
  }
)
