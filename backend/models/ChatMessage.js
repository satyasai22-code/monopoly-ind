class ChatMessage {
    constructor(id, playerId, message) {
        this.id = id;
        this.playerId = playerId;
        this.message = message;
        this.timestamp = new Date();
    }
}

module.exports = ChatMessage;
