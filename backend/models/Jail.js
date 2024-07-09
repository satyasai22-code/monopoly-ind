class Jail {
    constructor() {
        this.playersInJail = [];
    }

    addPlayer(playerId) {
        this.playersInJail.push(playerId);
    }

    removePlayer(playerId) {
        this.playersInJail = this.playersInJail.filter(id => id !== playerId);
    }

    isInJail(playerId) {
        return this.playersInJail.includes(playerId);
    }
}

module.exports = Jail;
