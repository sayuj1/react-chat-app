import { ADDUSER, REMOVEUSER } from './chatTypes';

// Add user
export const addUserAction = userInfo => {
  return {
    type: ADDUSER,
    payload: userInfo,
  };
};

// Remove User
export const removeUserAction = userId => {
  return {
    type: REMOVEUSER,
    payload: userId,
  };
};
