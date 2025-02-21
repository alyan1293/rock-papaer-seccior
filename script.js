let userscore = 0;
let compscore = 0;

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");

let userpara = document.querySelector(".userscore");
let comppara = document.querySelector(".compscore");



const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    Math.random();
    return option[randIdx];
}


const gamedraw = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw.Play again";
    msg.style.background = "rgb(201, 178, 178)";
}


const showWinner = (userwin, userchoice, comChoice) => {

    if (userwin) {
        console.log("user is win")
        userscore++;
        msg.innerText=`You win! your ${userchoice}. beats ${comChoice}`;
        userpara.innerText = userscore;
        msg.style.background = "green";
    } else {
        console.log("Comp is win") 
        msg.innerText="comp win";
        compscore++;
        msg.innerText=`You lost. ${comChoice} beats you ${userchoice}`;
        comppara.innerText = compscore;
        msg.style.background = "red";
    }
}


const playgame = (userchoice) => {
    console.log("User Choice is  =", userchoice);
    const comChoice = gencompchoice();
    console.log("computer Choice is  =", comChoice);

    if (userchoice === comChoice) {
        
        gamedraw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            comChoice === "scissors" ? false : true;
        } else {
            userwin = comChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, comChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")

        playgame(userchoice);

    });
});










