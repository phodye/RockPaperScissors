
//create buttons and add them to page
const buttoncontainer = document.querySelector('#container');
buttoncontainer.style.display = "flex";
buttoncontainer.style.alignItems = "center";
buttoncontainer.style.justifyContent = "center";

const rock = document.createElement("button");
rock.textContent = "Rock"
rock.style.padding = "10px 10px 10px 10px"; 
rock.style.margin = "20px";
rock.style.minWidth = "80px";
rock.addEventListener('click', () => {
	playerChoice = "Rock";
    console.log(playerChoice);
});
rock.addEventListener('click', game);
buttoncontainer.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper"
paper.style.padding = "10px 10px 10px 10px"; 
paper.style.margin = "20px";
paper.style.minWidth = "80px";
paper.addEventListener('click', () => {
	playerChoice = "Paper";
    console.log(playerChoice);
});
paper.addEventListener('click', game);
buttoncontainer.appendChild(paper);


const scissors = document.createElement("button");
scissors.textContent = "Scissors"
scissors.style.padding = "10px 10px 10px 10px"; 
scissors.style.margin = "20px";
scissors.style.minWidth = "80px";
scissors.addEventListener('click', () => {
	playerChoice = "Scissors";
    console.log(playerChoice);
});
scissors.addEventListener('click', game);
buttoncontainer.appendChild(scissors);





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
  
  //functions to count the score
  let wins = 0
  let loses = 0
  let ties = 0
  
  function winsCounter(input) {
    if (input === "You Win!") {
      wins++
      totalWins.textContent = `Wins: ${wins}`
    }
    return wins;
  }
  
  function losesCounter(input) {
    if (input === "You Lose!") {
      loses++
      totalLoses.textContent = `Loses: ${loses}`
    }
    return loses;
  }
  
  function tiesCounter(input) {
    if (input === "Y'all tied") {
       ties++
       totalTies.textContent = `Ties: ${ties}`
    }
    return ties;
  }
  
  
  function game() {
  
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
  
      let playerSelection = playerChoice.toLowerCase();
      
      //initilizes the round function
      playARound(playerSelection, computerSelection)
  
      //updates the win, lose, tie count
      winsCounter(result)
      losesCounter(result)
      tiesCounter(result)

     //logs the result of each round
     console.log(result)

     finalResult()
    }


//score keeping
const scorecontainer = document.querySelector('#scorekeeper');
scorecontainer.style.display = "flex";
scorecontainer.style.alignItems = "center";
scorecontainer.style.justifyContent = "center";
scorecontainer.style.textAlign = "center";

const totalWins = document.createElement("div");
totalWins.textContent = `Wins: ${wins}`;
totalWins.style.border = "thin solid #000000";
totalWins.style.padding = "10px 10px 10px 10px"; 
totalWins.style.margin = "20px";
totalWins.style.minWidth = "80px";
scorecontainer.appendChild(totalWins);

const totalLoses = document.createElement("div");
totalLoses.textContent = `Loses: ${loses}`;
totalLoses.style.border = "thin solid #000000";
totalLoses.style.padding = "10px 10px 10px 10px"; 
totalLoses.style.margin = "20px";
totalLoses.style.minWidth = "80px";
scorecontainer.appendChild(totalLoses);

const totalTies = document.createElement("div");
totalTies.textContent = `Ties: ${ties}`;
totalTies.style.border = "thin solid #000000";
totalTies.style.padding = "10px 10px 10px 10px"; 
totalTies.style.margin = "20px";
totalTies.style.minWidth = "80px";
scorecontainer.appendChild(totalTies);
  
  

  let finalMessage = "";

  const lastDisplay = document.querySelector('#scoring');
  lastDisplay.style.display = "flex";
  lastDisplay.style.alignItems = "center";
  lastDisplay.style.justifyContent = "center";
  lastDisplay.style.textAlign = "center";

  const messageEquals = document.createElement('div');
  messageEquals.textContent = `${finalMessage}`;
  messageEquals.style.border = "medium solid #000000";
  messageEquals.style.padding = "10px 10px 10px 10px"; 
  messageEquals.style.margin = "20px";
  messageEquals.style.minWidth = "300px";
  messageEquals.style.minHeight = "80px";
  lastDisplay.appendChild(messageEquals);

  
  function finalResult() {
  if (wins + loses === 5 && wins > loses) {
    messageEquals.textContent = "You won! You beat the computer!"
  } else if (wins + loses === 5 && loses > wins) {
    messageEquals.textContent = "You lost! Bow down to the robotic overlords!"
  } else {
    //console.log("You tied the computer, how unsatisfying.")
  }
}
  
   