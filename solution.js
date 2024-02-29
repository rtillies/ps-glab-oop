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

class Enemy extends Character {
  constructor(name) {
    super(name)
  }
  attack() {
    console.log(`${this.name} has launched an attack`);
  }
}

const hero = new Hero('Batman')
const enemy = new Enemy('Joker')

hero.addItem('sword')
enemy.addItem('potion')

console.log(hero);
console.log(enemy);
