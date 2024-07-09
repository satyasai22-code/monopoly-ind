const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const lobbyRoutes = require('./routes/lobbyRoutes');
const gameRoutes = require('./routes/gameRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/api/lobbies', lobbyRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/chats', chatRoutes);

require('./utils/WebSocket')(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
