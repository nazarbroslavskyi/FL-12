class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this._isFaseCard = (rank === 1 || rank > 10) ? true : false;
    }
    
    get isFaseCard() { 
        return this._isFaseCard; 
    }
    set isFaseCard(boolean) {
        throw new Error("you can not overwrite this property"); 
    }

    toString() {
        let faceCards = {
            1: 'Ace',
            11: 'Jack',
            12: 'Queen',
            13: 'King',
        }

        return `${(this.rank in faceCards) ? faceCards[this.rank]:  this.rank} of ${this.suit}`;
    }

}