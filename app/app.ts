import {Player} from './player'
import {Game} from './game'
import {Zzz as RandomStuffHere} from './zzz'
import * as Helpers from './utility'


document.getElementById('randomStuff')!.addEventListener('click', RandomStuffHere.doRandomStuff);

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const playerName: string = Helpers.getValue('playername')
    const player: Player = new Player(playerName);
    player.name = Helpers.getValue('playername')
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});