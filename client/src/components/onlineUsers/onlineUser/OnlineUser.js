import React from 'react';

import Styles from './OnlineUser.module.css';

const OnlineUser = ({ user }) => {
  return (
    <div className={Styles.onlineUsers}>
      <div className={Styles.users}>{user}</div>
    </div>
  );
};

export default OnlineUser;
