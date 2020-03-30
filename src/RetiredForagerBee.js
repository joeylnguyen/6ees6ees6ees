class RetiredForagerBee extends ForagerBee {
// Set constructor
constructor() {
  // Use super to inherit properties and methods
  super();
  // Set instance properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
// Add forage method
forage = () => {return "I am too old, let me play cards instead"};
// Add gamble method
gamble = (treasure) => {this.treasureChest.push(treasure)};
};
