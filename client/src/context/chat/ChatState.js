import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';
import {
  addUserAction,
  removeUserAction,
  updateUserAction,
} from './chatActions';

import axios from 'axios';

const ChatState = props => {
  const initialState = {
    users: [], // All online users
    user: null, // Current user
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addUser = (userInfo, infoType) => {
    switch (infoType) {
      case 'PARTIALINFO':
        dispatch(addUserAction(userInfo));
        break;
      case 'FULLINFO':
        dispatch(updateUserAction(userInfo));
        break;
      default:
        dispatch(addUserAction(userInfo));
        break;
    }
    // Add user to user state
  };

  const removeUser = () => {
    // Remove user to users state
    dispatch(removeUserAction());
  };

  return (
    <ChatContext.Provider
      value={{
        user: state.user,
        addUser,
        removeUser,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
