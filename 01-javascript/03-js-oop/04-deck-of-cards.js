class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.numeric_value = Math.floor(Math.random() * (13 - 1) + 1);
  }

  show() {
    console.log("Card info: Suit - " + this.suit + "\n Values - " + this.value + "\n  Numeric value - " + this.numeric_value);
  }
}

// card = new Card();
// console.log(card.show());

class Deck {
  constructor() {
    this.deck = [];
    this.suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
    this.values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  }


  createDeck() {
    for (let suit in this.suits) {
      for (let value in this.values) {
        this.deck.push(new Card(this.suits[suit], this.values[value]));
      }
    }
    return this.deck.length;
  }


  shuffle() {
    var m = this.deck.length, t, i;

    // while there remain elements to shuffle...
    while (m) {
      // pick a remaining element ...
      i = Math.floor(Math.random() * m--);

      // and swap it with the current element
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }

    return this;
  }

  reset() {
    this.deck = [];
    const suits = this.suits;
    const values = this.values;

    for(const suit in suits) {
      for(const value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  draw(deck) {
    this.hand.push(deck.deal());
    return this;
  }

  discard() {
    this.hand.pop() 
      return this;
    
  } 
}

deck = new Deck();
deck.reset().shuffle();
console.log(deck);

const player = new Player("Albiona");
player.draw(deck).draw(deck);
console.log(player);
console.log(deck);