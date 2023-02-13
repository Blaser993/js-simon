console.log("ciao simon")


const S = 1 //inserisci quì il tempo di attesa espresso in secondi
const DELAY = 1000 * S



// Descrizione:
// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log

// BONUS
// aggiungete una interfaccia per il gioco:
// almeno un pulsante play per poter ripetere il gioco al click sul pulsante
// e almeno gestite la stampa del risultato in pagina

// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.


const simonNumbers = []
const userNumbers = []
const matchedNumbers = []


getRandomNumbers(5)

alert(simonNumbers)
console.log(simonNumbers)


setTimeout (simonSays, DELAY);



// FUNZIONI

function simonSays(){

    askNumbers();
    
    compareNumbers ();
}

function getRandomNumbers(num) {
    while (simonNumbers.length < num) {
        let randomNumber = getRandomInt(1, 99)
        //console.log(randomNumber)
        if (!simonNumbers.includes(randomNumber)) {
            simonNumbers.push(randomNumber)
        }

    }
    return NUMERI = num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function onClick(){
    console.log("mi hai cliccato")
}

function compareNumbers(){

    console.log(simonNumbers, userNumbers)

    for (let i = 0; i < NUMERI; i++){

        let insertNumber = userNumbers[i]
        // console.log(insertNumber)
    
        if(simonNumbers.includes(insertNumber)){

            console.log(insertNumber)
            matchedNumbers.push(insertNumber)
            
        }
    }

    console.log("numeri indovinati: ", matchedNumbers.length,".", " Ecco la lista dei numeri che hai indovinato: ", [...matchedNumbers])

}

function askNumbers() {
    for (let i = 0; i < NUMERI; i++) {
        insertNumber = parseInt(prompt("scrivi uno dei numeri che hai memorizzato"));
        console.log("hai inserito: ", insertNumber);
        userNumbers.push(insertNumber);
    }
}


  