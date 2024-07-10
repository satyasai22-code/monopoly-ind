// src/components/Chat/Message.js
import React from 'react';

const Message = ({ message, players }) => {
    const player = players.find((p) => p.id === message.playerId);

    return (
        <div className="message">
            <strong>{player.name}: </strong>
            <span>{message.text}</span>
        </div>
    );
};

export default Message;
