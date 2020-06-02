import React, { useState, useEffect, useContext } from 'react';
import { ENV_ENDPOINT } from '../../config/default';
import io from 'socket.io-client';
import ChatContext from '../../context/chat/chatContext';
import OnlineUsers from '../onlineUsers/OnlineUsers';
import InfoBar from '../infoBar/InfoBar';
import InputMessageBox from '../inputMessageBox/InputMessageBox';
import Messages from '../messages/Messages';
import Page404 from '../page404/Page404';
import { motion } from 'framer-motion';

import Styles from './Chat.module.css';
import { useHistory } from 'react-router-dom';

// Declaring socket
let socket;

const Chat = ({ location }) => {
  // Backend Endpoint
  let ENDPOINT;
  if (process.env.NODE_ENV === 'development') {
    ENDPOINT = ENV_ENDPOINT.DEV_POINT;
  } else {
    ENDPOINT = ENV_ENDPOINT.PROD_POINT;
  }

  const {
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
    if (user !== null) {
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
    }
    // eslint-disable-next-line
  }, [ENDPOINT, location.search]);

  // Setting active rooms to chat state
  useEffect(() => {
    if (user !== null) {
      socket.on('rooms', rooms => {
        setOnlineRooms(rooms);
      });
    }
  }, [rooms]);

  // Updating user info stored in user state at the time of login(adding socket id)
  useEffect(() => {
    if (user !== null) {
      socket.on('userInfo', userData => {
        const { userInfo } = userData;
        const fullInfo = 'FULLINFO';
        addUser(userInfo, fullInfo);
      });
    }
    // eslint-disable-next-line
  }, [user]);

  // Adding messages to the state
  useEffect(() => {
    if (user !== null) {
      // Listening for message event
      socket.on('message', message => {
        // console.log('Inside calling it');

        // message --> {user, text}

        addMessage(message);

        // Scroll Down
        let chatMessagesScroll = document.querySelector('.messagesContainer');
        chatMessagesScroll.scrollTop = chatMessagesScroll.scrollHeight;
      });

      // Getting online users in a room
      socket.on('roomData', ({ users }) => {
        // users --> array
        setOnlineUsers(users);
      });
    }
    // eslint-disable-next-line
  }, []);

  const [typing, settyping] = useState(false);

  // Showing typing user
  useEffect(() => {
    if (user !== null) {
      socket.on('typingUser', userTyping => {
        if (typing) {
          document.querySelector('.typingStatus').innerHTML = userTyping;
        } else {
          document.querySelector('.typingStatus').innerHTML = userTyping;
        }
      });
    }
    // eslint-disable-next-line
  }, [typing]);

  // Handling typing user
  const handleTypingMessage = e => {
    if (message) {
      settyping(true);
      socket.emit('typing', { typing: true });
    } else {
      settyping(false);
      socket.emit('typing', { typing: false });
    }
  };

  // Handle send message
  const handleSendMessage = e => {
    e.preventDefault();
    // console.log('key', e.key);

    settyping(false);
    socket.emit('typing', { typing: false });
    if (message) {
      // message --> 'xyz'

      socket.emit('sendMessage', message, () => setmessage(''));
    }
  };

  return user === null ? (
    <Page404 />
  ) : (
    <div className={Styles.outerContainer}>
      <button
        className={Styles.showOnlineUsersBtn}
        onClick={handleShowOnlineUsers}
      >
        Show
      </button>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        id='onlineUsersBox'
        className={Styles.onlineUsersContainer}
      >
        <div>
          <button
            className={Styles.closeOnlineUsersBtn}
            onClick={handleCloseOnlineUsers}
          >
            &times;
          </button>
        </div>

        <OnlineUsers />
      </motion.section>
      <section className={Styles.container}>
        <InfoBar room={user.room} />

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
