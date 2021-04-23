// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// Chiedere all'utente quanti km deve percorrere
var km = parseInt(prompt("Quanti KM vuoi percorrere?"));

// Chiedere all'utente quanti anni ha
var age = parseInt(prompt("Quanti anni hai?"));

// Calcolare il prezzo del biglietto per km/€
var ticketPrice = (km * 0.21);
console.log(ticketPrice);

// Dichiarare la var sconto
var discount = 0;

// Calcolare lo sconto a seconda dell'età
if (age < 18) {
    discount=(ticketPrice * 20)/100;
} else if (age > 65) {
    discount=(ticketPrice * 40)/100;
}
console.log(discount);

// Operazione aritmentica per calcolare il prezzo scontato
var discountedPrice = ticketPrice - discount;
console.log(discountedPrice);

// Prezzo finale con massimo due decimali
var finalPrice = discountedPrice.toFixed(2);
console.log(finalPrice);

// Visualizzare sullo schermo il prezzo da pagare
document.getElementById("result").innerHTML = finalPrice;