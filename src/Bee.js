// Use extend to inherit from Grub
class Bee extends Grub {
  // Set initial properties
  constructor() {
    // Use super to inherit methods and properties of Grub
    super()
    // Set unique properties
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
