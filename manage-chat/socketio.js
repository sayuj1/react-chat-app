const manageChat = io => {
  // Listening for new connection
  io.on('connection', socket => {
    console.log('we have a new connection');
    socket.on('join', ({ name, room }) => {
      console.log(`name: ${name} room: ${room}`);
    });
    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('User has left');
    });
  });
};

module.exports = manageChat;
