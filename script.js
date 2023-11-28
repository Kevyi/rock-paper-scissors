
function getComputerChoice(){
    let choices = ["rock", "scissors", "paper"];

    return choices[Math.round(Math.random()*2)].toLowerCase();
}

function playRound(playerSelection, computerChoice){
    if(playerSelection === computerChoice){
        console.log(`${playerSelection} and ${computerChoice} is a tie!`); 
        return 1;
    }else if ((playerSelection === "rock" && computerChoice === "paper") || (playerSelection === "scissors" && computerChoice === "rock") || (playerSelection === "paper" && computerChoice === "scissors")){
        console.log(`Computer Wins with ${computerChoice} against ${playerSelection}`);
        return 2;
    }else{
        console.log(`Player Wins with ${playerSelection} against ${computerChoice}`);
        return 3;
    }
}

function game(){
    let count = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What is your selection: ").toLowerCase();
        let computerChoice = getComputerChoice();
        

        if(playRound(playerSelection, computerChoice) === 2){
            count++;
        }else{
            continue;
        }


    }
    console.log(`Computer: ${count}`);
    console.log(`Player: ${5-count}`);
}

game();
