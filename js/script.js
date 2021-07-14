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
var max;
var mode = prompt('Inserisci la difficoltà !', 'Hard-' + 'Medium-' + 'Easy');

while (!mode || mode.trim() === '') {
    mode = prompt('Inserisci la difficoltà !', 'Hard-' + 'Medium-' + 'Easy');
}

switch (mode.toLowerCase()) {
    case 'hard':
        max = 50;
        break;
    case 'medium':
        max = 80;
        break;
    case 'easy':
        max = 100;
        break;
    default:
        max = 80;
        break;
}

console.log(max)

while (fireNumber.length < 16) {
    var bombNumber = randomNumber(max, 1);
    if (!fireNumber.includes(bombNumber)) {
        fireNumber.push(bombNumber);
    }
}
console.log(fireNumber);
console.log(userNumber);

while (userNumber.length < (max - 16) && isIncluded === false) {
    var choiceNumber = parseInt(prompt('Inserisci un numero'));
    while (!choiceNumber || isNaN(choiceNumber)) {
        choiceNumber = parseInt(prompt('Inserisci un numero'));
    }
    var totalScore = max - 16;
    if (!userNumber.includes(choiceNumber)) {
        userNumber.push(choiceNumber);
        console.log(userNumber);
    } else {
        alert('Il numero è già stato inserito!');
    }
    if (fireNumber.includes(choiceNumber)) {
        isIncluded = true;
        alert('Hai perso! ' + 'Il tuo punteggio è ' + punteggio + ' su ' + totalScore);
    } else {
        punteggio++;
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