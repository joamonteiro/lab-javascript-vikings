// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(vikDamage) {
    this.health -= vikDamage;
    if(this.health > 0){
      return `${this.name} has received ${vikDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(saxDamage) {
    this.health -= saxDamage;
    if(this.health > 0){
      return `A Saxon has received ${saxDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    let randSax = Math.floor(Math.random() * this.saxonArmy.length);
    let randVik = Math.floor(Math.random() * this.vikingArmy.length);
    let saxVictim = this.saxonArmy[randSax];
    let vikAttacker = this.vikingArmy[randVik];
    let postVikDamage = saxVictim.receiveDamage(vikAttacker.strength);
    if(saxVictim.health <= 0){
      this.saxonArmy.splice(randSax, 1);
      } 
      return postVikDamage;
  }

  saxonAttack(){
    let randSax = Math.floor(Math.random() * this.saxonArmy.length);
    let randVik = Math.floor(Math.random() * this.vikingArmy.length);
    let vikVictim = this.vikingArmy[randVik];
    let saxAttacker = this.saxonArmy[randSax];
    let postSaxDamage = vikVictim.receiveDamage(saxAttacker.strength);
    if(vikVictim.health <= 0){
      this.vikingArmy.splice(randVik, 1);
    } 
    return postSaxDamage;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
