// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born... Good Friend ?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.style.color='grey';
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function ageReset() {
    document.getElementById('ageInDays').remove();
}

// CHallenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    // image.setAttribute('src', 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small');
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.getElementById('flex-cat-gen').appendChild(image);
}

function catReset() {
    document.getElementById('flex-cat-gen').innerHTML = '';
}