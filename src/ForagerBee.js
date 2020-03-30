class ForagerBee extends Bee {
    // Use constructor to create properties
    constructor() {
      super();
      // Set instance properties
      this.age = 10;
      this.job = 'find pollen';
      this.canFly = true;
      this.treasureChest = [];
    }
    forage = (treasure) => {this.treasureChest.push(treasure)};
};
