// src/components/Chat/Chat.js
import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { onEvent, sendMessage } from '../../services/WebSocket';
import Message from './Message';

const Chat = () => {
    const { gameId, players } = useContext(GameContext);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Fetch initial chat messages
        const fetchMessages = async () => {
            try {
                const response = await api.get(`/games/${gameId}/chat`);
                setMessages(response.data.messages);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };

        fetchMessages();

        // Listen for new chat messages
        onEvent('newMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, [gameId]);

    const handleSendMessage = () => {
        sendMessage(gameId, newMessage);
        setNewMessage('');
    };

    return (
        <div className="chat">
            <h3>Chat</h3>
            <div className="messages">
                {messages.map((message, index) => (
                    <Message key={index} message={message} players={players} />
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
