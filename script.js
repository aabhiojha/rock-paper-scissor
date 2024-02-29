const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
let computerCounter = parseInt(document.querySelector(".computer-score").textContent);
let userCounter = parseInt(document.querySelector(".user-score").textContent);

const options = ["rock", "paper", "scissor"];

buttons.forEach((b) => {
  b.addEventListener("click", () => {
    let a = Math.floor(Math.random() * 3 + 0);
    let computer_choice = options[a];
    let user_choice = b.textContent.toLowerCase();
    console.log(`Computer: ${computer_choice}`);
    console.log(`You: ${user_choice}`);
    whoWon(computer_choice, user_choice);
  });
});

function whoWon(computer_choice, user_choice) {
  if (computer_choice === user_choice) {
    result.textContent = "It's a draw";
    result.style.color = 'black';
  }
  //user winning conditions
  else if (computer_choice === "rock" && user_choice === "paper") {
    result.textContent = "Paper beats rock";
    userCounter++;
    result.style.color = 'green';
  } else if (computer_choice === "paper" && user_choice === "scissor") {
    result.textContent = "Scissor beats paper";
    userCounter++;
    result.style.color = 'green';
  } else if (computer_choice === "scissor" && user_choice === "rock") {
    result.textContent = "Rock beats scissor";
    userCounter++;
    result.style.color = 'green';
  }
  //computer winning conditions
  else if (computer_choice === "paper" && user_choice === "rock") {
    result.textContent = "Paper beats rock";
    computerCounter++;
    result.style.color = 'red';
  } else if (computer_choice === "scissor" && user_choice === "paper") {
    result.textContent = "Scissor beats paper";
    computerCounter++;
    result.style.color = 'red';
  } else if (computer_choice === "rock" && user_choice === "scissor") {
    result.textContent = "Rock beats scissor";
    computerCounter++;
    result.style.color = 'red';
  }

  document.querySelector(".computer-score").textContent = computerCounter;
  document.querySelector(".user-score").textContent = userCounter;
}
