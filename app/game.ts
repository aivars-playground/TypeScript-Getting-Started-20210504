///<reference path="result.ts"/>
///<reference path="player.ts"/>
///<reference path="scoreboard.ts"/>

class Game {
    private scoreboard = new Scoreboard()
    player: Player
    problemCount: number
    factor: number

    constructor(player: Player,problemCount: number, multFactor: number) {
        this.player = player
        this.problemCount = problemCount
        this.factor = multFactor
    }
}