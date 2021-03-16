$(document).ready(function(){
  randomcpu();
  setTimeout(nascondi, 3000);
  setTimeout(memory_utente, 3500);
  setTimeout(memory, 8000);
});


function randomcpu() {
  numeri_generati = [];
  for (var i = 0; numeri_generati.length < 5 ; i++) {
    var cpu = Math.floor(Math.random() * 100) + 1;
    if (!isNaN(cpu) &&!numeri_generati.includes(cpu)) {
      numeri_generati.push(cpu);
    }
  }
  $('#num_pc').text(numeri_generati + "");
  var ng_l = numeri_generati.length;
}

function nascondi(){
  $('.numeri_da_memorizzare #num_pc').hide();
}

function memory_utente() {
  numeri_memory = [];
  for (j = 0; numeri_memory.length < 5 ; j++) {
    var numero_inserito = parseInt(prompt("Inserisci un numero che hai visto"));
    if (!isNaN(numero_inserito)) {
      numeri_memory.push(numero_inserito);
    } else {
      console.log("dammi un numero valido");
    }
  }
  $('#num_ut').text(numeri_memory  + "" );
  var nm_l = numeri_memory.length;
  memory()
}


function memory() {
  var indovinati = [];
  for (i = 0; i < 5; i++) {
    for (j = i; j < 5; j++) {
      if (numeri_generati[i] == parseInt(numeri_memory[j])){
        var numero = parseInt(numeri_generati[i]);
        indovinati.push(numero);
      }
    }
  }
  console.log(indovinati);
  $("#num_indovinati").text(indovinati + " sono i numeri indovinati");
  $('.numeri_da_memorizzare #num_pc').text(numeri_generati + " questi erano i numeri da indovinare").show()
  num_ind = indovinati.length
  $("#num_i").text(num_ind + " numeri indovinati");
}
