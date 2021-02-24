const View = require('./ttt-view.js');
const Game = require('../../tictactoe_solu/game.js');

  $(() => {
    const game = new Game();
    const $figure = $('.ttt');

    View.prototype.setupBoard = function() {
  
      const $ul = $('<ul></ul>');

      $figure.append($ul);

      for (i=0; i<9; i++) {
        $ul.append('<li></li>')
      }

      $ul.addClass('row');

      const $li = $('li');
      $li.addClass('box'); 

    }

    const view = new View();
    view.setupBoard();
  });
