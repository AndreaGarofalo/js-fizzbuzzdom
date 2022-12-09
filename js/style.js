console.log("JS OK");

//  Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
//  per i multipli di 3 stampi “Fizz” al posto del numero
//  per i multipli di 5 stampi “Buzz” al posto del numero.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// 1- prendo gli elementi dal dom
// 2- creo un loop for da 1 a 100
// 3- inserisco un if innestato per i multipli di 3
// 4- inserisco un if innestato per i multipli di 5
// 5- inserisco un if innestato per i multipli di 15
// 6- stampo il risultato

// 1- prendo gli elementi dal dom
const table = document.getElementById("table");
console.log(table);

// 2- creo un loop for da 1 a 100
for (i = 1; i <= 100; i++) {
  let number = i;
  // 5- inserisco un if innestato per i multipli di 15
  if (number % 15 === 0) {
    number = "FizzBuzz";
    // 3- inserisco un if innestato per i multipli di 3
  } else if (number % 3 === 0) {
    number = "Fizz";
    // 4- inserisco un if innestato per i multipli di 5
  } else if (number % 5 === 0) {
    number = "Buzz";
  }
  console.log(number);
  table.innerHTML += `<div><b>${number}</b></div>`;
}
