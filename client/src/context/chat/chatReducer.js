import { ADDUSER, REMOVEUSER } from './chatTypes';

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVEUSER:
      return {
        ...state,
        users: state.users.filter(user => user.id != action.payload),
      };
  }
};
