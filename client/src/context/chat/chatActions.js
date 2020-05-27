import { ADDUSER, REMOVEUSER, UPDATEUSER } from './chatTypes';

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
