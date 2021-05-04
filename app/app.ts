function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    const playerName: string = "Aivars"
    logPlayer(playerName)
    strictCode()
    typeAssertion()

    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages')
    messageElement!.innerText = STARTING_NEW_GAME
}

function strictCode() {
    let basicString: string;
    basicString = 'a'
    //basicString = null; does not compile with "strict": true,
    let nullableString: string | null;
    nullableString = 'b'
    console.log(`sc basic: ${basicString}; nullable: ${nullableString}`)
    nullableString = null
    console.log(`sc basic: ${basicString}; nullable: ${nullableString}`)
}

function typeAssertion() {
    let legacyCodeValue: any = 5;
    let fixedTypeValue: string = (<number>legacyCodeValue).toFixed(4)
    console.log(`legacy: ${legacyCodeValue} fixed: ${fixedTypeValue}`)
    let anotherApproach: string = (legacyCodeValue as number).toFixed(4)
    console.log(`legacy: ${legacyCodeValue} another fixed: ${anotherApproach}`)
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);