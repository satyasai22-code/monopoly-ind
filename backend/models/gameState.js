const { Player } = require('./player');
const { Property } = require('./property');
const { boardConfig } = require('../config/boardConfig');

class GameState {
  constructor() {
    this.players = [
      new Player(1, 'Player 1'),
      new Player(2, 'Player 2'),
    ];
    this.board = this.initializeBoard();
    this.currentPlayerIndex = 0;
  }

  initializeBoard() {
    return boardConfig.map((config) => {
      return new Property(config.id, config.name, config.price || 0, config.type);
    });
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  movePlayer(playerId, diceRoll) {
    const player = this.players.find(p => p.id === playerId);
    player.position = (player.position + diceRoll) % this.board.length;
    this.handleLanding(player);
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  handleLanding(player) {
    const property = this.board[player.position];
    if (property && property.ownerId === null) {
      player.canBuy = true;
    } else {
      player.canBuy = false;
    }
  }

  buyProperty(playerId) {
    const player = this.players.find(p => p.id === playerId);
    const property = this.board[player.position];
    if (property && property.ownerId === null && player.money >= property.price) {
      player.money -= property.price;
      property.ownerId = playerId;
      player.properties.push(property);
    }
  }
}

module.exports = { GameState };
