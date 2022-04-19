// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
    this.strength = strength
  }
  attack(){
    return this.strength
  };
  receiveDamage(damage){
   return this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health, strength) {
    super(health, strength);
    this.name = name
    
  }
  receiveDamage(damage){
    this.health = this.attack() - damage
    if (this.health>0){
      return `${this.name} has received ${damage} points of damage"`
    } else {
      return `${this.name} has died in act of combat"`
    }
   }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength); 
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking){
    this.vikingArmy.push(viking)
  };
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let randomNumber1 = Math.floor(Math.random()*this.saxonArmy.length);
    let randomNumber2 = Math.floor(Math.random()*this.vikingArmy.length);
    let saxonDamageResult = this.saxonArmy[randomNumber1].receiveDamage(this.vikingArmy[randomNumber2].strength);
    this.saxonArmy.forEach(saxon=>{
      if (saxon.health<1){
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1)
      }
    });
    return `${saxonDamageResult}, strength of Viking ${this.vikingArmy[randomNumber2].name} ${this.vikingArmy[randomNumber2].strength} `
  };

  saxonAttack(){
  let randomNumber1 = Math.floor(Math.random()*this.vikingArmy.length);
  let randomNumber2 = Math.floor(Math.random()*this.saxonArmy.length);
  let vikingDamageResult = this.vikingArmy[randomNumber1].receiveDamage(this.saxonArmy[randomNumber2].strength);
  this.vikingArmy.forEach(viking=>{
    if (viking.health<1){
      this.vikingArmy.splice(this.vikingArmy.indexOf(saxon),1)
    }
  });
  return `${vikingDamageResult}, strength of Saxon ${this.saxonArmy[randomNumber2].strength} `
}
};
const viking = new Viking("Odin", 400, 400)
const saxon = new Saxon (400, 200)

const war = new War
war.addViking(viking);
war.addSaxon(saxon)

console.log(war.vikingAttack())



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
