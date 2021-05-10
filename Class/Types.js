class Pikeman {
    constructor() {
        this.hitPoints = 5;
        this.trainingHitpoints = 3;
        this.trainingCost = 10;
        this.upgradeCost = 30;
    }
    upgrade() {
        return new Archer();
    }
}
class Archer {
    constructor() {
        this.hitPoints = 10;
        this.trainingHitpoints = 7;
        this.trainingCost = 20;
        this.upgradeCost = 40;
    }
    upgrade() {
        return new Knigt();
    }
}
class Knigt {
    constructor() {
        this.hitPoints = 20;
        this.trainingHitpoints = 10;
        this.trainingCost = 30;
    }
}

module.exports = {
    Pikeman,
    Archer,
    Knigt
}
