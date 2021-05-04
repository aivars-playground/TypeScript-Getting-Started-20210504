function startGame() {
    // starting game
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Starting New Game...'
}

document.getElementById('startGame')!.addEventListener('click', startGame);