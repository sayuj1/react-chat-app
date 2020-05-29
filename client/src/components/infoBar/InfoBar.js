import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './InfoBar.module.css';
const InfoBar = ({ room }) => {
  return (
    <div className={Styles.infoBar}>
      <section className={Styles.infoBarHeader}>
        Room: <span className={Styles.messageRoom}>{room}</span>
      </section>
      <section className={Styles.exitChatIcon}>
        <Link to='/'>&times;</Link>
      </section>
      <span className={`${Styles.typingStatus} typingStatus`}></span>
    </div>
  );
};

export default InfoBar;
