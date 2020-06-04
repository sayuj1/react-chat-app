import React, { useContext, Fragment } from 'react';
import ChatContext from '../../context/chat/chatContext';
import OnlineUser from './onlineUser/OnlineUser';

import Styles from './OnlineUsers.module.css';

const OnlineUsers = () => {
  const { users } = useContext(ChatContext);
  return (
    <Fragment>
      <div className={Styles.onlineUsersDiv}>
        <div className={Styles.onlineUsersHeader}>Online Users</div>
        <div className={Styles.totalOnlineUsers}>
          Total Users:{' '}
          <span className={Styles.onlineUsersNum}>{users.length}</span>
        </div>

        {users.map((user, i) => (
          <div key={user.id}>
            <OnlineUser user={user.name} userNo={i} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default OnlineUsers;
