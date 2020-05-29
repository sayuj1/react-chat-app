const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('../utils/users');
const formatMessage = require('../utils/formatMessage');

const manageChat = io => {
  // Listening for new connection
  io.on('connect', socket => {
    console.log('we have a new connection');
    // const CHATME = 'Chat Me';
    socket.on('join', ({ name, room }, callback) => {
      // console.log('socket id', socket.id);
      const { error, user } = addUser({ id: socket.id, name, room });
      // console.log('user', user);
      if (error) return callback(error);

      // Joining Room
      socket.join(user.room);

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

      // Getting total no. of users in the room
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });

      callback();
    });

    // If any user sends the message
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
      let newMessage = {
        user: user.name,
        text: message,
        messageType: 'MESSAGE',
      };

      // Sending message to specified the room to all connected clients including sender
      io.to(user.room).emit('message', formatMessage(newMessage));

      // Clear the message input box
      callback();
    });

    // Listening for typing
    socket.on('typing', data => {
      const user = getUser(socket.id);
      if (data.typing == true) {
        //broadcasting to the specified room to all clients except the current user
        socket.broadcast
          .to(user.room)
          .emit('typingUser', `${user.name} is typing...`);
      } else {
        socket.broadcast.to(user.room).emit('typingUser', '');
      }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);

      if (user) {
        io.to(user.room).emit('message', {
          user: user,
          text: `has left the room`,
          messageType: 'INFOMESSAGE',
        });

        // Sending total no. of users in the room
        io.to(user.room).emit('roomData', {
          room: user.room,
          users: getUsersInRoom(user.room),
        });
      }
    });
  });
};

module.exports = manageChat;
