const View = require('./ttt-view.js');
const Game = require('../../tictactoe_solu/game.js');

  $(() => {
    const game = new Game();
    const $figure = $('.ttt');

    
    const view = new View();
    view.setupBoard();
    view.bindEvents();

  });
  const MOVES = {
    1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2],
  };
  
  View.prototype.setupBoard = function() {
    const $ul = $('<ul></ul>');
    $figure.append($ul);

    for (i=1; i<=9; i++) {
      const pos = MOVES[i-1]
      
      $ul.append("<li class='$(pos)'></li>")
      
    }
  };
  View.prototype.bindEvents() {
    // const pos = MOVES;
    // currentTrget => ul,
    // target => li(whatever we click on)
    $("ul").on("click", "li", e => {
      debugger
      const $li = e.target  //
    }) 
  }


