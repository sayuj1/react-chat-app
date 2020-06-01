import React from 'react';

import Styles from './OnlineRooms.module.css';
const OnlineRooms = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.roomHeader}>Online users</div>
      <div className={Styles.OnlineRoomsContainer}></div>
    </div>
  );
};

export default OnlineRooms;
