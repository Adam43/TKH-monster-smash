//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
let playerName = prompt("Player, what is your name?")
  //declare a variable named playerHealth and set it equal to the number value 15
const playerHealth = 15
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
const monsterName = 'Gandolf'
  //declare a variable named monsterHealth and set it equal to the number value 15
const monsterHealth = 15
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1,6)
//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable

monsterHealth = monsterHealth - playerAttackPoints
alert(`${playerName} has attacked ${monsterName}`)
alert(`${playerName} has dealt ${playerAttackPoints} to ${monsterName}`)
alert(`${monsterName} health is now ${monsterHealth}`)
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  // 2. how much damage the player did 
  // 3. how much health the monster has 
}

function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
let monsterAttackPoints = randomNum(1,6);
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
playerHealth = playerHealth - monsterAttackPoints;
alert(`${monsterName} has attacked ${playerName}`);
alert(`${monsterName}has dealt ${monsterAttackPoints} to ${playerName}`);
alert(`${playerName} health is now ${playerHealth}`);
  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
}

function playRound() {
  //use randomNum to return either 0 or 1
  randomNum(0,2)
  //0 = player goes first, 1 = monster goes first
  playerTurn = randomNum(0,2)
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack
  if (playerTurn === 0){
    playerAttack();
   if (monsterHealth > 0){
    monsterAttack();}
   }
  else {
    monsterAttack();
    if (playerHealth > 0){
      playerAttack()
    }
  }
  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth >= 0 && monsterHealth >= 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 alert(`It is now ${roundNumber}.${playerName} health is ${playerHealth} and ${monsterName} health is ${monsterHealth}.`)
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if (playerHealth >0 && monsterHealth <=0){
    alert(`${playerName} You Win! | ${monsterName} You Lose!`);
  }
  else if(monsterHealth > 0 && playerHealth < 0);
  {
    alert(`${monsterName} You Win | ${playerName} You Lose!`);
  }
}
}
//call playGame to start game
 playGame()