const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('../utils/users');

const manageChat = io => {
  // Listening for new connection
  io.on('connect', socket => {
    console.log('we have a new connection');
    // const CHATME = 'Chat Me';
    socket.on('join', ({ name, room }, callback) => {
      // console.log('socket id', socket.id);
      const { error, user } = addUser({ id: socket.id, name, room });
      console.log('user', user);
      if (error) return callback({ error });

      // Sending user details at client-side
      socket.emit('userInfo', { userInfo: user });

      // Welcoming user
      socket.emit('message', {
        user: user,
        text: `welcome to the room`,
        messageType: 'INFOMESSAGE',
      });

      // Letting other users to know which user has joined the chat
      socket.broadcast.to(user.room).emit('message', {
        user: user,
        text: `has joined the room`,
        messageType: 'INFOMESSAGE',
      });

      // Joining Room
      socket.join(user.room);

      // Getting total no. of users in the room
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });

      // callback({ error });
    });

    // If any user sends the message
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      // Sending message to specified the room to all connected clients including sender
      io.to(user.room).emit('message', {
        user: user.name,
        text: message,
        messageType: 'MESSAGE',
      });

      // Sending total no. of users in the room
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });

      // Clear the message input box
      callback();
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('User has left');
      const user = removeUser(socket.id);

      if (user) {
        io.to(user.room).emit('message', {
          user: user,
          text: `has left the room`,
          messageType: 'INFOMESSAGE',
        });
      }
    });
  });
};

module.exports = manageChat;
