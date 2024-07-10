let io;

const initWebSocket = (server) => {
    io = require('socket.io')(server, {
        cors: {
          origin: '*',
        }
    });
    
    io.on('connection', (socket) => {
        console.log('New client connected', socket.id);

        socket.on('joinGame', (gameId) => {
            socket.join(gameId);
            console.log(`Socket ${socket.id} joined game ${gameId}`);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected', socket.id);
        });
    });
};

const emitEvent = (gameId, event, data) => {
    io.to(gameId).emit(event, data);
};

module.exports = { initWebSocket, emitEvent };
