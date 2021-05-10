const { Army } = require('./Army');

class China extends Army{
    constructor() {
        super({ pikeman: 2, archers: 25, knigts: 2 });
    }
    newArmy() {
        super.newArmy(this.defaultArmy)
    }
}
class England extends Army{
    constructor() {
        super({ pikeman: 10, archers: 10, knigts: 10 });
    }
    newArmy() {
        super.newArmy(this.defaultArmy)
    }
}
class Byzantines extends Army{
    constructor() {
        super({ pikeman: 5, archers: 8, knigts: 15 });
    }
    newArmy() {
        super.newArmy(this.defaultArmy)
    }
}

module.exports= {
    China,
    England,
    Byzantines
}
