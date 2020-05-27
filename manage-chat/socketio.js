const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('../utils/users');

const manageChat = io => {
  // Listening for new connection
  io.on('connection', socket => {
    console.log('we have a new connection');

    socket.on('join', ({ name, room }, callback) => {
      const chatMe = 'Chat Me';

      // console.log('socket id', socket.id);
      const { error, user } = addUser({ id: socket.id, name, room });
      console.log('user', user);
      if (error) return callback({ error });

      // Sending user details at client-side
      socket.emit('userInfo', { userInfo: user });

      // Welcoming user
      socket.emit('message', {
        user: chatMe,
        text: `${user.name}, welcome to the room ${user.room}`,
      });

      // Letting other users to know which user has joined the chat
      socket.broadcast.to(user.room).emit('message', {
        user: chatMe,
        text: `${user.name}, has joined!`,
      });

      // Joining Room
      socket.join(user.room);

      // callback({ error });
    });

    // If any user sends the message
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      // Sending message to specified the room to all connected clients including sender
      io.to(user.room).emit('message', { user: user.name, text: message });

      callback();
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('User has left');
    });
  });
};

module.exports = manageChat;
