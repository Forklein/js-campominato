console.log('Ciao Peppe!');

/* Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe.

Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero

Ogni volta che l'utente sceglie un numero che non è presente tra le bombe,
guadagna un punto e poi gli chiediamo un altro numero.

Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */

var fireNumber = [];
var userNumber = [];
var isIncluded = false;
var punteggio = 0;

while (fireNumber.length < 16) {
    var bombNumber = randomNumber(100, 1);
    if (!fireNumber.includes(bombNumber)) {
        fireNumber.push(bombNumber);
    }
}
console.log(fireNumber);

while (userNumber.length < 84 && isIncluded === false) {
    var choiceNumber = prompt('Inserisci un numero');
    if (!userNumber.includes(choiceNumber)) {
        userNumber.push(choiceNumber);
    } else {
        alert('Il numero è già stato inserito!');
    }
    if (fireNumber.includes(choiceNumber)) {
        isIncluded = true;
        alert('Hai perso!' + 'Il tuo punteggio è ');
    }
}
console.log(userNumber);



// Is in Array function 
function isinArray(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        } else {
            return false;
        }
    }
}
// Random Number function 
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}