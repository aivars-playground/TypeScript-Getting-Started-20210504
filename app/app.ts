function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true
    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages');
    messageElement!.innerText = STARTING_NEW_GAME
}

document.getElementById('startGame')!.addEventListener('click', startGame);