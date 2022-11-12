const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Player{
    constructor(name, hand, score){
        this.name = name;
        this.hand = []
        this.score = []
    }
}

class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck{ 
    constructor(){
        this.cards = [];
    }

    createDeck(){
        for(let i = 0; i < suits.length; i++){
            for(let a = 0; a < ranks.length; a++){
                this.cards.push(new Card(suits[i], ranks[a], values[a]));
            }
        }
    }

    shuffleCards() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            let a = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[a];
            this.cards[a] = temp;
        }
     }
}

class Game{
    constructor(){
        this.deckOfCards = [];
        this.players = []
    }
    readySetGo(playerOne, playerTwo) {
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleCards();
        this.players[0].hand = newDeck.cards.slice(0, 26);
        this.players[1].hand = newDeck.cards.slice(26, 52);

// compare each card from player 1 and player 2 to determine who has the higher card and give a point to that player
let scoreOne = 0;
let scoreTwo = 0;    
    for(let i = 0; i < 26; i++){
        if(this.players[0].hand[i].value > this.players[1].hand[i].value){
            console.log(`${playerOne} won this draw!`);
            scoreOne++;
        } else if(this.players[0].hand[i].value < this.players[1].hand[i].value) {
            console.log(`${playerTwo} won this draw!`);
            scoreTwo++;
        } else {
            console.log(`${playerOne} and ${playerTwo} tied.`);
        }
        this.players[0].score.push(scoreOne)
        this.players[1].score.push(scoreTwo) 
        }
        if(scoreOne > scoreTwo){
            console.log(`${playerOne} Wins! ${scoreOne} to ${scoreTwo}`);
        }else if(scoreOne < scoreTwo){
            console.log(`${playerTwo} Wins! ${scoreTwo} to ${scoreOne}`);
        }else{
            console.log(`${playerOne} and ${playerTwo} have tied ${scoreOne} to ${scoreTwo}`);
        }
    }
}

let newGame = new Game();
newGame.readySetGo("Isaac", "Nathan")

console.log(newGame.players);

const addNumber = function(a, b){
    const sum = a + b
    return sum;
}

console.log(addNumber(1, 2));

module.exports = {addNumber};