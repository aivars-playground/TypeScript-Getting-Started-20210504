///<reference path="result.ts"/>
///<reference path="player.ts"/>
///<reference path="scoreboard.ts"/>

class Game {
    player: Player
    problemCount: number
    factor: number
    private scoreboard = new Scoreboard()

    constructor(player: Player, problemCount: number, multFactor: number) {
        this.player = player
        this.problemCount = problemCount
        this.factor = multFactor
    }
}