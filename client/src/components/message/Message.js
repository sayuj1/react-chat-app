import React, { Fragment } from 'react';

import Styles from './Message.module.css';
const Message = ({ message: { user, text, messageType }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <Fragment>
      {messageType === 'INFOMESSAGE' ? (
        <div className={Styles.infoMessageContainer}>
          <p className={Styles.infoMessageText}>
            <span className={Styles.infoUser}>{user.name}</span>
            {', '}
            {text}
            &nbsp;
            <span className={Styles.infoUserRoom}>{user.room}</span>
            {'!'}
          </p>
        </div>
      ) : isSentByCurrentUser ? (
        <div className={`${Styles.messageContainer} ${Styles.currentUser}`}>
          <p className={Styles.sentText}>{trimmedName}</p>
          <div className={Styles.senderMessageBox}>
            <p className={Styles.senderMessageText}>{text}</p>
          </div>
        </div>
      ) : (
        <div className={`${Styles.messageContainer} ${Styles.otherUser}`}>
          <p className={Styles.sentText}>{user}</p>
          <div className={Styles.receiverMessageBox}>
            <p className={Styles.receiverMessageText}>{text}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Message;
