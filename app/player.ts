/// <reference path="person.ts" />
class Player implements Person {
    constructor(name: string) {
        this.name = name
    }
    name: string
    age?:number
    formatName = () => this.name!.toUpperCase()
}