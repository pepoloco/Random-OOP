class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Atack with " + this.weapon;
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    const att = super.attack();
    return ` ${att} I am the ${this.name} of ${this.type}, now bow down to me!`;
  }
}
// create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
const victoria = new Queen("Victoria", "army", "hearts");

console.log(victoria.attack());
// will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
