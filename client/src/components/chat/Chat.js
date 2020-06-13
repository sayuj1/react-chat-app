import React, { useState, useEffect, useContext } from 'react';

import io from 'socket.io-client';
import ChatContext from '../../context/chat/chatContext';
import OnlineUsers from '../onlineUsers/OnlineUsers';
import InfoBar from '../infoBar/InfoBar';
import InputMessageBox from '../inputMessageBox/InputMessageBox';
import Messages from '../messages/Messages';
import Page404 from '../page404/Page404';
import {
  handleResizeWindow,
  handleShowOnlineUsers,
  handleCloseOnlineUsers,
} from './manage-chat-socket-client/chatFunc';

import {
  initSocket,
  disconnectSocket,
  setRooms,
  updateUserInfo,
  setNewMessage,
  setUsers,
  setTyping,
  sendTypingMessage,
  sendMessage,
} from './manage-chat-socket-client/socketClient';

import closeIcon from '../../images/desktop/close-iconx.png';

import Styles from './Chat.module.css';
import { useHistory } from 'react-router-dom';

// Declaring socket
let socket;

const Chat = ({ location }) => {
  const {
    ENDPOINT,
    user,
    addUser,
    removeUser,
    messages,
    addMessage,
    setOnlineUsers,
    setOnlineRooms,
    rooms,
  } = useContext(ChatContext);

  let history = useHistory();

  // For sending message
  const [message, setmessage] = useState('');

  useEffect(() => {
    socket = initSocket(
      ENDPOINT,
      socket,
      user,
      io,
      history,
      handleResizeWindow
    );

    // On disconnecting client
    return () => {
      disconnectSocket(socket, removeUser, handleResizeWindow);
    };

    // eslint-disable-next-line
  }, [ENDPOINT, location.search]);

  // Setting active rooms to chat state
  useEffect(() => {
    setRooms(socket, user, setOnlineRooms);
    // eslint-disable-next-line
  }, [rooms]);

  // Updating user info stored in user state at the time of login(adding socket id)
  useEffect(() => {
    updateUserInfo(socket, user, addUser);
    // eslint-disable-next-line
  }, [user]);

  // Adding messages to the state
  useEffect(() => {
    setNewMessage(socket, user, addMessage);
    setUsers(socket, user, setOnlineUsers);
    // eslint-disable-next-line
  }, []);

  const [typing, settyping] = useState(false);

  // Showing typing user
  useEffect(() => {
    setTyping(socket, user, typing);
    // eslint-disable-next-line
  }, [typing]);

  // Sending typing user to backend
  const handleTypingMessage = e => {
    sendTypingMessage(socket, message, settyping);
  };

  // Handle send message
  const handleSendMessage = e => {
    e.preventDefault();
    // console.log('key', e.key);

    sendMessage(socket, message, settyping, setmessage);
  };

  return user === null ? (
    <Page404 />
  ) : (
    <div className={Styles.outerContainer}>
      <section id='onlineUsersBox' className={Styles.onlineUsersContainer}>
        <div>
          {/* <button
            className={Styles.closeOnlineUsersBtn}
            onClick={handleCloseOnlineUsers}
          >
            &times;
          </button> */}
          <img
            src={closeIcon}
            className={Styles.closeOnlineUsersBtn}
            onClick={handleCloseOnlineUsers}
          />
        </div>

        <OnlineUsers />
      </section>
      <section className={Styles.container}>
        <InfoBar
          room={user.room}
          handleShowOnlineUsers={handleShowOnlineUsers}
        />

        <section className={Styles.messagesContainer}>
          <Messages messages={messages} name={user.name} />
        </section>
        <section className={Styles.messageInputContainer}>
          <InputMessageBox
            message={message}
            setmessage={setmessage}
            handleSendMessage={handleSendMessage}
            handleTypingMessage={handleTypingMessage}
          />
        </section>
      </section>
    </div>
  );
};

export default Chat;
