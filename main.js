
let numeriRandom = [];

for (i = 0; i < 5; i++) {

    let numeri = Math.floor(Math.random() * 100);

    numeriRandom.push(numeri);
}

console.log(numeriRandom);

alert("I numeri casuali da ricordare sono: " + numeriRandom);
