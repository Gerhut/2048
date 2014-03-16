// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var disabledCells = [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 3, y: 3},
    {x: 3, y: 4},
    {x: 4, y: 3},
    {x: 4, y: 4}
  ];
  new GameManager(5, disabledCells, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
