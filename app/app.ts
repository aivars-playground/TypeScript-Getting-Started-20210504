function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    logMe()
    strictCode()
    typeAssertion()
    optionalValues()

    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages')
    messageElement!.innerText = STARTING_NEW_GAME
}

document.getElementById('startGame')!.addEventListener('click', startGame);

function logMe() {
    //logPlayer(playerName) would not compile with strict option
    let playerName: string = "Aivars"
    logPlayer(playerName)
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

function strictCode() {
    let basicString: string;
    basicString = 'a'
    //basicString = null; does not compile with "strict": true,
    let nullableString: string | null;
    nullableString = 'b'

    console.log(`sc basic: ${basicString}; nullable: ${nullableString} tp: ${typeFor(nullableString)} tp_strange: ${strangeTypeFor(nullableString)}`)
    nullableString = null
    console.log(`sc basic: ${basicString}; nullable: ${nullableString} tp: ${typeFor(nullableString)} tp_strange (object???): ${strangeTypeFor(nullableString)}`)
}

function typeFor(elem: any) {
    if(typeof elem ==='string') {
        return "str"
    } else if(typeof elem ==='number') {
        return "nr"
    } else if(elem === null) {
        return "null"
    } else {
        return typeof elem
    }
}

function strangeTypeFor(elem: any) {
    if(typeof elem ==='string') {
        return "str"
    } else {
        return typeof elem
    }
}

function typeAssertion() {
    let legacyCodeValue: any = 5;
    let fixedTypeValue: string = (<number>legacyCodeValue).toFixed(4)
    console.log(`legacy: ${legacyCodeValue} fixed: ${fixedTypeValue}`)
    let anotherApproach: string = (legacyCodeValue as number).toFixed(4)
    console.log(`legacy: ${legacyCodeValue} another fixed: ${anotherApproach}`)
}

function optionalValues() {
    console.log(`withOptional missing:${withReturnValue(1)}`);
}

function withReturnValue(score: number, optionalMessage?: string, paramWithDefault: number = -123): string {
    return `score: ${score}, msg: ${optionalMessage}, param: ${paramWithDefault}`
}
