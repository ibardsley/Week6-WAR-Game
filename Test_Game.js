const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

let deck = []

// createDeck(){
    for(let i = 0; i < suits.length; i++){
        for(let a = 0; a < values.length; a++){
            let card = {Value: values[a], Suit: suits[i]}
            deck.push(card);
        }
    }
// }

// shuffleCards() {
    for(let i = deck.length - 1; i > 0; i--) {
        let a = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[a];
        deck[a] = temp;
    }
    console.log('The first five cards are: ');
    for(let i = 0; i < 5; i++){
        console.log(`${deck[i].Value} of ${deck[i].Suit}`);
    }
// }