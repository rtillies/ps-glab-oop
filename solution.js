
const adventurer = {
  name: 'John',
  health: 10,
  inventory: ['sword', 'potion', 'axe', 'shield', 'bow'],
  companion: {
    name: 'Leo',
    type: 'Cat',
    companion: {
      name: 'Frank',
      type: 'Flea',
      inventory: ['small hat', 'sunglasses']
    }
  },
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

console.log("Loop through inventory");
for (let i = 0; i < adventurer.inventory.length; i++) {
  console.log(adventurer.inventory[i]);
}

console.log("Companion name:", adventurer.companion.name);
console.log("Companion's companion's second item:", adventurer.companion.companion.inventory[1]);

console.log("Full Object");
console.log(adventurer);