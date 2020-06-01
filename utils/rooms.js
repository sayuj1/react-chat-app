const { getUsersInRoom } = require('./users');

const rooms = [];

// Add room
const addRoom = room => {
  const joiningRoom = room.trim().toLowerCase();

  const existingRoom = rooms.find(room => room === joiningRoom);
  if (!existingRoom) {
    rooms.unshift(joiningRoom);
  }
};

// Get all rooms
const getAllRooms = () => {
  return rooms;
};

// Delete room
const deleteRoom = userRoom => {
  if (getUsersInRoom(userRoom).length === 0) {
    const index = rooms.findIndex(room => room === userRoom);
    if (index !== -1) {
      // Removing room from the rooms array
      rooms.splice(index, 1);
    }
  }
};

module.exports = { addRoom, getAllRooms, deleteRoom };
