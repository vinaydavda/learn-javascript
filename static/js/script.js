//------------------------------
// Challenge 1: Your Age in Days
//------------------------------

function ageInDays() {
    var birthYear = prompt('What year were you born... Good Friend ?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.style.color = 'grey';
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function ageReset() {
    document.getElementById('ageInDays').remove();
}

//---------------------------
// Challenge 2: Cat Generator
//---------------------------

function generateCat() {
    var image = document.createElement('img');
    // image.setAttribute('src', 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small');
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.getElementById('flex-cat-gen').appendChild(image);
}

function catReset() {
    document.getElementById('flex-cat-gen').innerHTML = '';
}

//--------------------------------
// Challenge 3: rock paper scissor
//--------------------------------

// reset initial game screen
function rpsReset() {
    rps_playground = document.getElementById('flex-box-rps');
    backup = rps_playground.innerHTML;
    rps_playground.innerHTML = '<img id="rock" src="static/images/rock.png" onclick="rpsGame(this)"><img id="paper" src="static/images/paper.png" onclick="rpsGame(this)"><img id="scissor" src="static/images/scissor.png" onclick="rpsGame(this)">';
};

function rpsGame(yourChoice) {
    // human choice
    let humanChoice = yourChoice.id;

    // random choice by bot
    let botChoice = Math.floor(Math.random() * 3); // generates random number between 0 to 3 - 0,1,2
    botChoice = ['rock', 'paper', 'scissor'][botChoice];

    // possible outcomes database - 0, 0.5, 1 - lost, draw, won
    let possible_results = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 },
    };

    // decide the result according to human and bot choice
    let result = possible_results[humanChoice][botChoice];

    // necessary images sources
    let humanDivSrc = yourChoice.src;
    let botDivSrc = document.getElementById(botChoice).src;

    // make frontend parts
    let humanDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src = '" + humanDivSrc + "' style='width:150; height:150; box-shadow: inset 0 0 13px 6px #5cb85c;'>";

    let msg = ''
    if (result === 1) {
        msg = 'You Won :)';
        msgColor = '#5cb85c';
    } else if (result === 0) {
        msg = 'You Lost :(';
        msgColor = '#d9534f';
    } else {
        msg = 'You Tied !';
        msgColor = '#f0ad4e';
    }

    let finalMessage = document.createElement('div');
    finalMessage.innerHTML = "<div><h1 style='color:" + msgColor + "; font-size: 50px; margin:60px 0;'>" + msg + "</h1>"

    botDiv = document.createElement('div');
    botDiv.innerHTML = "<img src = '" + botDivSrc + "' style='width:150; height:150; box-shadow: inset 0 0 13px 6px #292b2c;'>";

    // remove all images
    rps_playground = document.getElementById('flex-box-rps');
    backup = rps_playground.innerHTML; // backup to restore with reset button
    rps_playground.innerHTML = '';

    // declare winner on screen by adding humanchoice-message-botchoice
    rps_playground.appendChild(humanDiv);
    rps_playground.appendChild(finalMessage);
    rps_playground.appendChild(botDiv);

    // restarting game
    setTimeout(function () {
        rpsReset();
    }, 2000);

    console.log(humanChoice, botChoice, result);
}


//-----------------------------
// Challenge 4: Button Coloring
//-----------------------------

var all_buttons = document.getElementsByTagName('button');

// take a backup of original colors
var copyOriginalColors = []
for (let i = 0; i < all_buttons.length; i++) {
    copyOriginalColors.push(all_buttons[i].classList.item(1));
}

function buttonColorChange(selectObject) {
    colorValue = selectObject.value;

    if (colorValue === 'random') {
        randomColor();
    } else if (colorValue === 'reset') {
        resetColor();
    } else {
        for (let i = 0; i < all_buttons.length; i++) {
            // changing colors of all buttons
            all_buttons[i].classList.remove(all_buttons[i].classList.item(1));
            all_buttons[i].classList.add('btn-ice-' + colorValue);
        }
    }

}

function randomColor() {
    // all colors we used
    colorArray = ['blue', 'green', 'orange', 'red'];

    // random choice of color
    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList.item(1));
        all_buttons[i].classList.add('btn-ice-' + colorArray[randomNumber]);
        // console.log(randomNumber);
    };
}

function resetColor() {
    for (let i = 0; i < all_buttons.length; i++) {
        // removing existing color and adding original color
        all_buttons[i].classList.remove(all_buttons[i].classList.item(1));
        all_buttons[i].classList.add(copyOriginalColors[i]);
    }
}