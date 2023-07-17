class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    // this.method = this.method.bind(this);
  }

  attack(target) {
    if (Math.random()< this.accuracy) {
        console.log('attack successful');
        target.hull -= this.firepower; // target.hull = target.hull - this.firepower, this is to keep track of how much damage they have taken from this attack. 
    }else{
        console.log('you have missed');
    }
  }

}
class PlayerShip extends Ship{
    constructor(){
        const hull = 20;
        const firepower = -5;
        const accuracy = .7;
        super(hull, firepower, accuracy);
    }
}

class AlienShip extends Ship{
    constructor(){
        const hull = getRandomNumber(3,6);
        const firepower = getRandomNumber(2, 4);
        const accuracy = getRandomFloat(0.6, 0.8);
        super(hull, firepower, accuracy);
    }
}

// - alien ship value random generator functions ----
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) +1) + min;
    // (max - min) +1 makes the range includes both numbers on the range and +min add each number by whatever te min value is, so it's not starting at 0. it shifts the range
}

//same thing but we can keep the decimals this time
function getRandomFloat(min, max) {
    return Math.random() * (max -min) + min;
}


//create an array for all the alien ships
const alienShipArr = ['u', 'v', 'w', 'x', 'y', 'z'];

//create new instances for each ship using a for loop
for (let i = 0; i < alienShipArr.length; i++){
    console.log(new AlienShip([i]));
}

// const btnEl = document.querySelector("#attack");

// btnEl.addEventListener("click", attack);
//creating an array of alien ship, 