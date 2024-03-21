let usrCnt = 0;
let comCnt = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let yrScr = document.querySelector("#yrscr");
let comScr = document.querySelector("#comscr");
let result = document.querySelector("#result");
let resetBtn = document.querySelector("#rstBtn");




const playGame = (userChoice) => {
    const comChoice = gencomChoice();
    console.log("User Choice is", userChoice);
    console.log("Computer Choice is", comChoice);
    
    if (userChoice === comChoice) {
        drwGame(comChoice);
    } else {
        let usrWin = true;
        if (userChoice === "rock") {
            usrWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            usrWin = comChoice === "sizer" ? false : true;
        } else {
            usrWin = comChoice === "rock" ? false : true;
        }
        showWin(usrWin, userChoice, comChoice);
    }
};

const showWin = (usrWin, userChoice, comChoice) => {
    if (usrWin) {
        msg.innerText = "Noob Win!!!";
        msg.style.backgroundColor = "green";
        usrCnt++;
        yrScr.innerText = usrCnt;
        result.innerText = `You Accidently Choose ${userChoice}, Opponent on  ${comChoice}!!`;
        result.classList.remove("hide");
    }
    else {
        msg.innerText = "You Lose Noob! hahaha";
        msg.style.backgroundColor = "red";
        comCnt++;
        comScr.innerText= comCnt;
        result.classList.remove("hide");
        result.innerText = `Opponent Choice ${comChoice}, Bad Luck Like Your Future!!`;
    }
}

const drwGame = (comChoice) => {
    msg.innerText = "Game Draw Noob! Try Again";
    msg.style.backgroundColor = "#CCD5AE";
    result.innerText = `Both are Noob Opponent on  ${comChoice}!!`;
};

const gencomChoice = () => {
    const options = ["rock", "paper", "sizer"];
    const rndnum = Math.floor(Math.random() * 3);
    return options[rndnum];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    yrScr.innerText = 0;
    comScr.innerText= 0;
    result.classList.add("hide");
}

resetBtn.addEventListener( "click", resetGame) ;