import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './InfoBar.module.css';
const InfoBar = ({ room }) => {
  return (
    <div className={Styles.infoBar}>
      <section className={Styles.infoBarHeader}>Room: {room}</section>
      <section className={Styles.exitChatIcon}>
        <Link to='/'>&times;</Link>
      </section>
    </div>
  );
};

export default InfoBar;
