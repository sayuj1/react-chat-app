import { ADDUSER, REMOVEUSER, UPDATEUSER, ADDMESSAGE } from './chatTypes';

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATEUSER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVEUSER:
      return {
        ...state,
        user: '',
        users: state.users.filter(user => user.id != action.payload),
      };
    case ADDMESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
