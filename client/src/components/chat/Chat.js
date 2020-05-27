import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import ChatContext from '../../context/chat/chatContext';

// Declaring socket
let socket;
const Chat = ({ location }) => {
  const { user, addUser, removeUser } = useContext(ChatContext);

  // Backend endpoint
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    // Initializing the socket io instance (this will tell at the server side that a new connection is made)
    socket = io(ENDPOINT);

    socket.emit('join', user, () => {
      // alert('Error', error);
    });

    // On disconnecting client
    return () => {
      // Disconnecting our socket connection
      socket.emit('disconnect');

      // Turning off the current client socket
      socket.off();

      // Removing user from the user state
      removeUser();
    };
  }, [ENDPOINT, location.search]);

  // Updating user info (adding socket id)
  useEffect(() => {
    socket.on('userInfo', userData => {
      const { userInfo } = userData;
      const fullInfo = 'FULLINFO';
      addUser(userInfo, fullInfo);
    });
  }, [user]);

  useEffect(() => {
    // Listening for message event
    socket.on('message', message => {});
  });

  return <div>Chat</div>;
};

export default Chat;
