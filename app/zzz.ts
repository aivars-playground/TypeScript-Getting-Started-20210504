class Zzz {

    static doRandomStuff() {
        Zzz.writeToScore()
        Zzz.strictCode()
        Zzz.typeAssertion()
        Zzz.optionalValues()
        Zzz.callFatArrow()
        Zzz.ifaces()
        Zzz.classesDemo()
    }

    static writeToScore() {
        const STARTING_NEW_GAME = 'Starting New Game...'
        let messageElement = document.getElementById('messages')
        messageElement!.innerText = STARTING_NEW_GAME
    }


    static strictCode() {
        let basicString: string;
        basicString = 'a'
        //basicString = null; does not compile with "strict": true,
        let nullableString: string | null;
        nullableString = 'b'

        console.log(`sc basic: ${basicString}; nullable: ${nullableString} tp: ${this.typeFor(nullableString)} tp_strange: ${this.strangeTypeFor(nullableString)}`)
        nullableString = null
        console.log(`sc basic: ${basicString}; nullable: ${nullableString} tp: ${this.typeFor(nullableString)} tp_strange (object???): ${this.strangeTypeFor(nullableString)}`)
    }

    static typeFor(elem: any) {
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

    static strangeTypeFor(elem: any) {
        if(typeof elem ==='string') {
            return "str"
        } else {
            return typeof elem
        }
    }

    static typeAssertion() {
        let legacyCodeValue: any = 5;
        let fixedTypeValue: string = (<number>legacyCodeValue).toFixed(4)
        console.log(`legacy: ${legacyCodeValue} fixed: ${fixedTypeValue}`)
        let anotherApproach: string = (legacyCodeValue as number).toFixed(4)
        console.log(`legacy: ${legacyCodeValue} another fixed: ${anotherApproach}`)
    }

    static optionalValues() {
        console.log(`withOptional missing:${this.withReturnValue(1)}`);
    }

    static withReturnValue(score: number, optionalMessage?: string, paramWithDefault: number = -123): string {
        return `score: ${score}, msg: ${optionalMessage}, param: ${paramWithDefault}`
    }

    static callFatArrow() {
        console.log(`2 squared = ${this.arrowSquare(2)}`)
        console.log(`2 + 3 = ${this.arrowAdd(2,3)}`)
        this.arrowGreeting()
        this.arrowFilter()
    }

    static arrowSquare = (x:number) => x * x

    static arrowAdd = (a:number, b:number) => a + b

    static arrowGreeting = () => console.log("Hi!")

    static arrowFilter() {
        let scores: number[] = [70,110,10]
        let highScores: number[] = scores.filter((value, index, array) => {
            console.log(`---value:${value},index:${index},array:${array}`)
            if (value > 100) {
                return true
            }
        })
        console.log(`sc: ${scores} - hs: ${highScores}`)
    }

    static ifaces() {
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

    static classesDemo() {

        class Developer {
            constructor() {
                console.log(`Developer constructor: ${this}`)
            }
        }

        class WebDeveloper extends Developer {
            readonly favouriteEditor: string
            constructor(editor: string) {
                super();
                this.favouriteEditor = editor
            }
        }

        const webdev = new WebDeveloper(`vi`)

        console.log(`webdev ${webdev.favouriteEditor}`)


    }

}