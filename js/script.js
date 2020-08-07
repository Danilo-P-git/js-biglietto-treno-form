
var genera = document.getElementById("genera");
genera.addEventListener("click",
function() {
  // prendo il nome
  var nome = document.getElementById("nome").value;
  // prendo i Km dall'input
  var km = document.getElementById("km").value;
  // prendo dalla select la fascia di età
  var fasciaEta = document.getElementById("fascia-eta").value;
  // calcolo il prezzo del viaggio
  var prezzoKm = 0.21;

  var totale = km * prezzoKm;
  var offerta = "biglietto Standard"
  // faccio la mia if per calcolare la fascia di eta e gli sconti
  if (fasciaEta =="minorenne") {
    totale = totale - ((totale * 20) / 100);
    offerta = "Sconto Minorenne"
  }
  else if (fasciaEta == "over65") {
    totale = totale - ((totale * 40) / 100)
    offerta = "Sconto Silver"

  }

  // arrotondo il totale
  totale = totale.toFixed(2);
  // Genero la carrozza e il codice
  var numCarrozza = Math.floor(Math.random() * 9) +1;
  var codiceCp = Math.floor(Math.random() * 9999) +90000;

  // inserisco i dati nel biglietto
  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = numCarrozza;
  document.getElementById('codice-cp').innerHTML = codiceCp;
  document.getElementById('costo').innerHTML = totale + "€";
  document.getElementById('biglietto-container').classList.add("show");

}
);

// annulla

var annulla = document.getElementById('annulla');
annulla.addEventListener("click",
  function () {
    document.getElementById('biglietto-container').classList.remove("show");

    // resetto i campi input
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "";

  }
)
