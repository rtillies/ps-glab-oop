class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    console.log(Adventurer.ROLES);
    super(name);
    if (Adventurer.ROLES.includes(role)) {
      this.role = role; // Adventurers have specialized roles.
    } else {
      // throw new "This role does not exist"
      let length = Adventurer.ROLES.length;
      let randomNum = Math.floor(Math.random(length));
      this.role = Adventurer.ROLES[randomNum];
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  duel(adventurer) {
    while(this.health > 50 && adventurer.health > 50) {
      const myRoll = this.roll()
      const yourRoll = adventurer.roll()

      if (myRoll > yourRoll) {
        adventurer.health--
      } else if (myRoll < yourRoll) {
        this.health--
      }
    }

    const winner = this.health > 50 ? this.name : adventurer.name
    console.log(`${winner} WINS!`);
  }
}

class Companion extends Character {
  constructor(name) {
    super(name);
    this.role = "Companion"; // Adventurers have specialized roles.
    this.inventory = [];
  }
}

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}


// Main Program
const healers = new AdventurerFactory("Healer");
const robin2 = healers.generate("Robin");

const robin = new Adventurer("Robin");
robin.roll();

robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
