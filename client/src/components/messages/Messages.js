import React from 'react';
import Message from '../message/Message';

import Styles from './Messages.module.css';

const Messages = ({ messages, name }) => {
  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.container}>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
