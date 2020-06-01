import {
  ADDUSER,
  REMOVEUSER,
  UPDATEUSER,
  ADDMESSAGE,
  SETONLINEUSERS,
  SETONLINEROOMS,
} from './chatTypes';

// Add user
export const addUserAction = userInfo => {
  return {
    type: ADDUSER,
    payload: userInfo,
  };
};

// Update user info
export const updateUserAction = userInfo => {
  return {
    type: UPDATEUSER,
    payload: userInfo,
  };
};

// Remove user
export const removeUserAction = userId => {
  return {
    type: REMOVEUSER,
    payload: userId,
  };
};

// Add message to the messages State
export const addMessageAction = message => {
  return {
    type: ADDMESSAGE,
    payload: message,
  };
};

// Adding list of online users
export const setOnlineUsersAction = users => {
  return {
    type: SETONLINEUSERS,
    payload: users,
  };
};

// Getting list of all active rooms
export const setOnlineRoomsAction = rooms => {
  return {
    type: SETONLINEROOMS,
    payload: rooms,
  };
};
