// User array for all users
const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Checking for existing user
  const existingUser = users.find(
    user => user.room === room && user.name === name
  );

  if (!name || !room) return { error: 'Username and Room are required.' };

  // If username already exists
  if (existingUser) {
    return { error: 'Username is taken.' };
  }

  // Creating user object
  const user = { id, name, room };
  // Pushing at the front
  users.unshift(user);

  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    // Removing user from the users array and return the removed user
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
