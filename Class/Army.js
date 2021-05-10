const { Soldier } = require('./Soldier');
const { Pikeman, Archer, Knigt } = require('./Types');

class Army {
    armies = [];
    constructor(units) {
        this.defaultArmy = { ...units };
        this.newArmy(this.defaultArmy);
    }
    getArmy(army) {
        return this.armies[army];
    }
    getArmies() {
        return this.armies;
    }
    getArmyHitpoints(army) {
        return army.soldiers.map(soldier => soldier.type.hitPoints).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    trainingSoldier(army, soldier) {
        if (typeof army === 'number' && typeof soldier === 'number') {
            const __army = this.armies[army];
            __army.gold = __army.soldiers[soldier].training(__army.gold);
        } else {
            return 'Data types invalid!'
        }
    }
    upgradeSoldier(army, soldier) {
        if (typeof army === 'number' && typeof soldier === 'number') {
            const __army = this.armies[army];
            __army.gold = __army.soldiers[soldier].upgrade(__army.gold);
        } else {
            return 'Data types invalid!'
        }
    }
    
    addGold(army, gold) {
        army.gold = army.gold + parseInt(gold, 10);
    }
    newArmy(units) {
        const newArmy = {
            soldiers: Array(
                ...Array(units.pikeman).fill(0).map(() => new Soldier(new Pikeman())), 
                ...Array(units.archers).fill(0).map(() => new Soldier(new Archer())),
                ...Array(units.knigts).fill(0).map(() => new Soldier(new Knigt()))),
            gold: 1000,
        }
        this.armies.push(newArmy);
    }
    printArmies() {
        this.armies.forEach(army => {
            console.log({ army: army.soldiers, gold: army.gold });
        });
    }
    killSoldiers(army, soldiers) {
        const [first, second] = army.sort((x, y) => y.type.hitPoints - x.type.hitPoints).slice(0, soldiers);

        const firstId = army.indexOf(first);
        if (firstId !== -1) {
            army.splice(firstId,1);
        }

        const secondId = army.indexOf(second);
        if (secondId !== -1) {
            army.splice(secondId, 1);
        }
    }
    attack(attackerArmy, otherArmy) {
        const result = this.getArmyHitpoints(attackerArmy) - this.getArmyHitpoints(otherArmy);
        if (result > 0) {
            this.killSoldiers(otherArmy.soldiers, 2);
            this.addGold(attackerArmy, 100);
            return 'Attacker army wins!'
        } else if (result === 0) {
            this.killSoldiers(attackerArmy.soldiers, 1);
            this.killSoldiers(otherArmy.soldiers, 1);
            return 'Battle end in tie!';
        }
        this.killSoldiers(attackerArmy.soldiers, 2);
        this.addGold(otherArmy, 100);
        return 'Defender army wins!';
    }
}

module.exports = {
    Army
}
