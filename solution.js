class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  addItem(item) {
    this.inventory.push(item)
  }
  addItems(items) {
    items.forEach((item) => {
      this.addItem(item)
    })
  }
}

class Hero extends Character {
  constructor(name) {
    super(name)
  }
  dodge() {
    console.log(`${this.name} has dodged an enemy attack`);
  }
}

const hero = new Hero('Batman')
console.log(hero);

const rich = new Character('Richard')
// rich.inventory = ['sword', 'potion', 'axe', 'shield']
rich.addItem('sword')
rich.addItem('shield')
rich.addItem('potion')

rich.companion = new Character('Bella')
console.log(rich);

// const adventurer = {
//   name: 'John',
//   health: 10,
//   inventory: ['sword', 'potion', 'axe', 'shield', 'bow'],
//   companion: {
//     name: 'Leo',
//     type: 'Cat',
//     companion: {
//       name: 'Frank',
//       type: 'Flea',
//       inventory: ['small hat', 'sunglasses']
//     }
//   },
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   }
// }

// console.log("Loop through inventory");
// for (let i = 0; i < adventurer.inventory.length; i++) {
//   console.log(adventurer.inventory[i]);
// }

// console.log("Companion name:", adventurer.companion.name);
// console.log("Companion's companion's second item:", adventurer.companion.companion.inventory[1]);

// console.log("Full Object");
// console.log(adventurer);