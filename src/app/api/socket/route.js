const { createServer } = require('http');
const { Server } = require('socket.io');

const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Un jugador se ha conectado');

  // Configura eventos y lógica del juego en el servidor Socket.io
  // ...

  socket.on('disconnect', () => {
    console.log('Un jugador se ha desconectado');
    // Más lógica de desconexión, si es necesario
  });
});

// Exporta el servidor Socket.io
module.exports = server;