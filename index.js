window.addEventListener("DOMContentLoaded", main);

function main() {
    startMenu();
}

const audio = new Audio("./monster.wav");	
function playAudio() {
    audio.play();
}


function startMenu() {
    const startButton = document.getElementById('startButton');
    startButton.textContent = "Starta spel";
    startButton.addEventListener('click', sceneOne);
}

function sceneOne() {
    document.getElementById('h1').remove();
    document.getElementById('startButton').remove();
    document.getElementById('container').style.backgroundColor = "black";

    const text = document.createElement('p');
    text.innerHTML = "Du väljer att köra genom skogen på vägen hem. Plötsligt, halvvägs in, springer något ut framför dig och det blir en rejäl smäll. Samtidigt hör du ett märkligt ljud en bit in i skogen. Vad gör du?"
    text.id = "gameText"
    document.getElementById('container').appendChild(text);

    const button1 = document.createElement('button');
    button1.innerHTML = "Springer därifrån!";
    button1.id = "button1"
    document.getElementById('container').appendChild(button1);

    const button2 = document.createElement('button');
    button2.innerHTML = "Går ut ur bilen och går bakåt för att se vad du kört på";
    button2.id = "button2"
    document.getElementById('container').appendChild(button2);

    button2.addEventListener('click', loadDeathScene);
    button1.addEventListener('click', loadSecondScene);
}

function loadDeathScene() {
    document.getElementById('button1').remove();
    document.getElementById('button2').remove();
    document.getElementById('container').style.backgroundColor = "black";
    document.getElementById('gameText').remove();

    const audio = new Audio("./monster.wav");
    audio.play();

    const deathText = document.createElement('h1');
    deathText.innerHTML = "Du hann aldrig ifrån monstret innan det tog dig..";
    deathText.id = "deathText"
    document.getElementById('container').appendChild(deathText);


}

function loadSecondScene() {
    document.getElementById('button1').remove();
    document.getElementById('button2').remove();
    document.getElementById('container').style.backgroundColor = "black";
    document.getElementById('gameText').remove();

    const text = document.createElement('p');
    text.innerHTML = "Du springer därifrån samtidigt som du hör hur det märkliga ljudet kommer närmre och närmre. Du kommer till en grusväg - ska du gå vänster eller höger?";
    text.id = "gameText"
    document.getElementById('container').appendChild(text);
    
}