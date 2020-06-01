import React, { useContext, useEffect } from 'react';
import ChatContext from '../../context/chat/chatContext';
import OnlineRoom from './onlineRoom/OnlineRoom';

import Styles from './OnlineRooms.module.css';

let totalRooms = 0;
const OnlineRooms = () => {
  const { rooms } = useContext(ChatContext);
  totalRooms = rooms.length;

  return (
    <div className={Styles.container}>
      <div className={Styles.roomHeader}>
        Online Room{totalRooms <= 1 ? null : <span>s</span>} - {totalRooms}
      </div>
      <div className={Styles.OnlineRoomsContainer}>
        {totalRooms === 0 ? (
          <h2>No Rooms Found!</h2>
        ) : (
          rooms.map((room, i) => (
            <OnlineRoom key={room} room={room} index={i} />
          ))
        )}
      </div>
    </div>
  );
};

export default OnlineRooms;
