import React, { useReducer } from 'react';
import ChatContext from './chatContext';
import { chatReducer } from './chatReducer';
import {
  setEndPointAction,
  addUserAction,
  removeUserAction,
  updateUserAction,
  addMessageAction,
  setOnlineUsersAction,
  setOnlineRoomsAction,
} from './chatActions';

const ChatState = props => {
  const initialState = {
    ENDPOINT: null,
    users: [], // All online users
    user: null, // Current user,
    messages: [], // All messages,
    rooms: [], // All active rooms
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const setEndPoint = endPoint => {
    dispatch(setEndPointAction(endPoint));
  };

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

  // Setting online rooms
  const setOnlineRooms = rooms => {
    // const response = await axios.get('/api/rooms');
    // const { rooms } = response.data;
    dispatch(setOnlineRoomsAction(rooms));
  };

  return (
    <ChatContext.Provider
      value={{
        ENDPOINT: state.ENDPOINT,
        user: state.user,
        messages: state.messages,
        users: state.users,
        rooms: state.rooms,
        setEndPoint,
        addUser,
        removeUser,
        addMessage,
        setOnlineUsers,
        setOnlineRooms,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
