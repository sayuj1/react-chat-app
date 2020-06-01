import React from 'react';

import Styles from './OnlineRoom.module.css';

const OnlineRoom = ({ room, index }) => {
  return (
    <div className={Styles.container}>
      {index % 2 === 0 ? (
        <div className={`${Styles.room} ${Styles.even}`}>{room}</div>
      ) : (
        <div className={`${Styles.room} ${Styles.odd}`}>{room}</div>
      )}
    </div>
  );
};

export default OnlineRoom;
