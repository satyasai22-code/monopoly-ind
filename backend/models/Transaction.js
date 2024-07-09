class Transaction {
    constructor(id, playerId, amount, description) {
        this.id = id;
        this.playerId = playerId;
        this.amount = amount;
        this.description = description;
        this.timestamp = new Date();
    }
}

module.exports = Transaction;
