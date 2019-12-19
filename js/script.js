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
    var costoBiglietto = costoAlKm * distanzaViaggio;
    var tipologiaOfferta = "standard"
    if (etaViaggiatore == "under") {
      costoBiglietto -= (costoBiglietto*20/100);
      tipologiaOfferta = "Junior"
    }
    else if (etaViaggiatore == "Over65") {
      costoBiglietto -= (costoBiglietto*40/100);
      tipologiaOfferta = "Silver"
    }
    document.getElementById("tipo-offerta").innerHTML = tipologiaOfferta;
    document.getElementById('numero-carrozza').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('numero-prenotazione').innerHTML =
    Math.floor(Math.random() * (100000 - 90000) ) + 9000;
    document.getElementById('costo').innerHTML = costoBiglietto;
    bigliettoApparizione = document.getElementById("apparizione");
    bigliettoApparizione.classList.remove("hidden");
  }
)
var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener("click",
  function(){
    document.getElementById("tipo-offerta").innerHTML = " ";
    document.getElementById("nomeutente").value = " "
    document.getElementById("distanza").value = " "
    bigliettoSparizione = document.getElementById("apparizione");
    bigliettoSparizione.classList.add("hidden")
  }
);
