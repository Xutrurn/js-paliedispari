// alert("Hello world");

// cartella/repo js-paliedispari
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!  :muscle::laptop_parrot:

var sceltaUtente = prompt("Pari o Dispari?");
sceltaUtente = sceltaUtente.charAt(0).toUpperCase() + sceltaUtente.substring(1).toLowerCase();
console.log(sceltaUtente);

var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

var numeroAi = generaRandom(1, 5);
console.log(numeroAi);

var somma = sum(numeroUtente, numeroAi);
console.log(somma);

if (isPari(somma) == (sceltaUtente == "Pari")) {
  console.log("La tua scelta è : " + sceltaUtente + "," + " hai vinto la somma è :", somma);
} else if (!isPari(somma) == (sceltaUtente == "Dispari")) {
  console.log("La tua scelta è : " + sceltaUtente + "," + " hai vinto la somma è :", somma);
} else {
  console.log("La tua scelta è : " + sceltaUtente + "," + " hai perso la somma è :", somma);
}


// Funzioni

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPari(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function sum(n1, n2) {
  var sum = n1 + n2;
  return sum;
}













// console.log();
