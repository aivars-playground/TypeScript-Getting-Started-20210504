function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    const playerName: string = "Aivars"
    logPlayer(playerName)


    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages');
    messageElement!.innerText = STARTING_NEW_GAME
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);