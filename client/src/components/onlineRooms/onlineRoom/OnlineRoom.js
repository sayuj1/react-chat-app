import React from 'react';

import Styles from './OnlineRoom.module.css';

const OnlineRoom = ({ room, index }) => {
  return (
    <div className={Styles.container}>
      {index % 2 === 0 ? (
        <div className={`${Styles.room} `}>{room}</div>
      ) : (
        <div className={`${Styles.room} `}>{room}</div>
      )}
    </div>
  );
};

export default OnlineRoom;
