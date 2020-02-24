class Player {
    constructor(name) {
        this._wins = 0;
        this.deck = [];
        this.name = name;
    }

    static Play(playerOne, playerTwo) {
        if(!playerTwo.deck.count && !playerOne.deck.count) {
            throw new Error("Someone Player doesn`t have cards. Add cards to Players");
        } 

        playerOne.resetScore();
        playerTwo.resetScore();
    
        for(let i = playerOne.deck.count - 1; i >= 0; i--) {
            if(playerOne.deck.cards[i].rank > playerTwo.deck.cards[i].rank) {
                playerOne.getPoint();
            } else if(playerOne.deck.cards[i].rank < playerTwo.deck.cards[i].rank) {
                playerTwo.getPoint();
            }
            
            playerTwo.deck.draw(1);
            playerOne.deck.draw(1);
        }

        if(playerOne.wins > playerTwo.wins) {
            return `${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`;
        } else if(playerOne.wins < playerTwo.wins) {
            return `${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`;
        } else {
            return `Draw! Friendship Won!`;
        }
    }

    get wins() {
        return this._wins;
    }

    set wins(number) {
        throw new Error("you can not overwrite this property");
    }

    getPoint() {
        this._wins++;
    }

    resetScore() {
        this._wins = 0;
    }

    receiveDeck(deckOfCards) {
        this.deck = deckOfCards;
    }
}

let deck1 = new Deck(Card,  ['hearts', 'diamonds', 'clubs', 'spades'], [1,2,3,4,5,6,7,8,9,10,11,12,13]);
let deck2 = new Deck(Card,  ['hearts', 'diamonds', 'clubs', 'spades'], [1,2,3,4,5,6,7,8,9,10,11,12,13]);

let player1 = new Player('Nazar');
let player2 = new Player('Oksana');

player1.receiveDeck(deck1);
player2.receiveDeck(deck2)

console.log(Player.Play(player1, player2));

//console.log(Player.Play(player1, player2)); // error Players doesn`t have cards,
// so we need to create new deck and pass it to player

let deck3 = new Deck(Card,  ['hearts', 'diamonds', 'clubs', 'spades'], [1,2,3,4,5,6,7,8,9,10,11,12,13]); 
let deck4 = new Deck(Card,  ['hearts', 'diamonds', 'clubs', 'spades'], [1,2,3,4,5,6,7,8,9,10,11,12,13]);

player1.receiveDeck(deck3);
player2.receiveDeck(deck4);

console.log(Player.Play(player1, player2));

