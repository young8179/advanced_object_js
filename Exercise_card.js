//Card Constructor
function Card(face, suit){
    this.face = face,
    this.suit = suit
}

// const card_1 = new Card(5, "diamond");
// console.log(card_1);

//getImageUrl()
Card.prototype.getImageUrl = function(){
    return `images/${this.point}_of_${this.suit}.png`
}

//Hand constructor



function Hand(){
    this.cards = []
}
Hand.prototype.addCard = function(newCard) {
    this.cards.push(newCard)
}
Hand.prototype.getPoints = function(){
    points = 0
    this.cards.forEach(element => {
        if (element.face === 'ace') {
            points += 1
        } else if (element.face === 'jack' || element.face === 'queen' || element.face === 'king') {
            points += 10
        } else {
            points += element.face
        }
    });
    this.cards.forEach(element => {
        if (element.face === 'ace' && points < 12) {
            points += 10
        }
    });
    return points;
}

const cardFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, "ace", "jack", "king", "queen"]
const cardSuit = ["clubs", "diamonds", "hearts", "spades"]




function Deck(){
    this.deck = new Array()
    for (let i = 0; i < cardFace.length; i++) {
        for (let j = 0; j < cardSuit.length; j++) {
            let deckCard = new Card(cardFace[i],cardSuit[j])
            this.deck.push(deckCard)
        }
    }
       
    
}
console.log("======deck========")
const myDeck = new Deck()
console.log(myDeck)
console.log("==================")

Deck.prototype.draw = function(){
    //remove and return a card from the deck==================
    // let deckLength = this.deck.length
    // let randomIndex = Math.floor(Math.random() * deckLength);
    // const drawCard = this.deck.splice(randomIndex, 1)
    // return drawCard
    return this.deck.pop()
    
}


Deck.prototype.shuffle = function(){
    //shuffle the deck
    for (let i = 0; i < this.deck.length;  i++) {
        const randIndex = Math.floor(Math.random() * i);
        const temporary = this.deck[i]
        this.deck[i] = this.deck[randIndex];
        this.deck[randIndex] = temporary;
      }

}

Deck.prototype.numCardsLeft = function(){
    //return the total number of cards left in the deck
    return this.deck.length

}



// const myHand = new Hand();


// myHand.addCard(new Card("king", "diamonds"))
// myHand.addCard(new Card("queen", "spades"))
// myHand.addCard(new Card("ace", "diamonds"))
// myHand.addCard(new Card("ace", "clubs"))

// console.log(myHand)

// console.log(myHand.getPoints())




const mainDeck = new Deck();
mainDeck.shuffle()
// console.log(mainDeck)
const playerHand = new Hand();
const dealerHand = new Hand();
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
console.log(`Player has ${playerHand.getPoints()}`);
console.log(`Dealer has ${dealerHand.getPoints()}`);
console.log(`There are ${mainDeck.numCardsLeft()} cards left`)





