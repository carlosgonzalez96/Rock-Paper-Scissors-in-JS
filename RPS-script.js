function rock() {
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "ROCK";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("output").innerHTML = "TIE";
        document.getElementById("output").style.color = "skyblue";
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("output").innerHTML = "YOU LOSE";
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("output").innerHTML = "YOU WIN";
        document.getElementById("output").style.color = "green";
    }
}

function paper() {
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "PAPER";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("output").innerHTML = "YOU WIN";
        document.getElementById("output").style.color = "green";
             
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("output").innerHTML = "TIE";
        document.getElementById("output").style.color = "skyblue";

    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("output").innerHTML = "YOU LOSE";
        document.getElementById("output").style.color = "Red";

    }
    
}

function scissors() {
    var computer = Math.floor((Math.random() * 3) + 1);
    document.getElementById("computer-output").innerHTML = computer;
    document.getElementById("player-pick").innerHTML = "SCISSORS";
    //computer output
    if(computer == 1) {
        document.getElementById("computer-output").innerHTML = "ROCK";
        document.getElementById("output").innerHTML = "YOU LOSE";
        document.getElementById("output").style.color = "Red";
 
    } else if(computer == 2) {
        document.getElementById("computer-output").innerHTML = "PAPER";
        document.getElementById("output").innerHTML = "YOU WIN";
        document.getElementById("output").style.color = "green";
    } else {
        document.getElementById("computer-output").innerHTML = "SCISSORS";
        document.getElementById("output").innerHTML = "TIE";
        document.getElementById("output").style.color = "skyblue";
    }

}