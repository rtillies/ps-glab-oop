class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
}

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role; // Adventurers have specialized roles.
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
  constructor(name) {
    super(name);
    this.role = "Companion"; // Adventurers have specialized roles.
    this.inventory = []
  }
}

const robin = new Character("Robin");
robin.roll()
robin.roll()
robin.roll()
robin.roll()

robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
