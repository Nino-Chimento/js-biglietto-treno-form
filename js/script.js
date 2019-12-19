var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( "click",
  function () {
    var nomeInput = document.getElementById('nomeutente');
    var nome = nomeutente.value;
    document.getElementById('stampaNomeUtente').innerHTML = nome;
    var km = document.getElementById("distanza");
    var distanzaViaggio = parseInt(km.value);
    console.log(distanzaViaggio);
    var viaggiatore = document.getElementById('eta');
    var etaViaggiatore = viaggiatore.value;
    console.log(etaViaggiatore);
    var costoAlKm = 0.21;
    var prezzoPieno = costoAlKm * distanzaViaggio;
    
    if (etaViaggiatore == under) {
      var costoBiglietto = prezzoPieno*20/100;
      console.log(costoBiglietto);
    }
  }
)
