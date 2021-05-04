function startGame() {
    // starting game (will be removed with tsconfig.json ->"removeComments": true

    let playerName: string | undefined = getInputValue('playername')
    logPlayer(playerName)

    postScore(100, playerName)
}

document.getElementById('startGame')!.addEventListener('click', startGame);
document.getElementById('randomStuff')!.addEventListener('click', doRandomStuff);

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


let myResult: Result = {
    factor: 7,
    playerName: "Aivars",
    problemCount: 5,
    score: 5
}

let me: Person = {
    formatName: () => "Aivars",
    name: "Aivars"
}
























//---------------------------------------

function doRandomStuff() {
    writeToScore()
    logMe()
    strictCode()
    typeAssertion()
    optionalValues()
    callFatArrow()
    ifaces()
}

function writeToScore() {
    const STARTING_NEW_GAME = 'Starting New Game...'
    let messageElement = document.getElementById('messages')
    messageElement!.innerText = STARTING_NEW_GAME
}

function logMe() {
    //logPlayer(playerName) would not compile with strict option
    let playerName: string = "Aivars"
    logPlayer(playerName)
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

function callFatArrow() {
    console.log(`2 squared = ${arrowSquare(2)}`)
    console.log(`2 + 3 = ${arrowAdd(2,3)}`)
    arrowGreeting()
    arrowFilter()
}

const arrowSquare = (x:number) => x * x

const arrowAdd = (a:number, b:number) => a + b

const arrowGreeting = () => console.log("Hi!")

function arrowFilter() {
    let scores: number[] = [70,110,10]
    let highScores: number[] = scores.filter((value, index, array) => {
        console.log(`---value:${value},index:${index},array:${array}`)
        if (value > 100) {
            return true
        }
    })
    console.log(`sc: ${scores} - hs: ${highScores}`)
}

function ifaces() {
    interface Employee {
        name: string
        title: string
        company: string
    }

    interface ArtCritic {
        name: string
        gere: string
    }

    let me = {
        name: 'Aivars',
        title: 'Coder',
        level: `over 9000`,
        company: 'Secret'
    }

    let employedDeveloper: Employee = me
    console.log(`employedDeveloper ${employedDeveloper.name}`)

    //let artCriticDeveloper: ArtCritic = me  does not compile
}