import { Person } from "person"

export class Player implements Person {
    constructor(name: string) {
        this.name = name
    }
    name: string
    age?:number
    formatName = () => this.name!.toUpperCase()
}