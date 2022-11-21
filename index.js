window.addEventListener("DOMContentLoaded", main);

function main() {
    startMenu();
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

    button1.addEventListener('click', loadDeathScene);
    button2.addEventListener('click', loadSecondScene);
}