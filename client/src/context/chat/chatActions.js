import {
  SETENDPOINT,
  ADDUSER,
  REMOVEUSER,
  UPDATEUSER,
  ADDMESSAGE,
  SETONLINEUSERS,
  SETONLINEROOMS,
} from './chatTypes';

// Setting Endpoint
export const setEndPointAction = endPoint => {
  return {
    type: SETENDPOINT,
    payload: endPoint,
  };
};

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
