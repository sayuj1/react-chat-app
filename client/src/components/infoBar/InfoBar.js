import React from 'react';

import showUserIcon from '../../images/desktop/Icon material-group.png';

import Styles from './InfoBar.module.css';
const InfoBar = ({ room, handleShowOnlineUsers }) => {
  return (
    <div className={Styles.infoBar}>
      {/* <button
        className={Styles.showOnlineUsersBtn}
        onClick={handleShowOnlineUsers}
      > */}
      <img
        src={showUserIcon}
        className={Styles.showOnlineUsersBtn}
        onClick={handleShowOnlineUsers}
        alt='group-icon'
      />
      {/* Show */}
      {/* </button> */}
      <section className={Styles.infoBarHeader}>
        Room: <span className={Styles.messageRoom}>{room}</span>
      </section>
      <span className={`${Styles.typingStatus} typingStatus`}>
        {/* <Link to='/'>&times;</Link> */}
      </span>
      {/* <span className={`${Styles.typingStatus} typingStatus`}></span> */}
    </div>
  );
};

export default InfoBar;
