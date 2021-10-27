//Array vuoto in cui finiranno i numeri casuali
let numeriRandom = [];

//For che genera fino a 5 numeri casuali
for (i = 0; i < 5; i++) {

    //Assegna ad una costante i numeri casuali
    let numeri = Math.floor(Math.random() * 100);

    //Inseriche nell'array vuoto i numeri casuali
    numeriRandom.push(numeri);


}

/* console.log(numeriRandom); */

//Messaggio che leggerà l'utente
alert("I numeri casuali da ricordare sono: " + numeriRandom + ". Dopo aver premuto ok avrai 30 secondi per far mente locale ed inserire i numeri");






//Funzione che ritarda la possibilità di rispondere di 30 secondi
setTimeout(time, 30000)

//Funzione che dà la possibilità di rispondere
function time() {

    //Array vuoto in cui finiranno i numeri inseriti dall'utente
    const numeriScelti = [];

    //For che chiederà per 5 volte di inserire un numero
    for (i = 0; i < 5; i++) {

        //Aggiunge ad una costante il numero scelto dall'utente
        let numeroScelto = Number(prompt("Inserisci i numeri"));

        //Inserice nell'array vuoto i numeri scelti dall'utente
        numeriScelti.push(numeroScelto)
    }

    /* console.log(numeriScelti); */

    //Array vuoto in cui finiranno i numeri esatti scelti dall'utente
    const numeriEsatti = []

    //For che fa la verifica dei numeri scelti dall'utente
    for (i = 0; i < numeriScelti.length; i++) {

        //array che contiene il numero giusto
        const numeroEsatto = numeriScelti[i]

        //If che verifica i numeri 
        if (numeriRandom.includes(numeroEsatto)) {

            //Aggiunge il numero azzeccato all'array vuoto
            numeriEsatti.push(numeroEsatto)
        }
    }



    //Alert che fa mostrare quanti e quali numeri l'utente si è ricordato
    alert("I numeri che sei riuscito a ricordare sono: " + numeriEsatti);

}
