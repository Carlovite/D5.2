/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

//RISPOSTA:

// for (i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//RISPOSTA:

// console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

//RISPOSTA:

// console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// RISPOSTA:

// const petsNew = [];

// for (i = 0; i < pets.length; i++) {
//   if (i === pets.length - 1) {
//     petsNew[i] = pets[i - pets.length + 1];
//   } else petsNew[i] = pets[i + 1];
// }
// console.log(pets);
// console.log(petsNew);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//RISPOSTA:

// for (i = 0; i < cars.length; i++) {
//   cars[i].licensePlate = "B00058";
// }

// console.log(cars);
// console.log(cars[0].brand); //"ford"

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//RISPOSTA parte 1:

// const obj = {
//   brand: "Audi",
//   model: "boh",
//   color: "grey",
//   trims: ["GT", "brr"],
// };
// cars.push(obj);
// console.log(cars);

//RISPOSTA parte 2, METODO 1 CON delete: (mi rende gli elementi eliminati "undefined")

// for (i = 0; i < cars.length; i++) {
//   delete cars[i].trims[cars[i].trims.length - 1];
// }

// console.log(cars);

//RISPOSTA parte 2, METODO 2 CON pop:

// for (i = 0; i < cars.length; i++) {
//   cars[i].trims.pop();
// }
// console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

//RISPOSTA:

// const justTrims = [];
// for (i = 0; i < cars.length; i++) {
//   justTrims[i] = cars[i].trims[0];
// }
// console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

//RISPOSTA:

// for (i = 0; i < cars.length; i++) {
//   if (cars[i].color.slice(0, 1) === "b") {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

//RISPOSTA:

// let j = 0;
// while (numericArray[j] !== 32) {
//   console.log(numericArray[j]);
//   j++;
// }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]

*/

//RISPOSTA:

const charactersArray = ["g", "n", "u", "z", "d"];

const alfabeto = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const numbersArray = [];

const alfabetoArray = alfabeto.split(" ");
let i = 0;

while (i < alfabetoArray.length) {
  for (j = 0; j < charactersArray.length + 1; j++) {
    switch (alfabetoArray[i]) {
      case "g":
      case "n":
      case "u":
      case "z":
      case "d":
        numbersArray[j] = i + 1;
        i++;
        break;
      default:
        i++;
    }
  }
}

console.log(numbersArray);
//non stampa la posizione di n ...
