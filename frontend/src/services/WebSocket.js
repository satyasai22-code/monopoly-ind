import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000'; // Update with your server endpoint
const socket = io(ENDPOINT);

const joinGame = (gameId) => {
    socket.emit('joinGame', gameId);
};

const onEvent = (event, callback) => {
    socket.on(event, callback);
};

const disconnectSocket = () => {
    socket.disconnect();
};

export { joinGame, onEvent, disconnectSocket };
