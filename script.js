
//create buttons and add them to page
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";

const rock = document.createElement("button");
rock.textContent = "Rock"
rock.style.padding = "10px 10px 10px 10px"; 
rock.style.margin = "20px";
rock.style.minWidth = "80px";
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper"
paper.style.padding = "10px 10px 10px 10px"; 
paper.style.margin = "20px";
paper.style.minWidth = "80px";
container.appendChild(paper);


const scissors = document.createElement("button");
scissors.textContent = "Scissors"
scissors.style.padding = "10px 10px 10px 10px"; 
scissors.style.margin = "20px";
scissors.style.minWidth = "80px";
container.appendChild(scissors);




//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: 
//"You Lose! Paper beats Rock"

function playARound(player, computer) {
    if (player == "rock" && computer == "Rock") {
    result = "Y'all tied"
  } else if (player == "rock" && computer == "Paper") {
    result = "You Lose!"
  } else if (player == "rock" && computer == "Scissors") {
    result = "You Win!"
  } else if (player == "paper" && computer == "Rock") {
    result = "You Win!"
  } else if (player == "paper" && computer == "Paper") {
    result = "Y'all tied"
  } else if (player == "paper" && computer == "Scissors") {
    result = "You Lose!"
  } else if (player == "scissors" && computer == "Rock") {
    result = "You Lose!"
  } else if (player == "scissors" && computer == "Paper") {
    result = "You Win!"
  } else if (player == "scissors" && computer == "Scissors") {
    result = "Y'all tied"
  } else {
    result = "You chose poorly. Pick your fighter, and have some care."
  }
  return result;
  }
  
  //function to count the score
  let wins = 0
  let loses = 0
  let ties = 0
  
  function winsCounter(input) {
    if (input === "You Win!") {
      wins++
    }
    return wins;
  }
  
  function losesCounter(input) {
    if (input === "You Lose!") {
      loses++
    }
    return loses;
  }
  
  function tiesCounter(input) {
    if (input === "Y'all tied") {
       ties++
    }
    return ties;
  }
  
  //Write a NEW function called game(). Call the playRound function inside of 
  //this one to play a 5 round game that keeps score and reports a winner or loser at the end. 
  
  function game() {
  
    for (let i = 0; i < 5; i++) {
      //computer selection, rock paper or scissors
      let computerSelection = Math.random() * 3
  
        function computerPlay() {
         if (computerSelection <= 1) {
           computerSelection = "Rock";
         } else if (computerSelection <= 2) {
            computerSelection = "Paper";
         } else {
           computerSelection = "Scissors";
          }
         return computerSelection
        }
      computerPlay()
  
      //player selection, same options
      let playerChoice = prompt("Choose your fighter: Rock, Paper or Scissors")
      let playerSelection = playerChoice.toLowerCase();
      
      //initilizes the round function
      playARound(playerSelection, computerSelection)
  
      //logs the result of each round
      console.log(result)
  
      //updates the win, lose, tie count
      winsCounter(result)
      losesCounter(result)
      tiesCounter(result)
    }
  
  }
  //calls the game to play
  //game()
  
  //displays final message in console when considering wins/loses
  if (wins > loses) {
    console.log("You won! You beat the computer!")
  } else if (loses > wins) {
    console.log("You lost! Bow down to the robotic overlords!")
  } else {
    console.log("You tied the computer, how unsatisfying.")
  }
  
   