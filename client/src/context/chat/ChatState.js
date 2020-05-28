import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';
import {
  addUserAction,
  removeUserAction,
  updateUserAction,
  addMessageAction,
  setOnlineUsersAction,
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

  const setOnlineUsers = users => {
    dispatch(setOnlineUsersAction(users));
  };

  return (
    <ChatContext.Provider
      value={{
        user: state.user,
        messages: state.messages,
        users: state.users,
        addUser,
        removeUser,
        addMessage,
        setOnlineUsers,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
