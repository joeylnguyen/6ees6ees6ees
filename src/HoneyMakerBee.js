class HoneyMakerBee extends Bee {
  constructor() {
    // Use super to inherit properties
    super()
    // Set instance properties
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  };

  // Add makeHoney method
  makeHoney = () => {this.honeyPot++};
  // Add giveHoney method
  giveHoney = () => {this.honeyPot--};
};
