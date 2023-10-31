/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = parseInt(prompt("ES1. Inserisci il primo numero:"));
const num2 = parseInt(prompt("ES1. Inserisci il secondo numero:"));

let result;
if (num1 > num2) {
  result = num1;
} else {
  result = num2;
}

console.log(`ES1. Il risultato è: ${result}`);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = parseInt(prompt("ES2. Inserisci un numero:"));

if (num != 5) {
  console.log("ES2. not equal");
}
{
  console.log("ES2. equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nume = parseInt(prompt("ES3. Inserisci un numero:"));

if (nume % 5 == 0) {
  console.log("ES3. divisibile per 5");
} else {
  console.log("ES3. NON divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numA = parseInt(prompt("ES4. Inserisci il primo numero:"));
const numB = parseInt(prompt("ES4. Inserisci il secondo:"));

if (numA == 8 || numB == 8) {
  console.log("ES4. Il valore di uno dei due numeri è 8");
} else if (numA + numB == 8 || numA - numB == 8) {
  console.log("ES4. la loro addizione/sottrazione fa 8");
} else {
  console.log("ES4. Nessuna delle risposte precedenti.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseFloat(
  prompt("ES5. Inserisci totale del carrello:")
);
const SHIPPING_FEE = 10;

if (totalShoppingCart < 50) {
  totalShoppingCart += SHIPPING_FEE;
}

console.log(`ES5. Il totale da pagare è: ${totalShoppingCart}`);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = parseFloat(
  prompt("ES6. BLACK FRIDAY!\nInserisci totale del carrello:")
);
const DISCOUNT = 0.2;

totalShoppingCart1 = totalShoppingCart1 - totalShoppingCart1 * DISCOUNT;

if (totalShoppingCart1 < 50) {
  totalShoppingCart1 += SHIPPING_FEE;
}

console.log(
  `ES6. BLACK FRIDAY! E' stato applicato un 20% di sconto sul tuo prodotto!\nOra il totale da pagare è: ${totalShoppingCart}`
);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 30;
const b = 10;
const c = 42;

if (a > b && a > c) {
  if (b > c) {
    console.log(`ES7. 1°=${a}, 2°=${b}, 3°=${c}`);
  } else {
    console.log(`ES7. 1°=${a}, 2°=${c}, 3°=${b}`);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(`ES7. 1°=${b}, 2°=${a}, 3°=${c}`);
  } else {
    console.log(`ES7. 1°=${b}, 2°=${c}, 3°=${a}`);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(`ES7. 1°=${c}, 2°=${a}, 3°=${b}`);
  } else {
    console.log(`ES7. 1°=${c}, 2°=${b}, 3°=${a}`);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = parseFloat(
  prompt("ES8. Inserisci un numero per verificare se il datatype è Number:")
);

if (typeof value == "number" && value !== NaN) {
  console.log(`ES8. ${value} è un numero.`);
} else {
  console.log(`ES8. ${value} NON è un numero.`);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = parseInt(
  prompt("ES9. Inserisci un numero per vedere se è pari o dispari:")
);

const isEven =
  number % 2 == 0 ? `ES9. ${number} è pari.` : `ES9. ${number} è dispari.`;

console.log(isEven);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("ES10. Meno di 5");
} else if (val < 10) {
  console.log("ES10. Meno di 10");
} else {
  console.log("ES10. Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log("ES11.", me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

console.log("ES12.", me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

console.log("ES13.", me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log("ES14.", arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[9] = 100;

console.log("ES15.", arr);
