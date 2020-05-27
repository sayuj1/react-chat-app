import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';
import {
  addUserAction,
  removeUserAction,
  updateUserAction,
  addMessageAction,
} from './chatActions';

import axios from 'axios';

const ChatState = props => {
  const initialState = {
    users: [], // All online users
    user: null, // Current user,
    messages: [], // All messages
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

  const addMessage = message => {
    // Add message to the messages state
    dispatch(addMessageAction(message));
  };

  return (
    <ChatContext.Provider
      value={{
        user: state.user,
        messages: state.messages,
        addUser,
        removeUser,
        addMessage,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
