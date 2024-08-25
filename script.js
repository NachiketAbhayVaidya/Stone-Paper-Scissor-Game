let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const image = document.querySelectorAll(".choice");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score"); 

const gencompChoice = () => {
    //rock papar scissors
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
};

const drawGame = () => {
    console.log("the game was draw! , Play Again");
    msg.innerText = "the game was draw! , Play Again"
    msg.style.backgroundColor = "black"
    
}




const showWinner = (userWin) => {
    if(userWin){
        // console.log("Great,You Won!");
        msg.innerText = "Great,You Won!";
        msg.style.backgroundColor = "green";
        userScore++;
        user_score.innerText = userScore;
        

    }else{
        // console.log("You Lost!")
        msg.innerText = "You lost!"
        msg.style.backgroundColor = "red";
        compScore++;
        comp_score.innerText = compScore;
        
    }
} 

const playGame = (userChoice) => {
    console.log("user choice:", userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice:", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //sci or paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //sci or rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);

    }
};

image.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",choiceid);
        playGame(userChoice);
    })
});

