let correctnumber = getrandomnumber();
let guesses = [];
// 1.get user value from input and save it to variable numberguess .
// 2.generate a random number 1 to 100 and save it to variable correctnumber.
// 3.console whether the guess is too high,too low,or is correct inside playgame function.
// 4.create a function called displayresult to move the logic for if the guess is too high , too low or correct
// 5.Complete the showYouwon , shownumberabove , shownumberbelow.
// 6.use the show..functions with in displayresult to display the dailog.
// 7.Save the guess history in a variable called guesses.
// 8.Display the guess history using displayHiostory() function.
// 9.Use the initgame() function to restart the game.

window.onload = function(){
    document.getElementById("number-submit").addEventListener("click",playgame);
    document.getElementById("restart-game").addEventListener("click",initgame);
}
function initgame(){
    correctnumber = getrandomnumber();
    document.getElementById('result').innerHTML="";
    guesses = [];
    displayHiostory();
}

function playgame(){
    let numberguess = document.getElementById("number-guess").value;
    displayresult(numberguess);
    saveGuesshistory(numberguess);
    displayHiostory();
}

function displayresult(numberguess)
{
    if(numberguess > correctnumber){
        showNumberAbove();
    }
    else if(numberguess < correctnumber){
        showNumberBelow();
    }
    else{
        showYouwon();
    }

}
function getrandomnumber(){
    let randomnumber = Math.floor(Math.random() * 100) +1;
    return randomnumber;
}
function saveGuesshistory(guess){
    guesses.push(guess);
}
function displayHiostory(){
    let index = guesses.length - 1;
    let list = "<ul class= 'list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item'>" +
        "You guessed "+ guesses[index] + "</li>";
        index -= 1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}

function getDailog(dailogtype,text){
    let dailog;
    switch(dailogtype){
        case "warning":dailog = "<div class='alert alert-warning' role='alert'>"
        break;
        case "won":dailog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dailog += text;
    dailog += "<div>";
    return dailog;
}

function showYouwon(){
    const text = "Awesome job,you got it!!";
    let dailog = getDailog('won',text);
    document.getElementById('result').innerHTML=dailog;
}
function showNumberAbove(){
    const text = "your guess is too high!";
    let dailog = getDailog('warning',text);
    document.getElementById('result').innerHTML=dailog;
}
function showNumberBelow(){
    const text = "your guess is too low!";
    let dailog = getDailog('warning',text);
    document.getElementById('result').innerHTML=dailog;
}