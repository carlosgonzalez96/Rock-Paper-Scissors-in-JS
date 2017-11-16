function rock() {
    var rock = 1;
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "ROCK";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("win-lose").innerHTML = "TIE";
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("win-lose").innerHTML = "YOU LOSE";
    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("win-lose").innerHTML = "YOU WIN";
    }
}

function paper() {
    var paper = 2;
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "PAPER";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("win-lose").innerHTML = "YOU WIN";
             
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("win-lose").innerHTML = "TIE";

    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("win-lose").innerHTML = "YOU LOSE";   

    }
    
}

function scissors() {
    var paper = 3;
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "SCISSORS";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("win-lose").innerHTML = "YOU LOSE";
 
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("win-lose").innerHTML = "YOU WIN";
    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("win-lose").innerHTML = "TIE";
    }

}