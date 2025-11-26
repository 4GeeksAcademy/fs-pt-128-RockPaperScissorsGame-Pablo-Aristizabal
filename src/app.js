const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}
function play() {
  let userSelection = choises[Math.floor(Math.random() * choises.length)];
  let computerChoise = choises[Math.floor(Math.random() * choises.length)];

  if (computerChoise === userSelection) {
    console.log("Draw")
  }
  else if (rules[userSelection].includes(computerChoise)) {
    console.log("You Win");
  } else {
    console.log("You Lose");
  }
}
play();