let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock paper,scissors
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081B31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //Now Generate computer choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else{//scissor 
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})