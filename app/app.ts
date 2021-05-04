function startGame() {
    // starting game (will beremoved with tsconfig.json ->"removeComments": true
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Starting New Game...123'
}

document.getElementById('startGame')!.addEventListener('click', startGame);