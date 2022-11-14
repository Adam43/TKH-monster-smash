//NEW OBJECT TEMPLATE

 class Fighter {
   constructor(name){
     this.name = name;
     this.healthPoints = 15;
   }
   attack(targetObject) {
     let attackPoints = randomNum(1,6)
//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable

targetObject.healthPoints = targetObject.healthpoints - attackPoints 
alert(`${this.name} has attacked ${targetObject.name}`)
alert(`${this.name} has dealt ${attackPoints} to ${targetObject.name}`)
alert(`${targetObject.name} health is now ${targetObject.healthPoints}`)
     
   }
 }

class Hero extends Fighter {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }
}

class Monster extends Fighter {
  constructor(name, hairColor) {
    super(name);
    this.hairColor = hairColor;
  }
}


let batman = new Hero("Batman", "boomerang")
alert(`Hello Gothem City! I am the ${batman.name} your hero`)

let joker = new Monster("Joker", "green")
alert(`Hehehe Gothem! I am the ${joker.name} your worst nightmare`)

alert(`Hey ${joker.name} I'm coming to destroy you in battle!`)
alert(`Come and get me ${batman.name} hehehe`)
alert(`FIGHT!!`)



function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playRound(hero, monster) {
  //use randomNum to return either 0 or 1
  randomNum(0,2)
  //0 = player goes first, 1 = monster goes first
  playerTurn = randomNum(0,2)
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack
  if (playerTurn === 0){
    batman.attack(joker);
   if (joker.healthPoints > 0){
    joker.attack(batman)};
   }
  else {
    joker.attack(batman);
    if (batman.healthPoints > 0){
      batman.attack(joker)
    }
  }
  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}
function playGame() {
  //beginning game message
  alert(`Hello, ${batman.name}! You are fighting ${joker.name}! Your health is at ${batman.healthPoints}, ${joker.name}'s health is at ${joker.healthPoints}`);

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(batman.healthPoints >= 0 && joker.healthPoints >= 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 alert(`It is now Round ${roundNumber}. ${batman.name} health is ${batman.healthPoints} and ${joker.name} health is ${joker.healthPoints}.`)
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if (batman.healthPoints >0 && joker.healthPoints <=0){
    alert(`${batman.name} You Win!`);
  }
  else if(joker.healthPoints > 0 && batman.healthPoints <= 0);
  {
    alert(`${batman.name} You Lose!`);
  }
} //end of loop

//call playGame to start game
 playGame()


