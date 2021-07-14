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
Quando la partita termina, comunichiamo all'utente il suo punteggio.
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//! Set variable
const fireNumber = [];
const userNumber = [];
let isIncluded = false;
let punteggio = 0;
let max;
let mode;

//! Start with click image
let imgStart = document.getElementById('img-game');
imgStart.addEventListener('click', start);

function start() {
    do {
        mode = prompt('Inserisci la difficoltà !', 'Hard-' + 'Medium-' + 'Easy');
    } while (!mode || mode.trim() === '');

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
        const bombNumber = randomNumber(max, 1);
        if (!fireNumber.includes(bombNumber)) {
            fireNumber.push(bombNumber);
        }
    }
    console.log(fireNumber);
    console.log(userNumber);

    while (userNumber.length < (max - 16) && isIncluded === false) {
        let choiceNumber;
        do {
            choiceNumber = parseInt(prompt('Inserisci un numero'));
        } while (!choiceNumber || isNaN(choiceNumber) || choiceNumber > max);
        const totalScore = max - 16;
        if (!userNumber.includes(choiceNumber)) {
            userNumber.push(choiceNumber);
            console.log(userNumber);
        } else {
            alert('Il numero è già stato inserito!');
        }
        if (fireNumber.includes(choiceNumber)) {
            isIncluded = true;
            const resultDisplay = document.getElementById('result');
            resultDisplay.innerHTML = '<strong>' + 'Hai perso! ' + 'Il tuo punteggio è ' + punteggio + ' su ' + totalScore + '</strong>';
        } else {
            punteggio++;
        }
    }
    console.log(userNumber);
}

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