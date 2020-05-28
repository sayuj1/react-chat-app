import {
  ADDUSER,
  REMOVEUSER,
  UPDATEUSER,
  ADDMESSAGE,
  SETONLINEUSERS,
} from './chatTypes';

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
        users: state.users.filter(user => user.id !== action.payload),
        messages: [], // removing messages on leaving chat room
      };

    case ADDMESSAGE:
      // console.log('payload ', action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case SETONLINEUSERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
