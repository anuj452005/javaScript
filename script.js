const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
let user = 0;
let comp = 0;

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "green";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        userScore.innerText = user;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comp++;
        compScore.innerText = comp;
        msg.innerText = `You lose! Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = gencompChoice();
    if (userChoice === compChoice) {
        // draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((element) => {
    element.addEventListener("click", () => {
        const userChoice = element.getAttribute("id");
        playGame(userChoice);
    });
});
