
let numeriRandom = [];

for (i = 0; i < 5; i++) {

    let numeri = Math.floor(Math.random() * 100);

    numeriRandom.push(numeri);


}

console.log(numeriRandom);

alert("I numeri casuali da ricordare sono: " + numeriRandom);

const risposte = [];

for (i = 0; i < 5; i++) {

    let risposta = Number(prompt("Inserisci i numeri"));

    risposte.push(risposta)
}

console.log(risposte);

const pointsScored = []

for (i = 0; i < risposte.length; i++) {

    const rispostaa = risposte[i]

    if (numeriRandom.includes(rispostaa)) {
        pointsScored.push(rispostaa)
    }
}



console.log("I numeri che ti sei ricordati sono: " + pointsScored);