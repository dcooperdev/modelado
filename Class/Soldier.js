class Soldier {
    constructor(type) {
        this.type = type;
        this.type.upgradeCost = this.type.upgradeCost ? this.type.upgradeCost : null;
    }
    training(gold) {
        this.type.hitPoints = this.type.hitPoints + this.type.trainingHitpoints;
        return gold - this.type.trainingCost;
    }
    upgrade(gold) {
        if (this.type.upgradeCost) {
            this.type = this.type.upgrade();
            return gold - this.type.upgradeCost;
        }
        return gold;
    }
}

module.exports = {
    Soldier
}
