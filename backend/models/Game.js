class Game {
    constructor(id, lobbyId) {
        this.id = id;
        this.lobbyId = lobbyId;
        this.players = [];
        this.board = [];
        this.currentTurn = 0;
        this.trades = [];
        this.chat = [];
    }
}

module.exports = Game;
