function showLoveMessage() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('love-message').classList.remove('hidden');
}

function showExitMessage() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('exit-message').classList.remove('hidden');
}

function showNextPart() {
    document.getElementById('love-message').classList.add('hidden');
    document.getElementById('next-part').classList.remove('hidden');
}

function startLoveLoop() {
    document.getElementById('next-part').classList.add('hidden');
    document.getElementById('love-loop').classList.remove('hidden');
}

function showNoLoveMessage() {
    document.getElementById('next-part').classList.add('hidden');
    document.getElementById('no-love-message').classList.remove('hidden');
}

function endLoveLoop() {
    let loveStages = ["Me amas mucho", "Mucho mucho", "Súper segura", "Yo también mi amor bella ❤️ \n Ahora dame un beso"];
    let currentStage = document.getElementById('love-level').innerText;
    let nextStageIndex = loveStages.indexOf(currentStage) + 1;
    
    if (nextStageIndex < loveStages.length) {
        document.getElementById('love-level').innerText = loveStages[nextStageIndex];
    } else {
        document.getElementById('love-loop').classList.add('hidden');
        document.getElementById('final-love-message').classList.remove('hidden');
    }
}

function moveNoButton() {
    let button = document.getElementById('no-button');
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
