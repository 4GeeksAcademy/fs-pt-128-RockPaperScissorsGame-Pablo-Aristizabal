import "bootstrap";
import "./style.css";


const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}
let computerChoise = choises[Math.floor(Math.random() * choises.length)];
const userSelection = prompt(" ");

if (computerChoise === userSelection) {
  //console.log("Computer choise = " + computerChoise);
 //console.log("User choise = " + userSelection);
  console.log("Draw")
}
else if (rules[userSelection].includes(computerChoise)) {
  //console.log("Computer choise = " + computerChoise);
  //console.log("User choise = " + userSelection);
  console.log("Result = You Win");
} else {
  //console.log("Computer choise = " + computerChoise);
 // console.log("User choise = " + userSelection);
  console.log("Result = You Lose");
}
