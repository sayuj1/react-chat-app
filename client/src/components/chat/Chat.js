import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import ChatContext from '../../context/chat/chatContext';

let socket;
const Chat = ({ location }) => {
  const { user, removeUser } = useContext(ChatContext);
  const ENDPOINT = 'localhost:5000';
  const [userInfo, setuserInfo] = useState({
    id: '',
    name: '',
    room: '',
  });
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', user);

    return () => {
      removeUser();
    };
  }, [ENDPOINT, location.search]);

  return <div>Chat</div>;
};

export default Chat;
