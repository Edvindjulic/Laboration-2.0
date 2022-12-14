window.addEventListener("DOMContentLoaded", main);

/**
 * Loads the startMenu-function
 */

function main() {
    startMenu();
}

/**
 * Startbutton loads the first scene (function) of the game on click
 */

function startMenu() {
    const startButton = document.getElementById('startButton');
    startButton.textContent = "Starta spel";
    startButton.addEventListener('click', loadFirstScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */
function loadFirstScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Du väljer att köra genom skogen på vägen hem. Plötsligt, halvvägs in, springer något ut framför dig och det blir en rejäl smäll. Samtidigt hör du ett märkligt ljud en bit in i skogen. Vad gör du?";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Springer därifrån!";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Går ut ur bilen och går bakåt för att se vad du kört på";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadSecondScene);
    button2.addEventListener('click', loadDeathScene);

}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadSecondScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Du springer därifrån samtidigt som du hör hur det märkliga ljudet kommer närmre och närmre. Du kommer till en grusväg - ska du gå vänster eller höger?";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Vänster";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Höger";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadDeathScene);
    button2.addEventListener('click', loadThirdScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadThirdScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Du väljer vägen till höger, och hör hur ljudet kommer närmare och närmare. Du springer tills du ser ett stort träd in till vägen. Vill du klättra upp i det för att komma undan?";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Ja";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Nej";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadFourthScene);
    button2.addEventListener('click', loadDeathScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadFourthScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Du klättrar snabbt upp för trädet. Där du sitter kan du se en stuga längre bort. Du klättrar ner för trädet och funderar på om du vill söka hjälp där.";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Ja, du vill gå dit";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Nej, du vill gå tillbaka till bilen";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadFifthScene);
    button2.addEventListener('click', loadSixthScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadFifthScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Springandes kommer du efter ett par minuter fram till stugan. Det är tänt och du knackar på, men ingen öppnar. Du hör det där märkliga ljudet komma närmare igen. Vad gör du?";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Du vänder om och börjar springa tillbaka till bilen";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Du måste gömma dig i stugan";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadDeathScene);
    button2.addEventListener('click', loadSeventhScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadSixthScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Springandes kommer du tillbaka till bilen och skyndar dig in i den. Utanför hör du ett öronbedövande skrik. Vad gör du?";
    gameText.classList.add('gameText');

    const button1 = document.createElement('button');
    button1.textContent = "Nyfiken som du är vill du gå ut för att se vad det är som har jagat dig";
    button1.classList.add('button1');

    const button2 = document.createElement('button');
    button2.textContent = "Du rivstartar motorn och kör iväg så snabbt som möjligt";
    button2.classList.add('button2');

    gameContainer.append(gameText, button1, button2);
    button1.addEventListener('click', loadDeathScene);
    button2.addEventListener('click', loadEndScene);
}

/**
 * Loads a div and empties the content before
 * creating two buttons and a paragraph. The two buttons
 * each load a function when clicked
 */

function loadSeventhScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const gameText = document.createElement('p');
    gameText.textContent = "Genom att krossa ett fönster tar du dig in i stugan. Efter en stund hör du hur någon låser upp ytterdörren. In kommer en gammal kvinna som säger - Där är du ju... Skrattandes släcker kvinnan lampan i stugan.";
    gameText.classList.add('gameText');
    
    const button1 = document.createElement('button');
    button1.textContent = "Avsluta";
    button1.classList.add('button1');

    gameContainer.append(gameText, button1);
    button1.addEventListener('click', loadDeathScene);
}

/**
 * Loads a div and empties the content before
 * creating a h1 and playing an audio. Also creates a button
 * that calls for the first scene of the game when clicked.
 */

function loadEndScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "white";

    const audio = new Audio("./audio/completed.wav");
    audio.play();

    const endText = document.createElement('h1');
    endText.classList.add('endText');
    endText.textContent = "Du kör ut ur skogen och lovar dig själv att aldrig ta genvägen igen";

    const returnButton = document.createElement('button');
    returnButton.textContent = "Spela igen";
    returnButton.classList.add('button2');

    gameContainer.append(endText, returnButton);
    returnButton.addEventListener('click', loadFirstScene);
}

/**
 * Loads a div and empties the content before
 * creating a h1 and playing an audio. Also creates a button
 * that calls for the first scene of the game when clicked.
 */

function loadDeathScene() {
    const gameContainer = document.getElementById('container');
    gameContainer.innerHTML = "";
    gameContainer.style.background = "black";

    const audio = new Audio("./audio/monster.wav");
    audio.play();

    const deathText = document.createElement('h1');
    deathText.classList.add('deathText');
    deathText.textContent = "Du hann aldrig ifrån monstret innan det tog dig..";
    gameContainer.append(deathText);

    const returnButton = document.createElement('button');
    returnButton.textContent = "Försök igen";
    returnButton.classList.add('button2');

    gameContainer.append(returnButton);
    returnButton.addEventListener('click', loadFirstScene);
}
