class Character {
  static MAX_HEALTH = 100

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
  static ROLES = ["Fighter", "Healer", "Wizard"]

  constructor(name, role) {
    console.log(Adventurer.ROLES);
    super(name);
    if (Adventurer.ROLES.includes(role)) {
      this.role = role; // Adventurers have specialized roles.
    } else {
      // throw new "This role does not exist"
      let length = Adventurer.ROLES.length
      let randomNum = Math.floor(Math.random(length))
      this.role = Adventurer.ROLES[randomNum]
    }
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

const robin = new Adventurer("Robin");
robin.roll()
robin.roll()
robin.roll()
robin.roll()

robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
