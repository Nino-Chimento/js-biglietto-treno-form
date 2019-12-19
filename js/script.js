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
    var costoAlKm = 0.21;
    var prezzoPieno = costoAlKm * distanzaViaggio;
    if (etaViaggiatore == Under18) {
      var costoBiglietto = prezzoPieno*20/100;
      console.log(costoBiglietto);
    }
  }
)
