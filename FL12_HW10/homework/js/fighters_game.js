const TRUE = true;
const range = 101;
let fightProp1 = {
    name: 'Maximus',
    damage: 20,
    hp: 100,
    agility: 15,
    strength: 20
}

let fightProp2 = {
    name: 'Commodus',
    damage: 25,
    hp: 90,
    agility: 20,
    strength: 25
}

class Fighter {
    constructor(fightProp) {
        this._name = fightProp.name;
        this._damage = fightProp.damage;
        this._hp = fightProp.hp;
        this._agility = fightProp.agility;
        this._totalHp = fightProp.hp;
        this._amntWins = 0;
        this._amntLoss = 0;
        this._strength = fightProp.strength; 
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._hp;
    }

    getStrength() {
        return this._strength;
    }

    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._amntWins}, Losses: ${this._amntLoss}`)
    }

    heal(amntOfHealth) {
        if(amntOfHealth > 0) {
            if(amntOfHealth + this._hp > this._totalHp) {
                this._hp = this._totalHp;
            } else {
                this._hp += amntOfHealth;
            }
        }  
    }

    dealDamage(amntOfHealth) {
        if(amntOfHealth > 0) {
            if(this._hp - amntOfHealth < 0) {
                this._hp = 0;
            } else {
                this._hp -= amntOfHealth;
            }
        }
    }

    addWin() {
        this._amntWins++;
        console.log(`${this.getName()} has won!`);
    }

    addLoss() {
        this._amntLoss++;
    }

    attack(instOfFighter) {
        const persentOfSuccessAttack = Math.floor(Math.random() * range);
        if(persentOfSuccessAttack > instOfFighter.getAgility() + instOfFighter.getStrength()) {
            instOfFighter.dealDamage(this._damage);
            console.log(`${this._name} make ${this._damage} damage to ${instOfFighter.getName()}`);
        } else {
            console.log(`${this._name} attack missed`);
        }

    }

}

let fighterOne = new Fighter(fightProp1);
let fighterTwo = new Fighter(fightProp2);

function battle(fighterOne, fighterTwo) {
    if(fighterOne.getHealth() === 0) {
        console.log(`${fighterOne.getName()} is dead and can\`t  fight`);
        return;
    }
    if(fighterTwo.getHealth() === 0) {
        console.log(`${fighterTwo.getName()} is dead and can\`t  fight`);
        return;
    }
    while(TRUE) {
        if(fighterOne.getHealth() !== 0) {
            fighterOne.attack(fighterTwo);
        } else {
            fighterTwo.addWin();
            fighterOne.addLoss();
            break;
        }
        if(fighterTwo.getHealth() !== 0) {
            fighterTwo.attack(fighterOne);
        } else {
            fighterOne.addWin();
            fighterTwo.addLoss();
            break;
        }

    }
}

battle(fighterOne, fighterTwo);
battle(fighterOne, fighterTwo);
