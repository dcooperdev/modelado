const { China, England, Byzantines } = require('./class/Civilization');

(() => {
    const china = new China();
    const byzantines = new Byzantines();
    china.newArmy()
    china.trainingSoldier(1, 0);
    china.trainingSoldier(0, 1);
    china.upgradeSoldier(0, 1);
    byzantines.trainingSoldier(0, 9);
    byzantines.trainingSoldier(0, 1);
    console.log(china.attack(byzantines.getArmy(0), china.getArmy(1)));
    console.log(china.attack(china.getArmy(1), china.getArmy(0)));
})();