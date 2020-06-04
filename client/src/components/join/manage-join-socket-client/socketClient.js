export const initSocket = (ENDPOINT, socket, io, setOnlineRooms) => {
  socket = io(ENDPOINT);
  socket.emit('getRooms');
  socket.on('rooms', rooms => {
    setOnlineRooms(rooms);
  });
  return socket;
};

export const disconnectSocket = socket => {
  if (socket) {
    socket.emit('disconnect');
    socket.disconnect();
  }
};
