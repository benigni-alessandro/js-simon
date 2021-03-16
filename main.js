$(document).ready(function(){
  randomcpu();
  // setTimeout(nascondi, 3000);
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
  var num_generate = numeri_generati;
  document.getElementById("num_pc").innerHTML = num_generate + "" ;
  var ng_l = numeri_generati.length;
  return numeri_generati;
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
  var num_memory = numeri_memory;
  document.getElementById("num_ut").innerHTML = num_memory  + "" ;
  var nm_l = numeri_memory.length;
  return numeri_memory;
}


function memory() {
  console.log(numeri_generati);
  console.log(numeri_memory);
  var indovinati = [];
  for (i = 0; i < 5; i++) {
    for ( j = i + 1; j < 5; j++) {
      if (numeri_generati[i] == numeri_memory[j]){
        var numero = numeri_generati[i,j];
        indovinati.push(numero);
      }
    }
  }
  console.log(indovinati);
  document.getElementById("num_indovinati").innerHTML = indovinati + " sono i numeri indovinati";
  num_ind = indovinati.length
  document.getElementById("num_i").innerHTML = num_ind + " numeri indovinati";


}
