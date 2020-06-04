export const initSocket = (ENDPOINT, socket, io) => {
  socket = io(ENDPOINT);
  socket.emit('getRooms');
  return socket;
};

export const disconnectSocket = socket => {
  if (socket) {
    socket.emit('disconnect');
    socket.disconnect();
  }
};

export const setRooms = (socket, setOnlineRooms) => {
  socket.on('rooms', rooms => {
    setOnlineRooms(rooms);
  });
};
