console.log("ciao simon")

NUMERI = 5


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



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function onClick(){
    console.log("mi hai cliccato")
}

simonNumbers = []
userNumbers = []


while ( simonNumbers.length < NUMERI){
    let randomNumber = getRandomInt(1,99)
    console.log(randomNumber)

    if (!simonNumbers.includes(randomNumber)){
        simonNumbers.push(randomNumber)
    } 

}

alert(simonNumbers)
console.log(simonNumbers)

// ----------- funzione dell'alert per inserire i numeri con delay

setTimeout (myFunction, 1000);

function myFunction(){

    for (let i = 0; i < NUMERI; i++ ){
        userNumber = prompt("scrivi uno dei numeri che hai memorizzato");
        console.log(userNumber);
    }


}

//----------

  