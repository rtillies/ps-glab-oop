class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 20;
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
  attack(target) {
    target.takeDamage(this.power)
  }
  takeDamage(amount) {
    this.health -= amount
    console.log(`${this.name} lost ${amount} health`);
    console.log(`${this.name} has ${this.health} health remaining`);
    if (this.health <= 0) {
      this.die()
    }
  }
  die() {
    console.log(`** ${this.name} is dead **`);
  }
}

class Hero extends Character {
  constructor(name) {
    super(name)
  }
  dodge() {
    console.log(`${this.name} has dodged an enemy attack`);
  }
  heal(amount) {
    console.log(`${this.name} has healed by ${amount}`);
    this.health += amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Enemy extends Character {
  constructor(name) {
    super(name)
  }
  heatBlast(target) {
    console.log(`${this.name} attacked with heat blast`);
    target.takeDamage(45)
  }
  haymaker(target) {
    const damage = Math.floor(Math.random() * 100);
    console.log(`${this.name} attacked with haymaker with ${damage} damage`);
    target.takeDamage(damage)
  }
}

const hero = new Hero('Batman')
const enemy = new Enemy('Joker')

hero.addItem('sword')
enemy.addItem('potion')

enemy.haymaker(hero)
hero.heal(10)
enemy.haymaker(hero)
hero.heal(10)
enemy.haymaker(hero)
hero.heal(10)

console.log(hero);
console.log(enemy);
