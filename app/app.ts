function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    logPlayer(playerName)
    var playerName: string = "Aivars"

    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages');
    messageElement!.innerText = STARTING_NEW_GAME
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);