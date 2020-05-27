import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';

const ChatState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{}}>{props.children}</ChatContext.Provider>
  );
};

export default ChatState;
