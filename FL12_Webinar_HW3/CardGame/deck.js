class Deck {
    constructor(cardClass, suits, ranks) { //takes class Card, suits and ranks for creating specific deck of cards
        this.cards = [];
        this._createDeck(cardClass, suits, ranks);
        this._count = this.cards.length;
    }

    _createDeck(cardClass, suits, ranks) {
        let i = 1;
        for(let suit of suits) {
            for(let rank of ranks) {
                this.cards.push(new cardClass(suit, rank));
            }
        }
        this.shuffle(this.cards);
    }

    get count() {
        return this.cards.length;
    }

    set count(number) {
        throw new Error('Count of remain cards is only read property'); 
    }

    shuffle(array) {
        let currentIndex = array.length, temp, randomIndex;

        while (currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temp = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temp;
        }
        return array;
    }

    draw(numberOfCards) {
        return this.cards.splice(this.cards.length - numberOfCards);
    }
}

