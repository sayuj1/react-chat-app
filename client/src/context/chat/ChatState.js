import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';
import { addUserAction, removeUserAction } from './chatActions';

import axios from 'axios';

const ChatState = props => {
  const initialState = {
    users: [], // All online users
    user: {}, // Current user
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addUser = userInfo => {
    // If no error then add user to user state
    dispatch(addUserAction(userInfo));
  };

  const removeUser = () => {
    // If no error then remove user to users state
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
