import React from 'react';

import Styles from './OnlineUser.module.css';

const OnlineUser = ({ user, userNo }) => {
  return (
    <div className={Styles.onlineUsers}>
      {userNo % 2 === 0 ? (
        <div className={Styles.usersEven}>{user}</div>
      ) : (
        <div className={Styles.usersOdd}>{user}</div>
      )}
    </div>
  );
};

export default OnlineUser;
