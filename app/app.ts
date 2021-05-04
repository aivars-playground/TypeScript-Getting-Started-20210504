function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Starting New Game...'
}

document.getElementById('startGame')!.addEventListener('click', startGame);