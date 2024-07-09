class Trade {
    constructor(id, fromPlayerId, toPlayerId, offer, request) {
        this.id = id;
        this.fromPlayerId = fromPlayerId;
        this.toPlayerId = toPlayerId;
        this.offer = offer;
        this.request = request;
        this.status = 'pending';
    }
}

module.exports = Trade;
