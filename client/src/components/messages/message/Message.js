import React, { Fragment } from 'react';
import { getCurrentTime } from '../../../utils/formatTime';
import { motion } from 'framer-motion';

import Styles from './Message.module.css';
const Message = ({ message: { user, text, messageType }, name }) => {
  let isSentByCurrentUser = false;
  let sendTime = getCurrentTime();

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <Fragment>
      {messageType === 'INFOMESSAGE' ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150, duration: 1 }}
          className={Styles.infoMessageContainer}
        >
          <p className={Styles.infoMessageText}>
            <span className={Styles.infoUser}>{user.name}</span>
            {', '}
            {text}
            &nbsp;
            <span className={Styles.infoUserRoom}>{user.room}</span>
            {'!'}
          </p>
        </motion.div>
      ) : isSentByCurrentUser ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${Styles.messageContainer} ${Styles.currentUser}`}
        >
          <p className={Styles.nameOfUser}>{trimmedName}</p>
          <div className={Styles.senderMessageBox}>
            <p className={Styles.senderMessageText}>{text}</p>
          </div>
          <div className={Styles.senderMessageTime}>{sendTime}</div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`${Styles.messageContainer} ${Styles.otherUser}`}
        >
          <p className={Styles.nameOfUser}>{user}</p>
          <div className={Styles.receiverMessageBox}>
            <p className={Styles.receiverMessageText}>{text}</p>
          </div>
          <div className={Styles.receiverMessageTime}>{sendTime}</div>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Message;
