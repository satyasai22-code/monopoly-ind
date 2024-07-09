const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const lobbyRoutes = require('./routes/lobbyRoutes');
const gameRoutes = require('./routes/gameRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { initWebSocket } = require('./utils/WebSocket');

const app = express();
const server = http.createServer(app);
initWebSocket(server);

app.use(express.json());
app.use('/api/lobbies', lobbyRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/chats', chatRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
