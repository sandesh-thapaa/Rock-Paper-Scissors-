let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gameMsg = document.querySelector("#game-msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //to get the number in the range 0 - 2
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was a draw";
  msg.style.backgroundColor = "#081b31";
  gameMsg.style.display = "none";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You win.";
        msg.style.backgroundColor = "green";
        gameMsg.style.display = "inline";
        gameMsg.innerText = `Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("YOU LOSE");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        gameMsg.innerText = `${compChoice} beats your ${userChoice}`;
        gameMsg.style.display = "inline";
    }
}
    const playGame = (userChoice) => {
  console.log("User choice is ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice is", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
