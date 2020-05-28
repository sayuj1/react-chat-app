import React, { useState, useEffect, useContext } from 'react';

import io from 'socket.io-client';
import ChatContext from '../../context/chat/chatContext';
import OnlineUsers from '../onlineUsers/OnlineUsers';
import InfoBar from '../infoBar/InfoBar';
import InputMessageBox from '../inputMessageBox/InputMessageBox';
import Messages from '../messages/Messages';

import Styles from './Chat.module.css';
import { useHistory } from 'react-router-dom';

// Declaring socket
let socket;
const Chat = ({ location }) => {
  const {
    user,
    addUser,
    removeUser,
    messages,
    addMessage,
    setOnlineUsers,
  } = useContext(ChatContext);

  let history = useHistory();

  // Send Message
  const [message, setmessage] = useState('');

  // Backend endpoint
  const ENDPOINT = 'localhost:5000';

  // Showing online users container on large devices
  const handleResizeWindow = () => {
    if (window.innerWidth >= '768') {
      document.getElementById('onlineUsersBox').style.display = 'inline-block';
    } else {
      document.getElementById('onlineUsersBox').style.display = 'none';
    }
  };

  // Showing online users container
  const handleShowOnlineUsers = () => {
    document.getElementById('onlineUsersBox').style.display = 'block';
  };

  // Hiding online users container
  const handleCloseOnlineUsers = () => {
    document.getElementById('onlineUsersBox').style.display = 'none';
  };

  useEffect(() => {
    // Initializing the socket io instance (this will tell at the server side that a new connection is made)
    socket = io(ENDPOINT);

    // Sending user details to the socket at backend
    socket.emit('join', user, error => {
      if (error) {
        alert(`${error}`);
        // Redirecting user to homepage
        history.push('/');
      }
    });

    // Making sure online users container visible on resize
    window.addEventListener('resize', handleResizeWindow);

    // On disconnecting client
    return () => {
      // Disconnecting our socket connection
      socket.emit('disconnect');

      // Closing the current client socket
      socket.disconnect();

      // Removing user from the user state
      removeUser();

      // Removing resize event listener on unmounting the component
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [ENDPOINT, location.search]);

  // Updating user info stored in user state at the time of login(adding socket id)
  useEffect(() => {
    socket.on('userInfo', userData => {
      const { userInfo } = userData;
      const fullInfo = 'FULLINFO';
      addUser(userInfo, fullInfo);
    });
  }, [user]);

  // Adding messages to the state
  useEffect(() => {
    // Listening for message event
    socket.on('message', message => {
      // console.log('Inside calling it');

      // message --> {user, text}

      addMessage(message);
    });

    // Getting online users in a room
    socket.on('roomData', ({ users }) => {
      // users --> array
      setOnlineUsers(users);
    });
  }, []);

  // Handle send message
  const handleSendMessage = e => {
    e.preventDefault();

    if (message) {
      // message --> 'xyz'
      socket.emit('sendMessage', message, () => setmessage(''));
    }
  };

  return (
    <div className={Styles.outerContainer}>
      <button
        className={Styles.showOnlineUsersBtn}
        onClick={handleShowOnlineUsers}
      >
        Show
      </button>

      <section id='onlineUsersBox' className={Styles.onlineUsersContainer}>
        <div>
          <button
            className={Styles.closeOnlineUsersBtn}
            onClick={handleCloseOnlineUsers}
          >
            &times;
          </button>
        </div>
        <OnlineUsers />
      </section>
      <section className={Styles.container}>
        <section className='infoBar'>
          <InfoBar room={user.room} />
        </section>
        <section className={Styles.messagesContainer}>
          <Messages messages={messages} name={user.name} />
        </section>
        <section className={Styles.messageInputContainer}>
          <InputMessageBox
            message={message}
            setmessage={setmessage}
            handleSendMessage={handleSendMessage}
          />
        </section>
      </section>
    </div>
  );
};

export default Chat;
