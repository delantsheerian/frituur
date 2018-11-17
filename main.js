var userChoice = window.prompt("rock, paper or scissors?");
var computerChoice = calculateComputerChoice();

calculateComputerChoice();
showChoices();

function calculateComputerChoice(){
    var random = Math.random();
    var choice;
    if(random < 0.34){
      choice = "rock";
    } else if((random > 0.34) && (random < 0.67)){
      choice = "paper";
    } else{
      choice = "scissors";
    }
    return choice;
}

function showChoices(){
    document.querySelector("#player1 img").className = userChoice;
    document.querySelector("#player2 img").className = computerChoice;
    console.log("userChoice: " + userChoice);
    console.log("computerChoice: " + computerChoice);
}

function calculateWinner(){
    var tie = false; 
    var userWins;
    if(userChoice == computerChoice) {
        tie = true;
    } 
    
    if (!tie  && userChoice == "rock"){
        if(computerChoice == "scissors"){
            userWins = true; 
        } else {
            userWins = false;
        }
       
    } else if (!tie && userChoice == "paper"){
        if(computerChoice == "rock"){
            userWins = true; 
        } else {
            userWins = false;
        }
    }
    
    else if (!tie && userChoice == "scissors"){
        if(computerChoice == "paper"){
            userWins = true; 
        } else {
            userWins = false;
        }
    }
    
    if(tie){
        document.querySelector("#player1").className("player winner");
        document.querySelector("#player2").className("player winner");
        console.log("gelijkspel");
    } else if(userWins) {
        document.querySelector("#player1").parentElement.addClass("winner");    
        console.log("gebruiker wint");
    } else {
        document.querySelector("#player2").parentElement.addClass("winner"); 
        console.log("computer wint");
    }
}
