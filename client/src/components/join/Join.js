import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ChatContext from '../../context/chat/chatContext';

import Styles from './Join.module.css';

const Join = () => {
  const { addUser } = useContext(ChatContext);

  // Defining State
  const [userInfo, setuserInfo] = useState({
    name: '',
    room: '',
  });

  // Handling form fields
  const handleChange = e => {
    console.log(e.target);
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handling joining room
  const handleSubmit = e => {
    // Check for empty name & empty room
    if (!userInfo.name || !userInfo.room) {
      e.preventDefault();
    }

    const partialInfo = 'PARTIALINFO';
    // Joining room
    addUser(userInfo, partialInfo);
  };

  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.innerContainer}>
        <h1 className={Styles.heading}>Welcome To Chatme</h1>
        <div className={Styles.fieldContainer}>
          <div className={Styles.inputField}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              value={userInfo.name}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className={Styles.inputField}>
            <label htmlFor='room'>Room</label>
            <input
              type='text'
              name='room'
              id='room'
              placeholder='Enter room'
              value={userInfo.room}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <Link to='/chat' onClick={e => handleSubmit(e)}>
            <button className={Styles.joinRoomBtn}>Join Room</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
