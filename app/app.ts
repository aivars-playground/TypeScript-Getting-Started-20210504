/// <reference path="./player.ts" />
/// <reference path="./zzz.ts" />
function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    let playerName: string | undefined = getInputValue('playername')
    logPlayer(playerName)

    postScore(100, playerName)
}

document.getElementById('startGame')!.addEventListener('click', startGame);
document.getElementById('randomStuff')!.addEventListener('click', Zzz.doRandomStuff);

function logPlayer(name: string = 'Unknown MultiMath player') {
    console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    //casting acts as '!' on nullable
    //casting does not throw error on incorrect type
    const inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value
    }
}

function postScore(score: number, playerName?: string): void {

    let logger: (message: string) => void

    if(score<0) {
        logger = logError
    } else {
        logger = logMessage
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores')
    scoreElement!.innerText = `${score} - ${playerName}`

    logger(`Score: ${score} - ${playerName}`)
}

const logMessage = (message: string) => console.log(message)
const logError = (message: string) => console.error(message)

const firstPlayer: Player = new Player('Aivars')
console.log(`firstPlayer: ${firstPlayer.name}`)
