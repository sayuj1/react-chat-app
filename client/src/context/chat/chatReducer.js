import { ADDUSER, REMOVEUSER, UPDATEUSER } from './chatTypes';

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        user: action.payload,
        users: [action.payload, ...state.users],
      };
    case UPDATEUSER:
      return {
        ...state,
        user: action.payload,
        users: state.users.map(user =>
          user.name.trim().toLowerCase() ===
            action.payload.name.trim().toLowerCase() &&
          user.room.trim().toLowerCase() ===
            action.payload.room.trim().toLowerCase()
            ? action.payload
            : user
        ),
      };
    case REMOVEUSER:
      return {
        ...state,
        user: '',
        users: state.users.filter(user => user.id != action.payload),
      };
  }
};
