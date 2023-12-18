let strength = 0;
let agility = 0;
let intelligence = 0;
let endurance = 0;
let luck = 0;

// Load game state from localStorage
loadGame();

document.getElementById('grindButton').addEventListener('click', function() {
    incrementStats();
    saveGame();
});

// Auto stat function
setInterval(function() {
    incrementStats();
    saveGame();
}, 5000); // Increment stats every 5000 milliseconds (5 seconds)

function incrementStats() {
    strength++;
    agility++;
    intelligence++;
    endurance++;
    luck++;

    updateStats();
}

function updateStats() {
    updateProgressBar('strength', strength);
    updateProgressBar('agility', agility);
    updateProgressBar('intelligence', intelligence);
    updateProgressBar('endurance', endurance);
    updateProgressBar('luck', luck);
}

function updateProgressBar(stat, value) {
    const MAX_STAT = 100;
    let percentage = (value / MAX_STAT) * 100;
    percentage = percentage > 100 ? 100 : percentage;
    document.getElementById(`${stat}Bar`).style.width = percentage + '%';
    document.getElementById(stat).textContent = value;
}

function saveGame() {
    let gameData = {
        strength: strength,
        agility: agility,
        intelligence: intelligence,
        endurance: endurance,
        luck: luck
    };
    localStorage.setItem('rpgStatGrinderData', JSON.stringify(gameData));
}

function loadGame() {
    let savedData = localStorage.getItem('rpgStatGrinderData');
    if (savedData) {
        savedData = JSON.parse(savedData);
        strength = savedData.strength;
        agility = savedData.agility;
        intelligence = savedData.intelligence;
        endurance = savedData.endurance;
        luck = savedData.luck;

        updateStats();
    }
}
