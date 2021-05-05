/// <reference path="player.ts" />
/// <reference path="game.ts" />
/// <reference path="zzz.ts" />
document.getElementById('randomStuff')!.addEventListener('click', Zzz.doRandomStuff);

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const playerName: string = Utility.getInputValue('playername')
    const player: Player = new Player(playerName);
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});