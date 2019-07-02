'use strict';

function main() {
  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function createSplashScreen() {
    var splashScreen = buildDom(`
      <section>
        <h1>Eternal Enemies</h1>
        <button>Start!</button>
      <section>
    `);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
  }

  createSplashScreen();

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="500" height="500"></canvas>
      <section>
    `);
    var canvasElement = document.querySelector('canvas');
    var gameInstance = new Game(canvasElement);
    gameInstance.startGame();
    console.log(gameInstance.gameOverCallback)
    gameInstance.gameOverCallback(createGameOverScreen);
    
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 40) {
        gameInstance.player.setDirection(1);
      } else if (event.keyCode === 38) {
        gameInstance.player.setDirection(-1);
      }
    });
    document.addEventListener('keyup', function() {
      if (event.keyCode === 40 || event.keyCode === 38) {
        gameInstance.player.setDirection(0);
      }
    });
    // setTimeout(createGameOverScreen, 3000);
  }

  function createGameOverScreen() {
    console.log("Game Over")
    var gameOverScreen = buildDom(`
    <section>
      <h1>Game Over</h1>
      <button>Restart</button>
    <section>
  `);
    var restartButton = gameOverScreen.querySelector('button');
    restartButton.addEventListener('click', createGameScreen);
  }
}

window.addEventListener('load', main);
