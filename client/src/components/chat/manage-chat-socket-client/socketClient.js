export const initSocket = (
  ENDPOINT,
  socket,
  user,
  io,
  history,
  handleResizeWindow
) => {
  if (user !== null) {
    // Initializing the socket io instance (this will tell at the server side that a new connection is made)
    socket = io(ENDPOINT);
    // Sending user details to the socket at backend
    socket.emit('join', user, error => {
      if (error) {
        alert(`${error}`);
        // Redirecting user to homepage
        history.push('/');
      }
    });

    // Making sure online users container visible on resize
    window.addEventListener('resize', handleResizeWindow);

    return socket;
  }
};

export const disconnectSocket = (socket, removeUser, handleResizeWindow) => {
  if (socket) {
    // Stop typing when user left
    socket.emit('stopTyping');

    // Disconnecting our socket connection
    socket.emit('disconnect');

    // Closing the current client socket
    socket.disconnect();

    // Removing user from the user state
    removeUser();

    // Removing resize event listener on unmounting the component
    window.removeEventListener('resize', handleResizeWindow);
  }
};

export const setRooms = (socket, user, setOnlineRooms) => {
  if (user !== null) {
    socket.on('rooms', rooms => {
      setOnlineRooms(rooms);
    });
  }
};

export const updateUserInfo = (socket, user, addUser) => {
  if (user !== null) {
    socket.on('userInfo', userData => {
      const { userInfo } = userData;
      const fullInfo = 'FULLINFO';
      addUser(userInfo, fullInfo);
    });
  }
};

export const setNewMessage = (socket, user, addMessage) => {
  if (user !== null) {
    // Listening for message event
    socket.on('message', message => {
      // console.log('Inside calling it');

      // message --> {user, text}

      addMessage(message);

      // Scroll Down
      let chatMessagesScroll = document.querySelector('.messagesContainer');
      chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;
    });
  }
};

export const setUsers = (socket, user, setOnlineUsers) => {
  if (user !== null) {
    // Getting online users in a room
    socket.on('roomData', ({ users }) => {
      // users --> array
      setOnlineUsers(users);
    });
  }
};

export const setTyping = (socket, user, typing) => {
  if (user !== null) {
    socket.on('typingUser', userTyping => {
      if (typing) {
        document.querySelector('.typingStatus').innerHTML = userTyping;
      } else {
        document.querySelector('.typingStatus').innerHTML = userTyping;
      }
    });
  }
};

// Handling typing user
export const sendTypingMessage = (user, socket, message, settyping) => {
  if (user !== null) {
    if (message) {
      settyping(true);
      socket.emit('typing', { typing: true });
    } else {
      settyping(false);
      socket.emit('typing', { typing: false });
    }
  }
};

export const sendMessage = (socket, message, settyping, setmessage) => {
  settyping(false);
  socket.emit('typing', { typing: false });
  if (message) {
    // message --> 'xyz'

    socket.emit('sendMessage', message, () => setmessage(''));
  }
};
